"use client";
import * as React from "react";
import { BrandLogo } from "./BrandLogo";

const TrustedBrands = () => {
  const brandLogos = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/722e2d0956c3940d27700ae92cc05d054eeb0f53?placeholderIfAbsent=true&apiKey=4150577930e34c34b4921d69bc569f64", alt: "Brand 1 logo" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f6e98d826cb613c9a72892f79e1d171c19a479c2?placeholderIfAbsent=true&apiKey=4150577930e34c34b4921d69bc569f64", alt: "Brand 2 logo" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/dc24ad6b541374c7cd46147f6e057a8683b5e4c6?placeholderIfAbsent=true&apiKey=4150577930e34c34b4921d69bc569f64", alt: "Brand 3 logo" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/14c43410e586d3ed1ad6c185f612fe4d3a734c19?placeholderIfAbsent=true&apiKey=4150577930e34c34b4921d69bc569f64", alt: "Brand 4 logo" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/dc24ad6b541374c7cd46147f6e057a8683b5e4c6?placeholderIfAbsent=true&apiKey=4150577930e34c34b4921d69bc569f64", alt: "Brand 5 logo" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/14c43410e586d3ed1ad6c185f612fe4d3a734c19?placeholderIfAbsent=true&apiKey=4150577930e34c34b4921d69bc569f64", alt: "Brand 6 logo" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a8fefbaeca086f869658217d18af279aa5e5403?placeholderIfAbsent=true&apiKey=4150577930e34c34b4921d69bc569f64", alt: "Brand 7 logo" },
  ];

  return (
    <section className="px-14 max-md:pl-5">
      <div className="flex flex-col items-center py-12 w-full max-md:max-w-full">
        <h2 className="text-base tracking-wide text-gray-400">
          Trusted by top brands across various industries
        </h2>
        <div className="flex flex-wrap gap-6 justify-center items-center mt-8 max-md:max-w-full">
          {brandLogos.map((brand, index) => (
            <BrandLogo
              key={index}
              src={brand.src}
              alt={brand.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
