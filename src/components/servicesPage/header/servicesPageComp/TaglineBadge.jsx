"use client";

/**
 * @typedef {Object} TaglineBadgeProps
 * @property {string} text - The text to display in the badge
 */

/**
 * A reusable badge component for displaying taglines
 * @param {TaglineBadgeProps} props
 */
export function TaglineBadge({ text }) {
  return (
    <div className="flex relative gap-2 justify-center items-center px-4 py-1.5 h-8 rounded bg-zinc-900">
      <span className="relative text-xs font-bold tracking-wide leading-5 text-center text-emerald-400 uppercase">
        {text}
      </span>
    </div>
  );
}
