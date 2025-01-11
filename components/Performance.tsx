import React from "react";
import { FaInfoCircle } from "react-icons/fa"; 

const Performance = () => {
    const currentPointPercentage = 80; 
    const currentPointValue = "$48,637.83"; 

    return (
        <div className="p-4">
            <div className="bg-gray-50 pb-10 text-black p-6 rounded-lg shadow-md">
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Performance</h2>
                    <div className="">
                        <div className="flex flex-row gap-5 justify-evenly">
                            <div className="text-xs md:text-base">
                                <p className="text-gray-500 whitespace-nowrap">Today's Low</p>
                                <p className="py-2 text-gray-500">46,930.22</p>
                            </div>

                            
                            <div className="w-full md:px-5 text-xs md:text-base relative my-4">
                                <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
                                </div>
                                <p
                                    className="absolute text-center mt-2 text-gray-600"
                                    style={{ left: `${currentPointPercentage}%`, transform: "translateX(-50%)" }}
                                >
                                    {currentPointValue} ({currentPointPercentage}%)
                                </p>
                            </div>

                            <div className="text-right text-xs md:text-base">
                                <p className="text-gray-500 whitespace-nowrap">Today's High</p>
                                <p className="py-2 text-gray-500 ">49,343.83</p>
                            </div>
                        </div>

                        <div className="flex flex-row gap-5 py-7 justify-evenly">
                            <div className="text-xs md:text-base">
                                <p className="text-gray-500 whitespace-nowrap">52W High</p>
                                <p className="py-2 text-gray-500">16,930.22</p>
                            </div>

                            <div className="w-full md:px-10 px-3 relative my-4">
                                <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
                                </div>
                            </div>

                            <div className="text-right text-xs md:text-base">
                                <p className="text-gray-500 whitespace-nowrap">52W High</p>
                                <p className="py-2 text-gray-500">49,743.83</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4 flex items-center">
                        Fundamentals
                        <FaInfoCircle className="ml-3 text-gray-400 cursor-pointer" />
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-20 text-sm border-gray-300 pt-4">
                        <div className="flex border-b py-4 justify-between items-center">
                            <p className="text-gray-500">Bitcoin Price</p>
                            <p className="font-semibold">$16,815.46</p>
                        </div>
                        <div className="flex border-b py-4 justify-between items-center">
                            <p className="text-gray-500">Market Cap</p>
                            <p className="font-semibold">$323,507,290,047</p>
                        </div>

                        <div className="flex border-b pb-4 justify-between items-center">
                            <p className="text-gray-500">24h Low / 24h High</p>
                            <p className="font-semibold">$16,382.07 / $16,874.12</p>
                        </div>
                        <div className="flex border-b pb-4 justify-between items-center">
                            <p className="text-gray-500">Market Cap Dominance</p>
                            <p className="font-semibold">38.343%</p>
                        </div>
                        <div className="flex border-b pb-4 justify-between items-center">
                            <p className="text-gray-500">7d Low / 7d High</p>
                            <p className="font-semibold">$16,382.07 / $16,874.12</p>
                        </div>
                        <div className="flex border-b pb-4 justify-between items-center">
                            <p className="text-gray-500">Volume / Market Cap</p>
                            <p className="font-semibold">0.0718</p>
                        </div>
                        <div className="flex border-b pb-4 justify-between items-center">
                            <p className="text-gray-500">Trading Volume</p>
                            <p className="font-semibold">$23,249,202,782</p>
                        </div>
                        <div className="flex border-b pb-4 justify-between items-center">
                            <p className="text-gray-500">All-Time High</p>
                            <div className="text-right">
                                <p className="">
                                    $69,044.77 <span className="text-red-500">-75.6%</span>
                                </p>
                                <p className="text-gray-400">Nov 10, 2021 (about 1 year)</p>
                            </div>
                        </div>
                        <div className="flex border-b pb-4 justify-between items-center">
                            <p className="text-gray-500">Market Cap Rank</p>
                            <p className="font-semibold">#1</p>
                        </div>
                        <div className="flex border-b pb-4 justify-between items-center">
                            <p className="text-gray-500">All-Time Low</p>
                            <div className="text-right">
                                <p className="">
                                    $67.81 <span className="text-green-500"> 24729.1%</span>
                                </p>
                                <p className="text-gray-400">Jul 06, 2013 (over 9 years)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Performance;
