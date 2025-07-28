import * as React from "react";
import { TaglineBadge } from "./TaglineBadge";

export function SectionHeader({ tagline, heading }) {
  return (
    <header className="flex flex-col self-center max-w-full font-bold text-center w-[768px]">
      <TaglineBadge>{tagline}</TaglineBadge>
      <h1 className="mt-4 w-full text-5xl tracking-tight space-grotesk leading-tight text-emerald-50 max-md:max-w-full max-md:text-4xl">
        {heading}
      </h1>
    </header>
  );
}
