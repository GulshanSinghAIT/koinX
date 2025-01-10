'use client';

import { FaInfoCircle } from 'react-icons/fa';

export default function Sentiment() {
  return (
    <div className='m-4'>
      <div className="bg-white shadow-md text-black  rounded-xl py-12 p-6 w-full  border border-gray-200">
        {/* Header Section */}
        <h1 className="text-2xl font-bold mb-6">Sentiment</h1>

        {/* Key Events Section */}
        <div>
          <div className="flex gap-2 items-center mb-4">
            <h2 className="text-lg font-semibold text-[#44475B]">Key Events</h2>
            <FaInfoCircle className="text-gray-400" title="Information about key events" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-6 py-8 rounded-xl flex">
              <div className="mr-4">
                <div className="bg-blue-500 text-white w-8 h-8 flex items-center justify-center rounded-full">
                  <FaInfoCircle size={16} />
                </div>
              </div>
              <div>
                <h3 className="text-base  mb-1">
                  Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.
                </h3>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.
                </p>
              </div>
            </div>

            <div className="bg-green-50  p-6 py-8   rounded-xl flex">
              <div className="mr-4">
                <div className="bg-green-500 text-white w-8 h-8 flex items-center justify-center rounded-full">
                  <FaInfoCircle size={16} />
                </div>
              </div>
              <div>
                <h3 className="text-base mb-1">
                  Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.
                </h3>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Analyst Estimates Section */}
        <div className="mt-6">
          <div className="flex gap-2 items-center mb-4">
            <h2 className="text-lg font-semibold text-[#44475B]">Analyst Estimates</h2>
            <FaInfoCircle className="text-gray-400" title="Information about analyst estimates" />
          </div>

          <div className="flex items-center space-x-10 py-5">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
              <h3 className="text-2xl font-bold text-green-600">76%</h3>
            </div>

            <div className="flex-1">
              <div className="flex items-center mb-4">
                <span className="text-sm text-gray-600 w-12">Buy</span>
                
                  <div className=" rounded-md h-2 bg-green-500" style={{ width: '76%' }}></div>
                
                <span className="text-sm text-gray-600 ml-2">76%</span>
              </div>

              <div className="flex items-center mb-4">
                <span className="text-sm text-gray-600 w-12">Hold</span>
                
                  <div className="  rounded-md h-2 bg-gray-500" style={{ width: '8%' }}></div>
                   <span className="text-sm text-gray-600 ml-2">8%</span>
              </div>

              <div className="flex items-center">
                <span className="text-sm text-gray-600 w-12">Sell</span>
                  <div className=" rounded-md h-2 bg-red-500" style={{ width: '16%' }}></div>
             
                <span className="text-sm text-gray-600 ml-2">16%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    
  );
}
