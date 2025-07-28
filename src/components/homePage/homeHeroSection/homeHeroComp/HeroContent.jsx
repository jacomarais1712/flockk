import { TaglineBadge } from './TaglineBadge';
import { PrimaryButton } from './PrimaryButton';
import { SecondaryButton } from './SecondaryButton';

export const HeroContent = ({
  tagline,
  heading,
  description,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick
}) => {
  return (
    <div className="flex relative flex-col gap-10 items-start flex-[1_0_0]">
      <div className="flex relative flex-col gap-4 items-start self-stretch max-sm:gap-3">
        <TaglineBadge text={tagline} />
        <div className="flex relative flex-col gap-10 items-start self-stretch max-sm:gap-6">
          <h1 className="relative self-stretch text-5xl font-bold space-grotesk tracking-tight leading-[56.4px] text-zinc-200 max-md:text-4xl max-sm:text-3xl max-sm:leading-8">
            {heading}
          </h1>
          <p className="relative self-stretch text-base tracking-wide leading-6 text-gray-400 max-sm:text-sm max-sm:leading-5">
            {description}
          </p>
        </div>
      </div>
      <div className="flex relative gap-5 items-center max-md:flex-col max-md:gap-4 max-sm:gap-3">
        <PrimaryButton text={primaryButtonText} onClick={onPrimaryClick} />
        <SecondaryButton text={secondaryButtonText} onClick={onSecondaryClick} />
      </div>
    </div>
  );
};
