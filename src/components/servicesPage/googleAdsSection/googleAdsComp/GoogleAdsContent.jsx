import ServiceList from './ServiceList';

const GoogleAdsContent = () => {
  return (
    <div className="flex relative flex-col gap-8 items-start flex-[1_0_0]">
      <header className="flex relative flex-col gap-6 items-start w-full">
        <h1 className="relative w-full text-5xl font-bold tracking-tight text-emerald-50 leading-[56.4px] max-md:text-4xl max-md:leading-10 max-sm:text-3xl max-sm:leading-10">
          Google Ads Management
        </h1>
        <h2 className="relative w-full text-xl font-medium leading-7 text-zinc-200 max-md:text-xl max-sm:text-lg">
          Strategy, Setup, Optimisation & Growth
        </h2>
        <p className="relative w-full text-base tracking-wide leading-6 text-gray-400 max-md:text-base max-sm:text-sm">
          We plan, build, and manage high-performing Google Ads campaigns tailored to your marketing and business goals. 
          From Search and Performance Max to Demand Gen and Shopping, we ensure every campaign is optimized for what matters most.
        </p>
      </header>
      <ServiceList />
    </div>
  );
};

export default GoogleAdsContent;
