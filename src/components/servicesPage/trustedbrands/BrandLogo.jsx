"use client";
import * as React from "react";

export const BrandLogo = ({ src, alt = "Brand logo" }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="object-contain shrink-0 self-stretch my-auto aspect-[3.57] w-[200px]"
    />
  );
};
