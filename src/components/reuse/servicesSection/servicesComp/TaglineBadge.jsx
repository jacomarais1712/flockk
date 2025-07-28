import * as React from "react";

export function TaglineBadge({ children, className = "" }) {
  return (
    <div className={`flex gap-2 justify-center items-center self-center px-4 py-2 text-xs tracking-wide leading-relaxed text-emerald-400 uppercase rounded bg-zinc-900 min-h-8 ${className}`}>
      <span className="self-stretch my-auto text-emerald-400">
        {children}
      </span>
    </div>
  );
}
