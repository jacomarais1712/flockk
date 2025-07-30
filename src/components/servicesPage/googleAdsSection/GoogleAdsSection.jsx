import GoogleAdsImage from './googleAdsComp/GoogleAdsImage';
import GoogleAdsContent from './googleAdsComp/GoogleAdsContent';
import { BackgroundBlur } from '../../reuse/comp/BackgroundBlur';

const GoogleAdsSection = () => {
  const backgroundBlur1Style = 'absolute right-[-640px] bottom-[-560px] w-[725px] h-[725px] max-sm:opacity-90 rounded-full opacity-45 z-1 aspect-square'
  return (
    <section className="box-border flex relative flex-col gap-20 items-center px-16 py-28 mx-auto my-0 w-full max-w-[1440px] max-md:gap-16 max-md:px-10 max-md:py-20 max-sm:gap-10 max-sm:px-5 max-sm:py-3">
      <div className="flex relative gap-20 items-center mx-auto w-full max-w-none max-md:flex-col max-md:gap-16 max-md:max-w-[991px] max-sm:gap-10 max-sm:max-w-(--breakpoint-sm)">
        <GoogleAdsImage />
        <GoogleAdsContent />
        <BackgroundBlur backgroundStyle={backgroundBlur1Style}/>
      </div>
    </section>
  );
};

export default GoogleAdsSection;
