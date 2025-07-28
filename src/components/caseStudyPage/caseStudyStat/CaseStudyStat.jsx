"use client";
import * as React from "react";
import { StatItem } from "./caseStudyComp/StatItem";
import { StatDivider } from "./caseStudyComp/StatDivider";

const statsDataExample = [
  {
    value: "88%",
    description: "Revenue growth in 18 months"
  },
  {
    value: "€1,800",
    description: "Monthly ad spend scaled from €10K"
  },
  {
    value: "10x",
    description: "Return on ad spend achieved"
  }
];

function CaseStudyStat({ statsData }) {

  return (
    <section className="box-border flex relative flex-col gap-20 items-start p-16 w-full max-w-full max-md:px-8 max-md:py-12 max-sm:px-4 max-sm:py-8">
      <div className="box-border flex relative flex-col gap-16 items-start self-stretch p-8 rounded-lg max-md:gap-12 max-md:p-6 max-sm:gap-8 max-sm:p-4">
        <div className="flex relative gap-6 justify-center items-center self-stretch max-sm:flex-col max-sm:gap-8">
          <StatItem
            value={statsData[0].value}
            description={statsData[0].description}
          />
          <StatDivider />
          <StatItem
            value={statsData[1].value}
            description={statsData[1].description}
          />
        </div>
      </div>
    </section>
  );
}

export default CaseStudyStat;
