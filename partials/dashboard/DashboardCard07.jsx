

// export default DashboardCard07;
import React from 'react';

// Create a separate ChannelRow component to represent each channel
function ChannelRow({ logoColor, name, visitors, revenues }) {
  return (
    <tr>
      <td className="p-2">
        <div className="flex items-center">
          <svg className="shrink-0 mr-2 sm:mr-3" width="36" height="36" viewBox="0 0 36 36">
            <circle fill={logoColor} cx="18" cy="18" r="18" />
            {/* The specific path for each channel */}
          </svg>
          <div className="text-slate-800 dark:text-slate-100">{name}</div>
        </div>
      </td>
      <td className="p-2 text-right">
        <div className="mr-4 text-right">{visitors}</div>
      </td>
      
    </tr>
  );
}

function DashboardCard07() {
  const channels = [
    {
      name: 'India',
      logoColor: '#24292E',
      visitors: '2.4K'
   },
    {
      name: 'China',
      logoColor: '#1DA1F2',
      visitors: '2.2K'
     },
    {
      name: 'Japan',
      logoColor: '#EA4335',
      visitors: '2.0K'
      },
    {
      name: 'Russia',
      logoColor: '#4BC9FF',
      visitors: '1.9K'
      },
    {
      name: 'Finland',
      logoColor: '#0E2439',
      visitors: '1.7K'
      },
  ];

  return (
    <div className="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Users by Country</h2>
      </header>
      <div className="p-3 ">
        <div className="flex ">
          <table className="table-auto  w-full dark:text-slate-100">
            <thead className="text-xs  uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Country</div>
                </th>
                
                <th className="p-2 text-right">
                  <div className="font-semibold mr-2 text-right">Visitors</div>
                </th>
                
              </tr>
            </thead>
            <tbody className="text-sm  font-medium divide-y divide-slate-100 dark:divide-slate-700">
              {channels.map((channel, index) => (
                <ChannelRow key={index} {...channel} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard07;