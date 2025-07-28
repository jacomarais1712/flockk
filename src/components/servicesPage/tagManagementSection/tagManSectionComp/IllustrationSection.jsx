import React from 'react';
import { TagManagementIllustration } from './TagManagementIllustration';

export const IllustrationSection = () => {
  return (
    <div className="box-border flex relative flex-col gap-2 items-start w-[600px] max-md:items-center max-md:px-16 max-md:py-20 max-md:w-full max-sm:px-10 max-sm:py-16">
      <TagManagementIllustration />
    </div>
  );
};
