import type { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer';

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const {url} = req.query;
    console.log(url)
    if (typeof url !== 'string') {
        return res.status(400).json({ error: 'URL is required' });
    }

    try {
        // Puppeteer APIによるページのhtml取得
        const browser = await puppeteer.launch({headless:true});
        const page = await browser.newPage();
        await page.goto(url, { waitUntil: 'networkidle0' }); // Wait for all network requests to finish
        const html = await page.content();
        console.log(html)
        await browser.close();
    
        // AWS bedrock APIへURLから取得したファイルをPOST
        const awsurl = 'https://example'; //安全のためダミーURLとする
        const JSONdata = {
            key1: html,
        };

        try{
            const response = await fetch(awsurl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(JSONdata),
            });
            const data = await response.json();

        } catch (error) {
            console.error('Error on AWS API:', error);
            alert(JSON.stringify(error));
        }

    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).json({ error: 'Failed to retrieve content' });
    }
}