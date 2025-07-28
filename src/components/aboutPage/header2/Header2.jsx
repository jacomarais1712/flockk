import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react";
import arrowRightSLineStreamlineRemix from "./arrow-right-s-line-streamline-remix.svg";
import arrowRightUpLineStreamlineRemix from "./arrow-right-up-line-streamline-remix.svg";
import frame1618872747 from "./frame-1618872747.png";

const Header2 = () => {
  return (
    <div className="flex flex-col w-[1440px] items-center gap-20 px-16 py-20 relative">
      <div className="inline-flex items-center gap-20 px-10 py-0 relative flex-[0_0_auto] rounded-lg border-[none] [background:radial-gradient(50%_50%_at_75%_50%,rgba(35,243,153,0.1)_0%,rgba(35,243,153,0)_43%)]">
        <div className="flex w-[1226px] items-center justify-between relative">
          <img
            className="relative w-[434px] h-[495px]"
            alt="Francois - Paid Media Strategist"
            src={frame1618872747}
          />

          <div className="flex flex-col w-[712px] items-start gap-10 relative">
            <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <Badge className="inline-flex h-8 items-center justify-center gap-2 px-4 py-1.5 relative bg-flockk-brand-colourpinepine-850 rounded">
                <span className="relative w-fit mt-[-1.00px] font-badge-label font-(--badge-label-font-weight) text-flockk-brand-colouremeraldemeral-600 text-(length:--badge-label-font-size) text-center tracking-(--badge-label-letter-spacing) leading-(--badge-label-line-height) whitespace-nowrap [font-style:var(--badge-label-font-style)]">
                  OUR EXPERTISE
                </span>
              </Badge>

              <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                <h1 className="relative self-stretch mt-[-1.00px] font-heading-2 font-(--heading-2-font-weight) text-flockk-brand-colouremeraldemeral-50 text-(length:--heading-2-font-size) tracking-(--heading-2-letter-spacing) leading-(--heading-2-line-height) [font-style:var(--heading-2-font-style)]">
                  Meet Francois: Your Paid Media Strategist
                </h1>

                <p className="relative self-stretch font-body-text-regular font-(--body-text-regular-font-weight) text-flockk-brand-colourneutralneutral-200 text-(length:--body-text-regular-font-size) tracking-(--body-text-regular-letter-spacing) leading-(--body-text-regular-line-height) [font-style:var(--body-text-regular-font-style)]">
                  Francois brings over a decade of hands-on experience in
                  performance marketing. With a sharp eye for data and a
                  practical mindset, he&apos;s helped brands across Europe and
                  South Africa grow through strategy, structure, and smart
                  execution. Every ad, insight, and optimisation is made with
                  intention — and your business in mind.
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-5 relative flex-[0_0_auto]">
              <Button className="inline-flex items-center justify-center gap-3 pl-3.5 pr-1.5 py-1.5 relative flex-[0_0_auto] bg-flockk-brand-colouremeraldemeral-600 rounded h-auto hover:bg-flockk-brand-colouremeraldemeral-700">
                <span className="relative w-fit font-button-label font-(--button-label-font-weight) text-flockk-brand-colourneutralneutral-800 text-(length:--button-label-font-size) tracking-(--button-label-letter-spacing) leading-(--button-label-line-height) whitespace-nowrap [font-style:var(--button-label-font-style)]">
                  Book a Free Consultation
                </span>

                <img
                  className="relative w-8 h-8"
                  alt="Arrow right up line"
                  src={arrowRightUpLineStreamlineRemix}
                />
              </Button>

              <Button
                variant="ghost"
                className="inline-flex items-center justify-center gap-1 pl-3.5 pr-1.5 py-2.5 relative flex-[0_0_auto] rounded h-auto hover:bg-flockk-brand-colourneutralneutral-800"
              >
                <span className="relative w-fit mt-[-1.00px] font-button-label font-(--button-label-font-weight) text-white text-(length:--button-label-font-size) tracking-(--button-label-letter-spacing) leading-(--button-label-line-height) whitespace-nowrap [font-style:var(--button-label-font-style)]">
                  See Our Work
                </span>

                <img
                  className="relative w-6 h-6"
                  alt="Arrow right s line"
                  src={arrowRightSLineStreamlineRemix}
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header2;
