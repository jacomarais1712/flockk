import Button from './Button';

export default function FAQHeader({ scrollToContact }) {
  return (
    <div className="flex relative flex-col justify-between items-start self-stretch w-[365px] max-md:self-center max-md:w-full max-md:max-w-[500px]">
      <div className="flex relative flex-col gap-6 items-start self-stretch">
        <h1 className="relative self-stretch text-5xl font-bold tracking-tight text-emerald-50 leading-[56.4px] max-md:text-4xl max-md:text-center max-sm:text-3xl max-sm:leading-8">
          Have any Questions?
        </h1>
        <p className="relative text-xl tracking-wide leading-8 text-slate-500 w-[314px] max-md:w-full max-md:text-center max-sm:text-lg">
          Find answers to common questions about our pricing and services
          here 👉
        </p>
      </div>
      <div className="flex relative flex-col gap-6 items-start self-stretch max-md:items-center">
        <p className="relative text-base tracking-wide leading-6 text-neutral-300 w-[273px] max-md:w-full max-md:text-center max-sm:text-sm">
          Still have questions or not convinced yet?
        </p>
        <Button scrollToContact={scrollToContact}/>
      </div>
    </div>
  );
}
