import * as React from "react";
import { FeatureList } from "./FeatureList";
import { Link } from 'react-router-dom';

export const PricingCard = ({
  backgroundImage,
  icon,
  title,
  badge,
  description,
  subtitle,
  bestForItems,
  price,
  period,
  annualPrice,
  savings,
  features,
  featuresTextColor,
  aspectRatio = "aspect-[0.55]",
  paddingBottom = "pb-20"
}) => {
  const handleGetStartedClick = () => {
    window.scrollTo({ top: 600, behavior: 'smooth' });
  }
  return (
    <div className={`flex relative flex-col flex-1 shrink justify-start p-10 rounded-lg min-h-[1200px] basis-0 min-w-60 max-md:px-5 lg:min-h-[1600px] ${paddingBottom}`}>
      <img
        src={backgroundImage}
        className="object-cover absolute inset-0 size-full"
        alt=""
      />
      <div className="relative w-full">
        <header className="flex gap-3 justify-center items-center w-full">
          <img
            src={icon}
            className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
            alt=""
          />
          <h2 className="flex-1 shrink self-stretch my-auto text-4xl font-medium tracking-normal leading-tight text-emerald-400 basis-6">
            {title}
          </h2>
          {badge && (
            <div className="flex gap-2 justify-center items-center self-stretch px-3 py-1 my-auto text-base font-bold tracking-wide text-emerald-400 bg-emerald-900 border border-emerald-400 border-solid shadow-sm rounded-[36px]">
              <span className="self-stretch my-auto max-sm:text-[8px]">{badge}</span>
            </div>
          )}
        </header>

        <section className="mt-8 w-full">
          <p className="text-xl tracking-wide leading-8 text-zinc-200">
            <span style={{fontWeight: 700, color: 'rgba(227,231,232,1)'}}>
              {description}
            </span>
          </p>
          <p className="mt-5 text-base tracking-wide leading-6 text-neutral-300">
            {subtitle}
          </p>

          <div className="flex flex-col mt-5 w-full">
            <p className="self-start text-base tracking-wide text-center text-zinc-200">
              <span style={{fontWeight: 700, color: 'rgba(227,231,232,1)'}}>
                Best for:
              </span>
            </p>
            <div className="mt-2 w-full">
              {bestForItems.map((item, index) => (
                <div key={index} className="flex gap-2 items-start mt-2 w-full first:mt-0">
                  <span className="text-sm tracking-wide leading-relaxed text-neutral-300">
                    👉
                  </span>
                  <span className="flex-1 shrink text-base tracking-wide leading-6 text-gray-400 basis-0">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8 w-full">
          <div className="flex flex-col justify-center w-full">
            <div className="flex gap-2 items-center w-full text-base font-bold tracking-wide text-center text-emerald-400">
              <span className="self-stretch my-auto">Price</span>
              <div className="flex-1 shrink self-stretch my-auto h-px border border-solid basis-0 bg-neutral-700 border-neutral-700 w-[234px]" />
            </div>
            <div className="mt-2 text-6xl font-bold tracking-normal leading-tight text-zinc-200 max-md:text-4xl max-sm:text-4xl">
              <span className="space-grotesk text-6xl leading-[67px] tracking-tight max-sm:text-4xl">
                {price}
              </span>
              <span className="space-grotesk text-4xl leading-[67px] tracking-tight max-sm:text-2xl">
                {period}
              </span>
            </div>
            <div className="flex gap-1 items-center self-start mt-2 text-center">
              <span className="self-stretch my-auto text-base font-bold tracking-wide text-gray-400">
                <span style={{fontWeight: 400, color: 'rgba(150,168,174,1)'}}>
                </span>
              </span>
              <span className="self-stretch my-auto text-xl tracking-wide text-zinc-200">
                <span style={{fontWeight: 700, color: 'rgba(227,231,232,1)'}}>
                </span>
              </span>
            </div>
          </div>
          <Link to='/contact'>
            <button onClick={() => handleGetStartedClick()} className="flex gap-3 justify-center cursor-pointer items-center py-2 pr-1.5 pl-3.5 mt-6 w-full text-base font-bold tracking-wide bg-[linear-gradient(180deg,#23F399_0%,#19E48B_100%)] hover:bg-emerald-100 hover:bg-none rounded text-zinc-900">
              <span className="self-stretch my-auto">Get Started</span>
            </button>
          </Link>
        </section>

        <div className="mt-8 w-full border border-solid bg-neutral-700 border-neutral-700 min-h-px" />

        <section className="mt-8 w-full text-base tracking-wide">
          <p className="text-zinc-200">
            <span style={{fontWeight: 700, color: 'rgba(227,231,232,1)'}}>
              What's included:
            </span>
          </p>
          <FeatureList features={features} textColor={featuresTextColor} />
        </section>
      </div>
    </div>
  );
};
