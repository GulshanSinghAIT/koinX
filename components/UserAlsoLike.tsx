'use client'
import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import axios from 'axios';

// Initialize the Swiper navigation module
SwiperCore.use([Navigation]);

const UserAlsoLike = () => {
    const [trendingCoins, setTrendingCoins] = useState([]);
    const swiperRef1 = useRef(null); // Ref for the first carousel
    const swiperRef2 = useRef(null); // Ref for the second carousel

    useEffect(() => {
        const fetchTrendingCoins = async () => {
            try {
                const response = await axios.get("https://api.coingecko.com/api/v3/search/trending");
                const coins = response.data.coins.map((coin) => ({
                    name: coin.item.name,
                    symbol: coin.item.symbol,
                    price: parseFloat(coin.item.price_btc).toFixed(8),
                    marketCapRank: coin.item.market_cap_rank,
                    image: coin.item.large,
                    sparkline: coin.item.data?.sparkline,
                    persentage: coin.item.data?.price_change_percentage_24h?.inr || 0,
                }));
                setTrendingCoins(coins);
            } catch (error) {
                console.error("Error fetching trending coins:", error);
            }
        };

        fetchTrendingCoins();
    }, []);

    const handlePrev1 = () => {
        if (swiperRef1.current) {
            swiperRef1.current.swiper.slidePrev();
        }
    };

    const handleNext1 = () => {
        if (swiperRef1.current) {
            swiperRef1.current.swiper.slideNext();
        }
    };

    const handlePrev2 = () => {
        if (swiperRef2.current) {
            swiperRef2.current.swiper.slidePrev();
        }
    };

    const handleNext2 = () => {
        if (swiperRef2.current) {
            swiperRef2.current.swiper.slideNext();
        }
    };

    return (
        <div className="bg-white text-black py-20">
            <div className="max-w-[87em] mx-auto px-4">
                <h2 className="text-2xl font-semibold mb-4">You May Also Like</h2>
                <div className="relative">
                    <Swiper
                        ref={swiperRef1} // Attach first swiper instance to ref
                        spaceBetween={20}
                        slidesPerView={4}
                        loop={true}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 5 },
                        }}
                    >
                        {trendingCoins.map((coin, index) => (
                            <SwiperSlide key={index}>
                                <div className="min-w-[200px] bg-white rounded-lg border px-4 py-5 flex flex-col">
                                    <div className="flex gap-2 items-center">
                                        <img src={coin.image} alt={coin.name} className="w-10 h-10 rounded-full" />
                                        <h3 className="text-base text-gray-800">{coin.symbol}</h3>
                                        <span
                                            className={`text-xs font-medium px-2 py-1 rounded-md ${
                                                coin.persentage > 0
                                                    ? 'bg-green-100 text-green-600'
                                                    : 'bg-red-100 text-red-600'
                                            }`}
                                        >
                                            {coin.persentage.toFixed(2)}%
                                        </span>
                                    </div>
                                    <p className="text-lg pt-2">${coin.price}</p>
                                    {coin.sparkline && (
                                        <img
                                            src={coin.sparkline}
                                            alt={`${coin.name} sparkline`}
                                            className="px-8 h-12 mt-2"
                                        />
                                    )}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <button
                        onClick={handlePrev1}
                        className="absolute z-10 top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-black px-2 py-1 rounded-full shadow-lg"
                    >
                        &larr;
                    </button>
                    <button
                        onClick={handleNext1}
                        className="absolute z-10 top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-black px-2 py-1 rounded-full shadow-lg"
                    >
                        &rarr;
                    </button>
                </div>

                {/* "Trending Coins (24h)" Section */}
                <h2 className="text-2xl font-semibold mt-10 mb-4">Trending Coins</h2>
                <div className="relative">
                    <Swiper
                        ref={swiperRef2} // Attach second swiper instance to ref
                        spaceBetween={20}
                        slidesPerView={4}
                        loop={true}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 5 },
                        }}
                    >
                        {trendingCoins.map((coin, index) => (
                            <SwiperSlide key={index}>
                                <div className="min-w-[200px] bg-white rounded-lg border px-4 py-5 flex flex-col">
                                    <div className="flex gap-2 items-center">
                                        <img src={coin.image} alt={coin.name} className="w-10 h-10 rounded-full" />
                                        <h3 className="text-base text-gray-800">{coin.symbol}</h3>
                                        <span
                                            className={`text-xs font-medium px-2 py-1 rounded-md ${
                                                coin.persentage > 0
                                                    ? 'bg-green-100 text-green-600'
                                                    : 'bg-red-100 text-red-600'
                                            }`}
                                        >
                                            {coin.persentage.toFixed(2)}%
                                        </span>
                                    </div>
                                    <p className="text-lg pt-2">${coin.price}</p>
                                    {coin.sparkline && (
                                        <img
                                            src={coin.sparkline}
                                            alt={`${coin.name} sparkline`}
                                            className="px-8 h-12 mt-2"
                                        />
                                    )}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <button
                        onClick={handlePrev2}
                        className="absolute z-10 top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-black px-2 py-1 rounded-full shadow-lg"
                    >
                        &larr;
                    </button>
                    <button
                        onClick={handleNext2}
                        className="absolute z-10 top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-black px-2 py-1 rounded-full shadow-lg"
                    >
                        &rarr;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserAlsoLike;
