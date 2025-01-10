'use client'; // Ensure it's a client component in Next.js

import { useEffect, useState } from 'react';
import Image from 'next/image';
export default function Home() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const options = {
                    method: 'GET',
                    headers: { accept: 'application/json' },
                };

                const response = await fetch(
                    'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true',
                    options
                );

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();
                setData(result.bitcoin);
                console.log(result.bitcoin);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchData();
    }, []);

    if (error) {
        return <div className="text-center mt-10 text-red-500">Error: {error}</div>;
    }

    if (!data) {
        return <div className="text-center mt-10">Loading...</div>;
    }

    return (
        <div className="  flex justify-center items-center p-4 mt-5">
            <div className="bg-white shadow-md rounded-lg p-8 w-full  border border-gray-200">
               
                <div className="flex justify-between items-center">
                    <div className='flex gap-2 items-center'>
                        <Image
                            src="/Bitcoin.svg.png"
                            alt="Bitcoin Logo"
                            width={30}
                            height={30} />
                        <h1 className="text-xl text-[#0B1426]  font-semibold">Bitcoin  <span className=' font-medium relative bottom-[0.1rem] text-sm text-[#5D667B]'>BTC</span></h1>
                        <p className="text-sm bg-[#768396] p-2 ml-6 rounded-md">Rank #1</p>
                    </div>
                    
                </div>

           
                <div className="mt-6">
                    <div className='inline-flex gap-4'>
                    <h2 className="text-2xl text-black tracking-wider font-semibold">${data.usd.toLocaleString()}</h2> 
                    <div>
                    <span
                        className={`text-xs font-medium px-2 py-1 rounded-md ${data.usd_24h_change > 0
                                ? 'bg-green-100 text-green-600'
                                : 'bg-red-100 text-red-600'
                            }`}
                    >
                        {data.usd_24h_change.toFixed(2)}% 
                    </span>
                        <span className=' text-[#768396] text-xs font-medium p-1'> (24H) </span>
                    </div>
                    </div>
                    <p className="text-sm py-1 text-black tracking-wider">₹ {data.inr.toLocaleString()}</p>
                </div>
                <hr  className='mt-3'/>

                {/* Chart Section */}
                <div className="mt-5">
                    <h3 className="text-sm text-black font-semibold pb-3 mb-2">Bitcoin Price Chart (USD)</h3>
                    <iframe
                        src="https://s.tradingview.com/embed-widget/advanced-chart/?symbol=COINBASE:BTCUSD&theme=light&style=1&locale=en"
                        width="100%"
                        height="450"
                        frameBorder="0"
                        scrolling="no"
                        allowtransparency="true"
                        style={{ border: 'none' }}
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
