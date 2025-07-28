"use client";
import * as React from "react";
import { PricingTabs } from "./pricingSectionComp/PricingTabs";
import { PricingCard } from "./pricingSectionComp/PricingCard";

function PricingSection() {
  const launchFeatures = [
    "Comprehensive Google Ads & GA4 Account Setup",
    "In-depth Keyword Research & Competitor Analysis",
    "Strategic Campaign Blueprint & Implementation",
    "Audience Identification & Initial Targeting Setup",
    "Conversion Tracking Implementation",
    "Remarketing (Retargeting) Setup",
    "Performance Reporting Dashboard",
    "Initial Budget Forecasting & Recommendations"
  ];

  const scaleFeatures = [
    'Everything in “Launch”',
    "Full Google Ads & Analytics Account Audit",
    "Account Restructuring for Scalability",
    "Advanced tracking setup or reimplementation ",
    "Reporting dashboard",
    "Monthly optimization",
    "Continuous A/B Testing for Ads & Landing Pages",
    "Daily Performance Monitoring & Adjustments",
    "Expanded Audience Segmentation & Management",
    "Bi-weekly strategy calls",
    "Automated Budget Pacing & Management",
    "Advanced Conversion Tracking (e.g., Offline, Value-Based)",
    "Expert recommendations continual growth"
  ];

  const dominateFeatures = [
    "Everything in “Scale” ",
    "Management of Unlimited Google Campaigns & Ad Groups",
    "Weekly Performance & Strategy Calls"
  ];

  return (
    <div className="px-16 pb-20 max-md:px-5">
      <div className="flex flex-col justify-center w-full max-md:max-w-full">

        <main className="flex flex-wrap gap-8 justify-center items-end mt-14 w-full max-md:mt-10 max-md:max-w-full">
          <PricingCard
            backgroundImage="https://cdn.builder.io/api/v1/image/assets/TEMP/c691e3a6ea73785e22f67053a021a06a59f08d35?placeholderIfAbsent=true&apiKey=a8edfbc5dc304354a1953eb3bb47917c"
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/047ef1f6f4a408c460f72cd032ca0d925a252a1e?placeholderIfAbsent=true&apiKey=a8edfbc5dc304354a1953eb3bb47917c"
            title="Launch"
            description="Start Strong, Clean and Strategic Setup"
            subtitle="This package is designed to build a powerful and professional foundation for your Google Ads account, ensuring you start strong and avoid common pitfalls."
            bestForItems={[
              "Businesses starting from scratch",
            ]}
            price="€450 "
            period="Once-Off"
            annualPrice="$4,590 billed annually"
            savings="Save 15%"
            features={launchFeatures}
            featuresTextColor="text-gray-400"
          />

          <PricingCard
            backgroundImage="https://cdn.builder.io/api/v1/image/assets/TEMP/0c543433fc0c55389128b07a59ca93b961e5b0dd?placeholderIfAbsent=true&apiKey=a8edfbc5dc304354a1953eb3bb47917c"
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/e0ba2321e0a28e786a50404f068a40ec87cd5064?placeholderIfAbsent=true&apiKey=a8edfbc5dc304354a1953eb3bb47917c"
            title="Scale"
            badge="Most Popular"
            description="For growing brands ready to level up."
            subtitle="This package focuses on intensive optimization and scaling. We'll audit and restructure your existing efforts to unlock new levels of performance."
            bestForItems={[
              "Businesses already running Google Ads but need expert management and growth.",
              "€1,500–€10,000 monthly ad spend"
            ]}
            price="€650 - €950"
            period="/month"
            annualPrice="$9,690 billed annually"
            savings="Save 15%"
            features={scaleFeatures}
            featuresTextColor="text-neutral-300"
            aspectRatio="aspect-[0.50]"
          />

          <PricingCard
            backgroundImage="https://cdn.builder.io/api/v1/image/assets/TEMP/c691e3a6ea73785e22f67053a021a06a59f08d35?placeholderIfAbsent=true&apiKey=a8edfbc5dc304354a1953eb3bb47917c"
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/61963985bdedc2ae6b9e996d1f52a8a61159d93c?placeholderIfAbsent=true&apiKey=a8edfbc5dc304354a1953eb3bb47917c"
            title="Dominate"
            description="For brands ready to lead and dominate their space."
            subtitle="Tailored for high-scale advertisers who demand full-funnel strategies, deep analytics, and hands-on optimisation."
            bestForItems={[
              "High-scale brands with €10,000+ monthly ad spend"
            ]}
            price="€1000 - €1800"
            period="/month"
            annualPrice="$18,360 billed annually"
            savings="Save 15%"
            features={dominateFeatures}
            featuresTextColor="text-gray-400"
            aspectRatio="aspect-[0.55]"
          />
        </main>
      </div>
    </div>
  );
}

export default PricingSection;
