import * as React from "react";
import { FeatureList } from "./FeatureList";

export function AnalyticsContent() {
  return (
    <div className="flex relative flex-col gap-8 items-start flex-[1_0_0] max-md:items-center max-md:text-center">
      <div className="flex relative flex-col gap-6 items-start self-stretch">
        <h1 className="relative self-stretch text-5xl font-bold tracking-tight text-emerald-50 leading-[56.4px] max-md:text-4xl max-md:leading-10 max-sm:text-3xl max-sm:leading-8">
          Google Analytics Implementation & Utilisation
        </h1>
        <h2 className="relative self-stretch text-xl font-medium leading-7 text-zinc-200 max-md:text-lg max-sm:text-base">
          Track what matters accurately. Understand what’s working.
        </h2>
        <p className="relative self-stretch text-base tracking-wide leading-6 text-gray-400 max-sm:text-sm">
         Accurate tracking is the foundation of any successful digital campaign. 
         We set up Google Analytics with custom event tracking, so we can measure what matters and make more informed decisions.
        </p>
      </div>
      <FeatureList />
    </div>
  );
}
