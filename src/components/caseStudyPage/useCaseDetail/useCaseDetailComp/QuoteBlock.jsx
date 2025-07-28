import * as React from "react";

export function QuoteBlock({ children }) {
  return (
    <div className="flex relative flex-col gap-2 items-start self-stretch px-0 py-12">
      <blockquote className="flex relative flex-col items-start self-stretch p-8 rounded bg-emerald-950">
        <p className="relative self-stretch text-base tracking-wide leading-6 text-emerald-400">
          {children}
        </p>
      </blockquote>
    </div>
  );
}
