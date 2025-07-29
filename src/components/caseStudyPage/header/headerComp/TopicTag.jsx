"use client";
import React from "react";

function TopicTag({ text }) {
  return (
    <div className="flex relative items-start px-2.5 py-1.5 rounded-sm bg-zinc-800 max-sm:self-center">
      <span className="relative text-[10px] font-bold tracking-wide leading-3 text-center uppercase text-neutral-300">
        {text}
      </span>
    </div>
  );
}

export default TopicTag;
