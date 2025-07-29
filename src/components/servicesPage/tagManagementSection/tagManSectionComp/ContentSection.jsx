import React from 'react';
import { FeatureList } from './FeatureList';

export const ContentSection = () => {
  return (
    <div className="flex relative flex-col gap-8 items-start flex-[1_0_0]">
      <header className="flex relative flex-col gap-6 items-start self-stretch">
        <h1 className="relative self-stretch text-5xl font-bold tracking-tight text-emerald-50 leading-[56.4px] max-md:text-4xl max-md:tracking-normal max-md:leading-10 max-sm:text-3xl max-sm:tracking-normal max-sm:leading-10 max-sm:text-center">
          Google Tag Manager
        </h1>
        <h2 className="relative self-stretch text-xl font-medium leading-7 text-zinc-200 max-md:text-xl max-sm:text-lg max-sm:text-center">
          Advanced Tracking Without Developer Delays
        </h2>
        <p className="relative self-stretch text-base tracking-wide leading-6 text-gray-400 max-md:text-base max-sm:text-sm max-sm:tracking-wide max-sm:text-center">
          We use GTM to deploy tracking in a clean, scalable way - allowing us to capture every key action on your website without relying on developer timelines. Tracking setup for Google Ads, Analytics, Facebook, LinkedIn, Tiktok etc.
        </p>
      </header>
      <FeatureList />
    </div>
  );
};
