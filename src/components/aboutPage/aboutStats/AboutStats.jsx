import React from 'react';
import StatItem from './aboutStatsComp/StatItem';
import StatDivider from './aboutStatsComp/StatDivider';

const AboutStats = () => {
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
    },
  ];

  return (
    <section className="box-border flex relative flex-col gap-20 items-start px-16 py-28 w-full max-md:gap-16 max-md:px-10 max-md:py-20 max-sm:gap-10 max-sm:px-5 max-sm:py-16">

      <div className="box-border flex relative flex-col gap-16 items-start p-8 w-full rounded-lg max-md:p-6 max-sm:p-5">
        <div className="flex relative gap-12 justify-center items-center w-full max-md:gap-8 max-sm:flex-col max-sm:gap-6">
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
    </section>
  );
};

export default AboutStats;
