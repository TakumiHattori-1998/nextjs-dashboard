"use client"

import { lusitana } from '@/app/ui/fonts';
import { useState } from 'react';


export default function EnterForm () {
    const [url, setUrl] = useState<string>('');
    const fetchScreenshot = async() => {
        try {
            const response = await fetch(`api/fetchhtml?url=${encodeURIComponent(url)}`);
            if (response.ok) {
                console.log(response)
            }else {
                console.error('response is not ok');
            }
        }catch (error){
            console.error('Failed to fetch screenshot');
        }
    };

    return (
        <div className="flex w-full flex-col md:col-span-4 ml-[20px] mt-[20px]">
            <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Enter URL to test
            </h2>
            <div className="flex space-x-[10px] max-w-[800px]">
                <input className="bg-gray-50 border-none rounded-xl w-[70%] focus:outline-none" type="text" onChange={(e) => setUrl(e.target.value)}/>
                <button className="bg-gray-500 border-none text-white rounded-xl w-[20%]" onClick={fetchScreenshot}>check design</button>
            </div>
        </div>
    );
}