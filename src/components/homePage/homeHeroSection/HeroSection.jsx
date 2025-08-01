import { HeroImage } from './homeHeroComp/HeroImage';
import { HeroContent } from './homeHeroComp/HeroContent';

export const HeroSection = ({
  imageUrl = "https://cdn.builder.io/api/v1/image/assets/TEMP/e71ff3bdba96b2b96bcaf2a1d5c1ac7a7285b3a2?width=996",
  imageAlt = "Frame 1618872745",
  tagline = "Why Partner With Flockk?",
  heading = "Results are a given.\nSuccess is in the details.",
  description = "Flockk is your dedicated growth partner, built on a foundation of technical expertise. We don't just manage campaigns; we master the entire Google Ads and Analytics ecosystem to unlock opportunities other agencies miss.",
  primaryButtonText = "Let's Talk",
  secondaryButtonText = "See Pricing & Packages",
  onPrimaryClick,
  onSecondaryClick
}) => {
  // Format heading with line breaks
  const formattedHeading = heading.split('\n').map((line, index, array) => (
    <span key={index} className={index === 1 ? 'text-emerald-400' : ''}>
      {line}
      {index < array.length - 1 && <br />}
    </span>
  ));

  // Format description with line breaks
  const formattedDescription = description.split('\n').map((line, index, array) => (
    <span key={index}>
      {line}
      {index < array.length - 1 && <br />}
    </span>
  ));

  return (
    <section className="flex relative flex-col gap-20 items-center self-stretch px-16 py-28 bg-black max-md:gap-16 max-md:px-8 max-md:py-20 max-sm:gap-10 max-sm:px-5 max-sm:py-16">
      <div className="flex relative gap-28 items-center self-stretch max-md:flex-col max-md:gap-16 max-sm:gap-10">
        <HeroImage src={imageUrl} alt={imageAlt} />
        <HeroContent
          tagline={tagline}
          heading={formattedHeading}
          description={formattedDescription}
          primaryButtonText={primaryButtonText}
          secondaryButtonText={secondaryButtonText}
          onPrimaryClick={onPrimaryClick}
          onSecondaryClick={onSecondaryClick}
        />
      </div>
    </section>
  );
};

export default HeroSection;
