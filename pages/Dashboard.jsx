
import React, { useState, useEffect } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import DashboardAvatars from '../partials/dashboard/DashboardAvatars';
import FilterButton from '../components/DropdownFilter';
import Datepicker from '../components/Datepicker';
import DashboardCard01 from '../partials/dashboard/DashboardCard01';
import DashboardCard02 from '../partials/dashboard/DashboardCard02';
import DashboardCard03 from '../partials/dashboard/DashboardCard03';
import DashboardCard04 from '../partials/dashboard/DashboardCard04';
import DashboardCard05 from '../partials/dashboard/DashboardCard05';
import DashboardCard06 from '../partials/dashboard/DashboardCard06';
import DashboardCard07 from '../partials/dashboard/DashboardCard07';
import DashboardCard08 from '../partials/dashboard/DashboardCard08';
import DashboardCard09 from '../partials/dashboard/DashboardCard09';
import DashboardCard10 from '../partials/dashboard/DashboardCard10';
import DashboardCard11 from '../partials/dashboard/DashboardCard11';
import DashboardCard12 from '../partials/dashboard/DashboardCard12';
import DashboardCard13 from '../partials/dashboard/DashboardCard13';
import DashboardCard005 from '../partials/dashboard/DashboardCard005';
import Banner from '../partials/Banner';
import { tailwindConfig } from '../utils/Utils';

