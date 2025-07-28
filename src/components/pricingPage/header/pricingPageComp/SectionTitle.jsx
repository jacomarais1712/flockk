"use client";
import { PricingTag } from './pricingPageComp/PricingTag';
import { HeaderContent } from './pricingPageComp/HeaderContent';

export const SectionTitle = ({ tagline, title, description }) => {
  return (
    <section className="flex relative flex-col gap-4 items-center self-stretch max-sm:gap-3">
      <PricingTag>{tagline}</PricingTag>
      <HeaderContent title={title} description={description} />
    </section>
  );
};
