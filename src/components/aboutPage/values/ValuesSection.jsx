import * as React from "react";
import { SectionTitle } from "./valuesComp/SectionTitle";
import { ValuesGrid } from "./valuesComp/ValuesGrid";

export const ValuesSection = () => {
  return (
    <section className="flex flex-wrap gap-10 justify-between items-start px-16 py-28 max-md:px-5 max-md:py-24">
      <SectionTitle
        tagline="Our Values"
        heading="Guided By Our Values That Drive Results"
        description="Our values shape how we work, how we communicate, and how we deliver for every client."
      />
      <ValuesGrid />
    </section>
  );
};

export default ValuesSection;
