import * as React from "react";

export const FeatureList = ({ features, textColor = "text-gray-400" }) => {
  return (
    <div className={`py-2 mt-2 w-full ${textColor}`}>
      {features.map((feature, index) => (
        <div key={index} className="flex gap-4 items-start mt-4 w-full first:mt-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ed43b7bcc02c1661428660929091d7a9d31942b?placeholderIfAbsent=true&apiKey=a8edfbc5dc304354a1953eb3bb47917c"
            className="object-contain shrink-0 w-6 aspect-square"
            alt=""
          />
          <div className="flex-1 shrink basis-0">
            {feature}
          </div>
        </div>
      ))}
    </div>
  );
};
