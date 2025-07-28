import React from 'react';

export const ContactHero = () => {
  return (
    <section className="flex-1 shrink basis-0 min-w-60 max-md:max-w-full">
      <header className="flex flex-col w-full max-md:max-w-full">
        <div className="flex gap-2 justify-center items-center self-start px-4 py-2 text-xs font-bold tracking-wide leading-relaxed text-center text-emerald-400 uppercase bg-emerald-900 rounded min-h-8">
          <span className="self-stretch my-auto">
            Contact Form
          </span>
        </div>
        <div className="mt-4 w-full max-md:max-w-full">
          <h1 className="text-5xl font-bold tracking-tight leading-tight text-neutral-50 drop-shadow-xs drop-shadow-white/40 max-md:max-w-full max-md:text-4xl">
            Send Us a Message
          </h1>
          <p className="mt-6 text-base tracking-wide leading-6 text-neutral-300 max-md:max-w-full">
            Let's discuss how we can help you achieve your goals. Whether
            you're exploring Google Ads or Analytics for the first time or scaling an
            established brand, we're here to guide you.
          </p>
        </div>
      </header>
    </section>
  );
};
