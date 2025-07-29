import * as React from "react";
import { ValueCard } from "./ValueCard";

export const ValuesGrid = () => {
  const values = [
    {
      id: 1,
      backgroundImage: "/backgrounds/values_card/values_card_bg1.svg",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0ebc4f76f84d0f063cd50344061f2137b99a5ca0?placeholderIfAbsent=true&apiKey=917e8cc76bd54a7d91c30bd7f061bdf9",
      title: "Clarity",
      description: "Digital marketing made transparent and easy to understand. We translate data into meaningful insights, avoiding jargon and fluff.",
      className: "",
      marginTop: ""
    },
    {
      id: 2,
      backgroundImage: "/backgrounds/values_card/values_card_bg1.svg",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/92574c5079938d50470882a81792f3c6a25a80e3?placeholderIfAbsent=true&apiKey=917e8cc76bd54a7d91c30bd7f061bdf9",
      title: "Results-Driven Philosophy",
      description: "Our strategies are built on data, designed for efficiency, and focused on maximizing your return on investment.",
      className: "z-10 self-end",
      marginTop: "-mt-80 max-md:mt-0"
    },
    {
      id: 3,
      backgroundImage: "/backgrounds/values_card/values_card_bg1.svg",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/851330539620829be74552b2370a2b0d67e5a9a5?placeholderIfAbsent=true&apiKey=917e8cc76bd54a7d91c30bd7f061bdf9",
      title: "Specialized Expertise",
      description: "Our team comprises certified experts in Google Ads and Analytics, staying at the forefront of platform changes and best practices.",
      className: "",
      marginTop: "mt-8"
    },
    {
      id: 4,
      backgroundImage: "/backgrounds/values_card/values_card_bg1.svg",
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1009b33484aed2f08402bb65ce7ee776656ac7f1?placeholderIfAbsent=true&apiKey=917e8cc76bd54a7d91c30bd7f061bdf9",
      title: "Client-Centric Partnership",
      description: "We see ourselves as an extension of your team, working collaboratively to understand your goals and deliver tailored solutions.",
      className: "z-10 self-end",
      marginTop: "-mt-80 max-md:mt-0"
    }
  ];

  return (
    <div className="flex flex-col min-w-60 w-[668px] max-md:max-w-full">
      {values.map((value) => (
        <ValueCard
          key={value.id}
          backgroundImage={value.backgroundImage}
          icon={value.icon}
          title={value.title}
          description={value.description}
          className={value.className}
          marginTop={value.marginTop}
        />
      ))}
    </div>
  );
};
