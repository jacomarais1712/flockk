import * as React from "react";

export function Detail({ icon, title, description }) {
  return (
    <div className="flex relative gap-4 items-center self-stretch">
      <div className="flex relative gap-1.5 items-center p-3 bg-black bg-opacity-30">
        <div>
          <div dangerouslySetInnerHTML={{ __html: icon }} />
        </div>
      </div>
      <div className="flex relative flex-col justify-center items-center flex-[1_0_0]">
        <h3 className="relative self-stretch text-xl font-medium leading-7 text-zinc-200 max-sm:text-lg">
          {title}
        </h3>
        <p className="relative self-stretch text-base tracking-wide leading-6 text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
}
