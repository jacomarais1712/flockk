import Button from './Button';

export default function FAQHeader({ scrollToContact }) {
  return (
    <div className="flex relative flex-col justify-between items-start self-stretch w-full max-w-full max-md:self-center max-md:w-full max-md:max-w-[500px]">
      <div className="flex relative flex-col gap-6 items-center self-stretch">
        <h1 className="flex flex-col justify-center items-center relative self-stretch text-5xl font-bold tracking-tight text-emerald-50 leading-[56.4px] max-md:text-4xl max-md:text-center max-sm:text-3xl max-sm:leading-8">
          Frequently Asked Questions
        </h1>
        <p className="relative text-2xl leading-7 text-center tracking-wide text-neutral-300 w-[1036px] max-md:w-full max-md:text-lg max-sm:w-full max-sm:text-base">
          Get answers to common questions about our services, process, and pricing
        </p>
      </div>
    </div>
  );
}
