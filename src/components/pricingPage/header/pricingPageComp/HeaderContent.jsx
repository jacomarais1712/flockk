"use client";

export const HeaderContent = ({ title, description }) => {
  return (
    <div className="flex relative flex-col gap-6 items-center self-stretch max-sm:gap-5">
      <h1 className="relative text-6xl font-bold tracking-tight text-center leading-[67.1px] text-zinc-200 w-[770px] max-md:w-full max-md:text-5xl max-md:leading-[52.8px] max-sm:text-3xl max-sm:tracking-normal max-sm:leading-9">
        {title}
      </h1>
      <p className="relative text-xl font-medium leading-7 text-center text-neutral-300 w-[644px] max-md:w-full max-md:text-lg max-md:leading-6 max-sm:text-base max-sm:leading-6">
        {description}
      </p>
    </div>
  );
};
