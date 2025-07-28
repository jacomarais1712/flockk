/**
 * @typedef {Object} HeroImageProps
 * @property {string} src - The image source URL
 * @property {string} alt - The image alt text
 */

/**
 * Hero image component with responsive design
 * @param {HeroImageProps} props
 */
export const HeroImage = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="relative shrink-0 h-[613px] w-[498px] max-md:w-full max-md:h-auto max-md:max-w-[498px]"
    />
  );
};
