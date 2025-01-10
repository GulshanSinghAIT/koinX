'use client'; // Next.js Client Component
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

export default function Tokenomics() {
  
  const data = {
    labels: ['Crowdsale Investors: 80%', 'Foundation: 20%'],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ['#4285F4', '#FBBC05'], 
        hoverBackgroundColor: ['#357ae8', '#e4a806'], 
        borderWidth: 0,
        cutout: '70%', 
      },
    ],
  };

  return (
    <div className="bg-gray-50 text-black py-10 m-4 rounded-xl px-4">
      <div className=" mx-auto   rounded-lg p-6">
        
        <h1 className="text-2xl font-bold mb-6">Tokenomics</h1>
        <h1 className="text-lg mb-6">TInitial Distribution</h1>

        

        {/* Doughnut Chart Section */}
        <div className="flex flex-col md:flex-row items-center  gap-8 mb-6">
          {/* Doughnut Chart */}
          <div className=" w-56 h-56">
            <Doughnut data={data} />
          </div>

          
          <div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
                Crowdsale Investors: 80%
              </li>
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 bg-yellow-500 rounded-full"></span>
                Foundation: 20%
              </li>
            </ul>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600">
        Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
        </p>
      </div>
    </div>
  );
}