function Dashboard() {
  const [data, setData] = useState(null); // Initialize the data state

  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Define an async function to fetch data from the open API
  const fetchData = async () => {
    try {
      const response = await fetch('https://api.jsonbin.io/v3/b/6530e01212a5d376598dae7b');
      if (response.ok) {
        const jsonData = await response.json();
        setData(jsonData.record); // Set the data state with the API response
        console.log(jsonData);
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Run this effect only once when the component mounts

  // Now you can access the data and display it in your components
  const totalNfts = data ? data.values[0].web3.totalNfts : 0;
  const totalPageViews = data ? data.values[0].web2.pageViews.screenPageViews : 0;
  const totalUsers = data ? data.values[0].web2.pageViews.totalUsers : 0;
  
  // Access data from the first element in the creativeDatas array
  const firstCreative = data ? data.values[0].creativeDatas[0] : null;
  const creativeId = firstCreative ? firstCreative.creativeId : '';
  const baseCostPerNft = firstCreative ? firstCreative.baseCostPerNft : 0;
  const imageUrl = firstCreative ? firstCreative.imageUrl : '';
  
  // Access event data
  const eventData = data ? data.values[0].web2.eventData.eventData : [];

  // Check if eventData is defined before trying to access its properties
  const firstEventName = eventData && eventData[0] ? eventData[0].eventName : 'Missing';

 

  const averageSessionTime = data ? data.values[0].web2.eventData.extra.value : 'N/A';
  const formattedAverageSessionTime = averageSessionTime
  ? `${parseFloat(averageSessionTime).toFixed(2)} sec`
  : 'N/A';

  const chartData = {
    labels: ['Reasons'],
    datasets: [
      {
        label: totalNfts,
        data: [131],
        backgroundColor: tailwindConfig().theme.colors.indigo[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[600],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Manila',
        data: [100],
        backgroundColor: tailwindConfig().theme.colors.indigo[800],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[900],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Mabalacast',
        data: [81],
        backgroundColor: tailwindConfig().theme.colors.sky[400],
        hoverBackgroundColor: tailwindConfig().theme.colors.sky[500],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Quezon City',
        data: [65],
        backgroundColor: tailwindConfig().theme.colors.green[400],
        hoverBackgroundColor: tailwindConfig().theme.colors.green[500],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Other',
        data: [72],
        backgroundColor: tailwindConfig().theme.colors.slate[200],
        hoverBackgroundColor: tailwindConfig().theme.colors.slate[300],
        barPercentage: 1,
        categoryPercentage: 1,
      },
    ],
  };




  const eventDatas = {
    labels: ['Reasons'],
    datasets: [
      {
        label: "jhh",
        data: [131],
        backgroundColor: tailwindConfig().theme.colors.indigo[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[600],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Manila',
        data: [100],
        backgroundColor: tailwindConfig().theme.colors.indigo[800],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[900],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Mabalacast',
        data: [81],
        backgroundColor: tailwindConfig().theme.colors.sky[400],
        hoverBackgroundColor: tailwindConfig().theme.colors.sky[500],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Quezon City',
        data: [65],
        backgroundColor: tailwindConfig().theme.colors.green[400],
        hoverBackgroundColor: tailwindConfig().theme.colors.green[500],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Other',
        data: [72],
        backgroundColor: tailwindConfig().theme.colors.slate[200],
        hoverBackgroundColor: tailwindConfig().theme.colors.slate[300],
        barPercentage: 1,
        categoryPercentage: 1,
      },
    ],
  };

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Welcome banner */}
            <WelcomeBanner />

            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">

              {/* Left: Avatars */}
              <DashboardAvatars />

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Filter button */}
                <FilterButton />
                {/* Datepicker built with flatpickr */}
                <Datepicker />
                {/* Add view button */}
                <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                    <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                        <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                    </svg>
                    <span className="hidden xs:block ml-2">Add view</span>
                </button>                
              </div>

            </div>


            <div className="grid grid-cols-4 gap-4">
      {/* Row 1 */}
      <div className="col-span-4 sm:col-span-2 xl:col-span-1">
        <DashboardCard01 
        title= "Total Page Visits"
        value={totalNfts}
        />
      </div>
      <div className="col-span-4 sm:col-span-2 xl:col-span-1">
        <DashboardCard01
        title= "Unique users"
        value="8085" />
      </div>
      <div className="col-span-4 sm:col-span-2 xl:col-span-1">
        <DashboardCard01
        title= "Avge Session Duration"
        value="00:02:42" />
      </div>
      <div className="col-span-4 sm:col-span-2 xl:col-span-1">
        <DashboardCard01
        title= "Bounce rate"
        value="42.84%" />
      </div>
      
      <div className="col-span-4 sm:col-span-2 xl:col-span-1">
        <DashboardCard01
        title= "Total Wallet IDs"
        value="3257" />
      </div>
      <div className="col-span-4 sm:col-span-2 xl:col-span-1">
        <DashboardCard01 
        title= "Total NFTs Minted"
        value="250"/>
      </div>
      <div className="col-span-4 sm:col-span-2 xl:col-span-1">
        <DashboardCard01 
        title= "Total NFTs Dropped"
        value="228"/>
      </div>
      <div className="col-span-4 sm:col-span-2 xl:col-span-1">
        <DashboardCard01 
        title= "Total NFTs Pending"
        value="15,002"/>
      </div>
    </div>

<div className='mt-16'>
    <DashboardCard005
    title="Users" 
    
    label1="Users"
    val1={totalUsers}
    
    label2="New users"
    val2={"155"}

    label3="Average engagement time"
    val3={formattedAverageSessionTime}
    />
    </div>
            {/* Cards */}
            <div className="grid grid-cols-12 mt-16 gap-6">

              {/* Line chart (Acme Plus) */}
              
              {/* Users by country */}
              <DashboardCard07 />
              
               {/* users by city*/}
               <DashboardCard11
               title="Users by City"
               chartData={chartData} />
             
               
               {/* Doughnut chart (Top Countries) */}
              <DashboardCard06 />
               {/* Bar chart (Direct vs Indirect) */}
               {/* Stacked bar chart (Sales VS Refunds) */}
              <DashboardCard09
              title="Users by browser"/>


               {/* User engagement  */}
              <DashboardCard005 
              title="User Engagement"

              label1="Total Event Count"
              val1="2K"

              label2="Total Users"
              val2="159"

              label3="Event count per user"
              val3="13"

              />

               {/* User engagement  */}
              
              
              
              <DashboardCard11
               title="Event Count by Event Name"
               chartData={eventDatas} />

                {/* Avge engagement  */}
              <DashboardCard005 
              title="Engagement Time"
              
              label1="Average engagement time"
              val1="0m 52s"

              label2="Engaged sessions per user"
              val2="0.94"
              />

               <DashboardCard05 
              title="User Engagement"/>
              

              

              
             
            
              
            </div>

            <div className='mt-16'>
             user activity over time
              <DashboardCard08 />
             </div>
 <div className='mt-16 space-y-6 '>
              {/* Card (Customers) */}
              <DashboardCard10 />
             
              {/* Card (Recent Activity) */}
              <DashboardCard12 />
              {/* Card (Income/Expenses) */}
              <DashboardCard13 />
              </div>
          </div>
        </main>

        <Banner />

      </div>
    </div>
  );
}

export default Dashboard;