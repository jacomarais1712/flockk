import * as React from "react";

export const ValueCard = ({
  backgroundImage,
  icon,
  title,
  description,
  className = "",
  marginTop = ""
}) => {
  return (
    <article className={`flex overflow-hidden relative flex-col justify-center p-8 max-w-full rounded-lg aspect-[0.994] w-[318px] max-md:px-5 ${className} ${marginTop} border-1 border-neutral-300 max-sm:self-center max-sm:mb-5 max-sm:mt-0`}>
      <img
        src={backgroundImage}
        alt=""
        className="object-cover absolute inset-0 size-full"
      />
      <div className="relative flex-1 w-full">
        <div className="flex gap-2 items-center p-5 w-20 h-20 bg-black bg-opacity-30">
          <img
            src={icon}
            alt={`${title} icon`}
            className="object-contain self-stretch my-auto w-10 aspect-square shadow-[0px_0px_8px_rgba(35,243,153,0.3)]"
          />
        </div>
        <div className="mt-0 w-full max-md:mt-10 max-sm:mt-2">
          <h3 className="text-3xl font-medium tracking-normal leading-snug text-emerald-50 max-sm:text-xl">
            {title}
          </h3>
          <p className="mt-2 text-sm tracking-wide leading-6 text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};
