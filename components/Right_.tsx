'use client'
import React, {useState,useEffect} from 'react'
import Image from 'next/image'
const Right_ = () => {
    const [trendingCoins, setTrendingCoins] = useState([]);

    useEffect(() => {
      async function fetchTrendingCoins() {
        try {
          const res = await fetch("https://api.coingecko.com/api/v3/search/trending");
          const data = await res.json();
          setTrendingCoins(data.coins.slice(0, 3)); // Get the top 3 trending coins
        } catch (error) {
          console.error("Error fetching trending coins:", error);
        }
      }
  
      fetchTrendingCoins();
    }, []);
    console.log(trendingCoins)
  
    return (
      <div className="min-h-screen flex flex-col items-center p-4">
        
        <div className="bg-[#0052FE] flex flex-col items-center mt-5 text-white rounded-xl shadow-md p-9 w-full max-w-md">
          <h1 className="text-xl font-semibold max-w-[11em] text-center  mb-2">Get Started with KoinX for FREE</h1>
          <p className="text-sm mb-4 max-w-lg text-center">
            With our range of features that you can equip for free, KoinX allows
            you to be more educated and aware of your tax reports.
          </p>
          <Image className='py-8 w-[9em]'   src="/R_img.svg" alt="KoinX Logo" width={100} height={100} />

          <button className="bg-white text-black  py-2 px-4 rounded-lg hover:bg-gray-200">
            Get Started for FREE →
          </button>
        </div>
  
      
        <div className="bg-white text-black rounded-lg shadow-md p-6 w-full max-w-md mt-6">
          <h2 className="text-xl font-semibold mb-4">Trending Coins (24h)</h2>
          <ul>
            {trendingCoins.length > 0 ? (
              trendingCoins.map((coin) => (
                <li
                  key={coin.item.id}
                  className="flex items-center justify-between mb-3 last:mb-0"
                >
                  <div className="flex py-1  items-center">
                    <img
                      src={coin.item.thumb}
                      alt={coin.item.name}
                      className="w-8 h-8 rounded-full mr-3"
                    />
                    <span className="font-medium ">{coin.item.name}</span>
                    <span className=" ml-2">
                      ({coin.item.symbol})
                    </span>
                  </div>
                  <span className="bg-green-100 text-xs font-medium px-2 py-1 rounded-md  text-green-600 ">
                    +{coin.item.score.toFixed(2)}%
                  </span>
                </li>
              ))
            ) : (
              <p className="text-gray-500">Loading...</p>
            )}
          </ul>
        </div>
      </div>
  )
}

export default Right_

