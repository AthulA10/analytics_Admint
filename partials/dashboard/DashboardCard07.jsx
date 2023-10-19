// import React from 'react';

// function DashboardCard07() {
//   return (
//     <div className="col-span-full xl:col-span-8 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
//       <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
//         <h2 className="font-semibold text-slate-800 dark:text-slate-100">Top Channels</h2>
//       </header>
//       <div className="p-3">
//         {/* Table */}
//         <div className="overflow-x-auto">
//           <table className="table-auto w-full dark:text-slate-300">
//             {/* Table header */}
//             <thead className="text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm">
//               <tr>
//                 <th className="p-2">
//                   <div className="font-semibold text-left">Source</div>
//                 </th>
//                 <th className="p-2">
//                   <div className="font-semibold text-center">Visitors</div>
//                 </th>
//                 <th className="p-2">
//                   <div className="font-semibold text-center">Revenues</div>
//                 </th>
               
//               </tr>
//             </thead>
//             {/* Table body */}
//             <tbody className="text-sm font-medium divide-y divide-slate-100 dark:divide-slate-700">
//               {/* Row */}
//               <tr>
//                 <td className="p-2">
//                   <div className="flex items-center">
//                     <svg className="shrink-0 mr-2 sm:mr-3" width="36" height="36" viewBox="0 0 36 36">
//                       <circle fill="#24292E" cx="18" cy="18" r="18" />
//                       <path
//                         d="M18 10.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V24c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"
//                         fill="#FFF"
//                       />
//                     </svg>
//                     <div className="text-slate-800 dark:text-slate-100">Github.com</div>
//                   </div>
//                 </td>
//                 <td className="p-2">
//                   <div className="text-center">2.4K</div>
//                 </td>
//                 <td className="p-2">
//                   <div className="text-center text-emerald-500">$3,877</div>
//                 </td>
               
//               </tr>
//               {/* Row */}
//               <tr>
//                 <td className="p-2">
//                   <div className="flex items-center">
//                     <svg className="shrink-0 mr-2 sm:mr-3" width="36" height="36" viewBox="0 0 36 36">
//                       <circle fill="#1DA1F2" cx="18" cy="18" r="18" />
//                       <path
//                         d="M26 13.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H10c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z"
//                         fill="#FFF"
//                         fillRule="nonzero"
//                       />
//                     </svg>
//                     <div className="text-slate-800 dark:text-slate-100">Twitter</div>
//                   </div>
//                 </td>
//                 <td className="p-2">
//                   <div className="text-center">2.2K</div>
//                 </td>
//                 <td className="p-2">
//                   <div className="text-center text-emerald-500">$3,426</div>
//                 </td>
//                 {/*  */}
//               </tr>
//               {/* Row */}
//               <tr>
//                 <td className="p-2">
//                   <div className="flex items-center">
//                     <svg className="shrink-0 mr-2 sm:mr-3" width="36" height="36" viewBox="0 0 36 36">
//                       <circle fill="#EA4335" cx="18" cy="18" r="18" />
//                       <path
//                         d="M18 17v2.4h4.1c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C21.6 11.7 20 11 18.1 11c-3.9 0-7 3.1-7 7s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H18z"
//                         fill="#FFF"
//                         fillRule="nonzero"
//                       />
//                     </svg>
//                     <div className="text-slate-800 dark:text-slate-100">Google (organic)</div>
//                   </div>
//                 </td>
//                 <td className="p-2">
//                   <div className="text-center">2.0K</div>
//                 </td>
//                 <td className="p-2">
//                   <div className="text-center text-emerald-500">$2,444</div>
//                 </td>
                
//               </tr>
//               {/* Row */}
//               <tr>
//                 <td className="p-2">
//                   <div className="flex items-center">
//                     <svg className="shrink-0 mr-2 sm:mr-3" width="36" height="36" viewBox="0 0 36 36">
//                       <circle fill="#4BC9FF" cx="18" cy="18" r="18" />
//                       <path
//                         d="M26 14.3c-.1 1.6-1.2 3.7-3.3 6.4-2.2 2.8-4 4.2-5.5 4.2-.9 0-1.7-.9-2.4-2.6C14 19.9 13.4 15 12 15c-.1 0-.5.3-1.2.8l-.8-1c.8-.7 3.5-3.4 4.7-3.5 1.2-.1 2 .7 2.3 2.5.3 2 .8 6.1 1.8 6.1.9 0 2.5-3.4 2.6-4 .1-.9-.3-1.9-2.3-1.1.8-2.6 2.3-3.8 4.5-3.8 1.7.1 2.5 1.2 2.4 3.3z"
//                         fill="#FFF"
//                         fillRule="nonzero"
//                       />
//                     </svg>
//                     <div className="text-slate-800 dark:text-slate-100">Vimeo.com</div>
//                   </div>
//                 </td>
//                 <td className="p-2">
//                   <div className="text-center">1.9K</div>
//                 </td>
//                 <td className="p-2">
//                   <div className="text-center text-emerald-500">$2,236</div>
//                 </td>
                
//               </tr>
//               {/* Row */}
//               <tr>
//                 <td className="p-2">
//                   <div className="flex items-center">
//                     <svg className="shrink-0 mr-2 sm:mr-3" width="36" height="36" viewBox="0 0 36 36">
//                       <circle fill="#0E2439" cx="18" cy="18" r="18" />
//                       <path
//                         d="M14.232 12.818V23H11.77V12.818h2.46zM15.772 23V12.818h2.462v4.087h4.012v-4.087h2.456V23h-2.456v-4.092h-4.012V23h-2.461z"
//                         fill="#E6ECF4"
//                       />
//                     </svg>
//                     <div className="text-slate-800 dark:text-slate-100">Indiehackers.com</div>
//                   </div>
//                 </td>
//                 <td className="p-2">
//                   <div className="text-center">1.7K</div>
//                 </td>
//                 <td className="p-2">
//                   <div className="text-center text-emerald-500">$2,034</div>
//                 </td>
               
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

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
      <td className="p-2">
        <div className="text-center">{visitors}</div>
      </td>
      <td className="p-2">
        <div className="text-center text-emerald-500">{revenues}</div>
      </td>
    </tr>
  );
}

function DashboardCard07() {
  const channels = [
    {
      name: 'Github.com',
      logoColor: '#24292E',
      visitors: '2.4K',
      revenues: '$3,877',
    },
    {
      name: 'Twitter',
      logoColor: '#1DA1F2',
      visitors: '2.2K',
      revenues: '$3,426',
    },
    {
      name: 'Google (organic)',
      logoColor: '#EA4335',
      visitors: '2.0K',
      revenues: '$2,444',
    },
    {
      name: 'Vimeo.com',
      logoColor: '#4BC9FF',
      visitors: '1.9K',
      revenues: '$2,236',
    },
    {
      name: 'Indiehackers.com',
      logoColor: '#0E2439',
      visitors: '1.7K',
      revenues: '$2,034',
    },
  ];

  return (
    <div className="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Top Channels</h2>
      </header>
      <div className="p-3">
        <div className="flex overflow-x-auto">
          <table className="table-auto w-full dark:text-slate-900">
            <thead className="text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Source</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Visitors</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Revenues</div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm font-medium divide-y divide-slate-100 dark:divide-slate-700">
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