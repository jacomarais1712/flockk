import * as React from "react";

export function ListItem({ icon, children }) {
  return (
    <li className="flex relative gap-4 items-center self-stretch">
      <div>
        <div dangerouslySetInnerHTML={{ __html: icon }} />
      </div>
      <div className="relative text-base tracking-wide leading-6 text-gray-400 flex-[1_0_0]">
        {children}
      </div>
    </li>
  );
}
