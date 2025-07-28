import * as React from "react";
import { CaseStudyFooterContent } from "./caseStudyFooterComp/CaseStudyFooterContent";
import { CaseStudyFooterButton } from "./caseStudyFooterComp/CaseStudyFooterButton";

function CaseStudyFooterBanner({ scrollToTop }) {

  return (
    <section className="flex flex-col justify-center px-16 py-20 max-md:px-5">
      <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-36 w-full rounded-xl min-h-[456px] max-md:px-5 max-md:py-24 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/687e1c327ca8da9e00e8df3ba16df89e17106a17?placeholderIfAbsent=true&apiKey=b57ec36c5a364c76a8ad0ee0e3eff0ce"
          alt="Background"
          className="object-cover absolute inset-0 size-full z-[-1]"
        />
        <div className="flex flex-col gap-8 items-center w-full max-w-(--breakpoint-md) max-md:max-w-[600px] max-sm:gap-6">
          <CaseStudyFooterContent />
          <CaseStudyFooterButton scrollToTop={scrollToTop} />
        </div>
      </div>
    </section>
  );
}

export default CaseStudyFooterBanner;
