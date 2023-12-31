import React from 'react';
import Tooltip from '../../components/Tooltip';
import BarChart from '../../charts/BarChart02';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard09({title}) {

  const chartData = {
    labels: [
      'chrome', 'safari', 'edge',
      'opera', 'android webview', 'firefox'
    ],
    datasets: [
      // Light blue bars
      {
        label: 'Stack 1',
        data: [
          6200, 9200, 6600, 8800, 5200, 9200,
        ],
        backgroundColor: '#005FBB',
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[600],
        barPercentage: 0.55,
        categoryPercentage: 0.55,
      },
      // Blue bars
     
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">{title}</h2>
        <Tooltip className="ml-2" size="lg">
          <div className="text-sm">Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</div>
        </Tooltip>
      </header>
      <div className="px-5 py-3">
        <div className="flex items-start">
          {/* <div className="text-3xl font-bold text-slate-800 dark:text-slate-100 mr-2">+$6,796</div> */}
          {/* <div className="text-sm font-semibold text-white px-1.5 bg-amber-500 rounded-full">-34%</div> */}
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow">
        {/* Change the height attribute to adjust the chart height */}
        <BarChart data={chartData} width={395} height={248} />
      </div>
    </div>
  );
}

export default DashboardCard09;
