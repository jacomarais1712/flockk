import * as React from "react";
import { SectionTitle } from "./valuesComp/SectionTitle";
import { ValuesGrid } from "./valuesComp/ValuesGrid";
import { BackgroundBlur } from "../../reuse/comp/BackgroundBlur";

export const ValuesSection = () => {
  const backgroundBlur = 'absolute left-[-400px] top-[1800px] w-[725px] h-[725px] max-sm:opacity-90 rounded-full opacity-55 z-1 aspect-square pointer-events-none'
  return (
    <section className="flex flex-wrap gap-10 justify-between items-start px-16 py-28 max-md:px-5 max-md:py-24">
      <SectionTitle
        tagline="Our Values"
        heading="Guided By Our Values That Drive Results"
        description="Our values shape how we work, how we communicate, and how we deliver for every client."
      />
      <ValuesGrid />
      <BackgroundBlur backgroundStyle={backgroundBlur}/>
    </section>
  );
};

export default ValuesSection;
