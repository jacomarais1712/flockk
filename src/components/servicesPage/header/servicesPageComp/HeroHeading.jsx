"use client";

/**
 * @typedef {Object} HeroHeadingProps
 * @property {string} primaryText - The first part of the heading (white text)
 * @property {string} accentText - The second part of the heading (emerald text)
 */

/**
 * A hero heading component with split text styling
 * @param {HeroHeadingProps} props
 */
export function HeroHeading({ primaryText, accentText }) {
  return (
    <h1 className="relative self-stretch text-6xl font-bold tracking-tight text-center leading-[67.1px] max-md:text-5xl max-sm:text-3xl max-sm:leading-10">
      <div className="text-zinc-200">{primaryText}</div>
      <div className="text-emerald-400">{accentText}</div>
    </h1>
  );
}
