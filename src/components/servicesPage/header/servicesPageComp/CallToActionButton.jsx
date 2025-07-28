"use client";

/**
 * @typedef {Object} CallToActionButtonProps
 * @property {string} text - The button text
 * @property {() => void} [onClick] - Optional click handler
 */

/**
 * A call-to-action button with arrow icon
 * @param {CallToActionButtonProps} props
 */
export function CallToActionButton({ text, onClick }) {
  return (
    <button
      className="flex relative gap-3 justify-center items-center py-1.5 pr-1.5 pl-3.5 bg-emerald-400 rounded cursor-pointer max-sm:gap-2 max-sm:py-2 max-sm:pr-2 max-sm:pl-4"
      onClick={onClick}
      type="button"
    >
      <span className="relative text-base font-bold tracking-wide leading-6 text-zinc-900 max-sm:text-sm">
        {text}
      </span>
      <div
        dangerouslySetInnerHTML={{
          __html:
            "<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"arrow-icon\" style=\"width: 32px; height: 32px; fill: #002921; position: relative\"> <rect width=\"32\" height=\"32\" fill=\"#002921\"></rect> <path d=\"M21.3381 12.5523L9.86266 24.0277L7.97705 22.1421L19.4525 10.6667H9.33814V8H24.0048V22.6667H21.3381V12.5523Z\" fill=\"#E9FEF5\"></path> </svg>",
        }}
      />
    </button>
  );
}
