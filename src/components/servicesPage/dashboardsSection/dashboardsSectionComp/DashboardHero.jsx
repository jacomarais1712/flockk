import * as React from "react";
import { ServicesList } from "./ServicesList";

export function DashboardHero() {
  return (
    <section className="flex flex-col flex-1 gap-8 items-start min-w-0">
      <header className="flex flex-col gap-6 items-start w-full">
        <h1 className="w-full text-5xl font-bold tracking-tight text-emerald-50 leading-[56.4px] max-md:text-4xl max-sm:text-3xl max-sm:leading-8">
          Custom Looker Studio Dashboards & Reporting
        </h1>
        <h2 className="w-full text-xl font-medium leading-7 text-zinc-200 max-md:text-lg max-sm:text-base">
          Clear, Automated, Decision-Ready Dashboards
        </h2>
        <p className="w-full text-base tracking-wide leading-6 text-gray-400 max-sm:text-sm">
          We use Looker Studio to build powerful dashboards that turn complex data into clear insights. 
          Whether you want a high-level performance summary or granular breakdowns, we design reports that fit your needs.
        </p>
      </header>
      <ServicesList />
    </section>
  );
}
