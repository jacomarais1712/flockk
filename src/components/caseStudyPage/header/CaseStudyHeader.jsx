"use client";
import React from "react";
import CaseStudyTag from "./headerComp/CaseStudyTag";
import TopicTag from "./headerComp/TopicTag";
import CompanyLogo from "./headerComp/CompanyLogo";

const caseStudyHeaderDataExample = {
  header: "How XYZ increased their revenue by 88% in 18 months",
  topicTags: {
    topicTag1: "Meta Ads",
    topicTag2: "Tag Management",
    //add other tags
  },
  companyLogoSrc: "caseStudy1.png"
}

function CaseStudyHeader({ csHeaderData }) {
  return (
    <header className="flex relative flex-col gap-20 items-center px-16 py-28 w-full max-md:gap-16 max-md:px-8 max-md:py-20 max-sm:gap-10 max-sm:px-4 max-sm:py-16">
      <div className="flex relative gap-20 mt-20 justify-center items-start w-full max-w-[1312px] max-md:flex-col max-md:gap-16 max-md:items-center max-sm:gap-10 max-sm:mt-5">
        <section className="flex relative flex-col gap-6 items-start self-stretch flex-[1_0_0] max-md:items-center max-md:text-center">
          <div className="flex relative flex-col gap-6 items-start self-stretch">
            <CaseStudyTag />
            <h1 className="relative self-stretch text-5xl font-bold tracking-tight leading-[56.4px] text-neutral-50 drop-shadow-xs drop-shadow-white/40 max-md:text-4xl max-md:leading-10 max-sm:text-3xl max-sm:leading-8">
              {csHeaderData.header}
            </h1>
          </div>
          <div className="flex relative flex-col gap-4 items-start self-stretch">
            <div className="flex relative gap-2.5 items-center max-sm:flex-wrap max-sm:justify-center">
            {Object.entries(csHeaderData.topicTags).map(([key, tag]) => (
              <TopicTag key={key} text={tag} />
            ))}
            </div>
          </div>
        </section>
        <aside className="flex relative flex-col shrink-0 gap-2 justify-center items-center px-12 py-0 rounded-lg h-[418px] w-[754px] max-md:px-6 max-md:py-0 max-md:w-full max-md:h-auto max-md:aspect-377/209 max-md:max-w-[600px] max-sm:px-4 max-sm:py-0 caseStudyLogoBg">
          <CompanyLogo companyLogo={csHeaderData.companyLogoSrc}/>
        </aside>
      </div>
    </header>
  );
}

export default CaseStudyHeader;
