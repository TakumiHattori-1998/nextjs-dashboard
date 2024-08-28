import { lusitana } from '@/app/ui/fonts';

export default async function ShowCandidates () {
    return (
        <div className="flex w-full flex-col md:col-span-4 ml-[20px] mt-[20px] bg-gray-50 h-[400px] max-w-[1200px]">
            <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl ml-[10px] mt-[10px]`}>
                Variations
            </h2>
            <div className="flex space-x-[10px] max-w-[800px]">
                <input className="bg-gray-50 border-none rounded-xl w-[70%] focus:outline-none" type="text" />
            </div>
        </div>
    );
}