import FAQHeader from './contactFaqComp/FAQHeader';
import FAQAccordion from './contactFaqComp/FAQAccordion';

export default function ContactFAQ({ scrollToContact }) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&family=Inter:wght@400;700&display=swap"
      />
      <section className="flex relative flex-col gap-20 items-center px-16 py-28 w-full max-w-full max-md:gap-16 max-md:px-8 max-md:py-20 max-md:w-full max-sm:gap-10 max-sm:px-4 max-sm:py-16">
        <div className="flex flex-col relative gap-20 justify-center self-stretch rounded-lg backdrop-blur-[20px] max-md:flex-col max-md:gap-16">
          <FAQHeader scrollToContact={scrollToContact}/>
          <FAQAccordion />
        </div>
      </section>
    </>
  );
}
