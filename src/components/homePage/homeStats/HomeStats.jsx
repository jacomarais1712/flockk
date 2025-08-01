import React from 'react';
import StatItem from './homeStatsComp/StatItem';
import StatDivider from './homeStatsComp/StatDivider';
import { BackgroundBlur } from '../../reuse/comp/BackgroundBlur';

const HomeStats = () => {
  const backgroundBlurStyle = 'absolute right-[-440px] bottom-[-291px] w-[725px] h-[725px] max-sm:bottom-[-90px] rounded-full opacity-50 z-1 aspect-square'
  const statsData = [
    {
      value: "10+ Years",
      description: "Experience managing & setting up Google Ads & Analytics"
    },
    {
      value: "€600K+",
      description: "Managed Google Ads budget over the last 12 months"
    },
    {
      value: "700+",
      description: "Campaigns launched across eCom, SaaS, lead gen and more."
    }
  ];

  return (
    <section className="flex relative flex-col gap-20 items-start self-stretch px-16 py-28 max-md:gap-16 max-md:px-8 max-md:py-20 max-sm:gap-10 max-sm:px-4 max-sm:py-16">
      <div className="flex relative flex-col gap-16 items-start self-stretch p-8 rounded-lg max-md:gap-12 max-md:p-6 max-sm:gap-8 max-sm:p-4">
        <div className="flex relative gap-12 justify-center items-center self-stretch max-md:gap-8 max-sm:flex-col max-sm:gap-8">
          <StatItem
            value={statsData[0].value}
            description={statsData[0].description}
          />
          <StatDivider />
          <StatItem
            value={statsData[1].value}
            description={statsData[1].description}
          />
          <StatDivider />
          <StatItem
            value={statsData[2].value}
            description={statsData[2].description}
          />
        </div>
      </div>
      <BackgroundBlur backgroundStyle={backgroundBlurStyle}/>
    </section>
  );
};

export default HomeStats;
