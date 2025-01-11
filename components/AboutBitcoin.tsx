'use client'; 
import React from 'react';

export default function AboutBitcoin() {
    return (
        <div className="bg-gray-50 text-black rounded-lg m-4 py-10 px-8">
     
            <div className=" mx-auto  ">
                <h1 className="text-2xl font-bold mb-4">About Bitcoin</h1>

             
                <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-2">What is Bitcoin?</h2>
                    <p className="text-gray-600">
                        Bitcoin's price today is <span className="font-medium">US$16,951.82</span>, with a 24-hour trading volume of <span className="font-medium">US$19.14 B</span>.
                        BTC is <span className="font-medium">+0.36%</span> in the last 24 hours. It is currently <span className="font-medium">-7.70%</span> from its 7-day
                        all-time high of <span className="font-medium">US$18,366.66</span>, and <span className="font-medium">3.40%</span> from its 7-day all-time low of
                        <span className="font-medium">US$16,394.75</span>. BTC has a circulating supply of <span className="font-medium">19.24 M BTC</span> and a max
                        supply of <span className="font-medium">21 M BTC</span>.
                    </p>
                </div>
                <hr className='py-2' />

            
                <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-2">Lorem ipsum dolor sit amet</h2>
                    <p className="text-gray-600 mb-4">
                        Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.


                    </p>
                    <p className="text-gray-600 mb-4">
                        Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.
                    </p>
                    <p className="text-gray-600">
                        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
                    </p>
                </div>
                <hr className='py-2' />
            </div>

            <div className="mx-auto mt-8">
                <h2 className="text-xl font-bold mb-4">Already Holding Bitcoin?</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    <div className="flex flex-row gap-8 bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-lg p-4">
                        <div className="h-40 w-40 bg-blue-300 rounded-lg"></div>
                        <div className='flex flex-col  justify-center gap-2'>
                            <h3 className="text-xl font-semibold mb-2">Calculate your Profits</h3>
                            <button className="bg-white text-black  py-2 px-4 rounded-lg hover:bg-gray-200">
                            Check Now →
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-row gap-8 bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-lg p-4">
                        <div className="h-40 w-40 bg-orange-300 rounded-lg "></div>
                        <div className='flex flex-col  justify-center gap-2'>
                            <h3 className="text-xl font-semibold mb-2">Calculate your tax liability</h3>
                            
                            <button className="bg-white text-black  py-2 px-4 rounded-lg hover:bg-gray-200">
                            Check Now →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='mt-5' />


            <div className=" mx-auto mt-4">
                <p className="text-gray-600">
                    Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
                </p>
            </div>
        </div>
    );
}
