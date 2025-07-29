/**
 * @typedef {Object} TaglineBadgeProps
 * @property {string} text - The tagline text to display
 */

/**
 * TaglineBadge component for displaying a highlighted tagline
 * @param {TaglineBadgeProps} props
 */
export const TaglineBadge = ({ text }) => {
  return (
    <div className="flex relative gap-2 justify-center items-center px-4 py-1.5 h-8 rounded bg-zinc-900 max-sm:self-center">
      <span className="relative text-xs font-bold tracking-wide leading-5 text-center text-emerald-400 uppercase ">
        {text}
      </span>
    </div>
  );
};
