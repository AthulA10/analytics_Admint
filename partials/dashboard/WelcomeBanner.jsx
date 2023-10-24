import React from 'react';

function getGreeting() {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  if (currentHour >= 5 && currentHour < 12) {
    return 'Good morning';
  } else if (currentHour >= 12 && currentHour < 17) {
    return 'Good afternoon';
  } else {
    return 'Good evening';
  }
}

function WelcomeBanner({userName, campaignName}) {
  const greeting = getGreeting();

  return (
    <div className="relative bg-[#3FB488] dark:bg-[#3FB488] p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
      {/* Background illustration */}
      <div className="absolute right-0 top-0 -mt-4 mr-16 pointer-events-none hidden xl:block" aria-hidden="true">
        {/* Your SVG illustration code */}
      </div>

      {/* Content */}
      <div className="relative">
        <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold mb-1">{greeting}, {userName} 👋</h1>
        <p className="text-xl text-slate-600 dark:text-indigo-200">Here is what’s happening with your {campaignName} campagin today:</p>
      </div>
    </div>
  );
}

export default WelcomeBanner;
