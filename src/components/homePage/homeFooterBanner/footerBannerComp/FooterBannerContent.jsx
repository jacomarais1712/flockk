import * as React from "react";
import FooterBannerHeading from "./FooterBannerHeading";
import FooterBannerButton from "./FooterBannerButton";

function FooterBannerContent({
  iconSrc,
  heading,
  description,
  buttonText,
  buttonIconSrc,
  onButtonClick
}) {
  return (
    <div className="flex relative flex-col items-center max-w-full w-[768px]">
      <img
        src={iconSrc}
        alt=""
        className="object-contain aspect-[78.02/104.00] fill-zinc-200 w-[78px]"
      />
      <FooterBannerHeading
        heading={heading}
        description={description}
      />
      <FooterBannerButton
        text={buttonText}
        iconSrc={buttonIconSrc}
        onClick={onButtonClick}
      />
    </div>
  );
}

export default FooterBannerContent;
