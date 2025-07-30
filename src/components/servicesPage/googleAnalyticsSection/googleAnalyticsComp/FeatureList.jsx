import * as React from "react";
import { CheckmarkIcon } from "./CheckMarkIcon";

const features = [
  "Full GA4 setup or audit of your existing setup",
  "Custom event tracking configuration",
  "Platform integrations & offline data imports",
  "E-commerce tracking setup",
  "Linking GA4 with Google Ads for audience and conversion insights",
  "Setup & training of default & custom reports"
];

export function FeatureList() {
  return (
    <div className="flex relative flex-col gap-4 items-start self-stretch">
      <p className="relative self-stretch text-base font-bold tracking-wide leading-6 text-zinc-200 max-sm:text-sm">
        What we offer:
      </p>
      <ul className="flex relative flex-col gap-4 items-start self-stretch">
        {features.map((feature, index) => (
          <li key={index} className="flex relative gap-4 items-center self-stretch">
            <div>
              <CheckmarkIcon />
            </div>
            <p className="relative text-base tracking-wide leading-6 text-gray-400 flex-[1_0_0] max-sm:text-sm">
              {feature}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
