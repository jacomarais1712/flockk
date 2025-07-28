"use client";

export const PricingTag = ({ children, className = "" }) => {
  return (
    <div className={`flex relative gap-2 justify-center items-center px-4 py-1.5 h-8 rounded bg-zinc-900 max-sm:px-3 max-sm:py-1 max-sm:h-7 ${className}`}>
      <span className="relative text-xs font-bold tracking-wide leading-5 text-center text-emerald-400 uppercase max-sm:text-xs max-sm:tracking-wide">
        {children}
      </span>
    </div>
  );
};
