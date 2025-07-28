import React from 'react';
import { CheckIcon } from './CheckIcon';

export const ChecklistItem = ({ children }) => {
  return (
    <li className="flex relative gap-4 items-center self-stretch max-sm:gap-3">
      <CheckIcon />
      <p className="relative text-base tracking-wide leading-6 text-gray-400 flex-[1_0_0] max-md:text-base max-sm:text-sm max-sm:tracking-wide">
        {children}
      </p>
    </li>
  );
};
