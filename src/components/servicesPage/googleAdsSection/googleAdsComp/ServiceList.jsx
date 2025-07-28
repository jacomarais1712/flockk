import ServiceListItem from './ServiceListItem';

const ServiceList = () => {
  const services = [
    "Strategic Campaign Architecture",
    "Advanced Keyword & Audience Targeting",
    "Implementation Of Advanced Features ",
    "High Performing Ad Copy & Creatives",
    "Online & Offline Conversion Tracking",
    "Automated & Smart Budget Allocation"
  ];

  return (
    <section className="flex relative flex-col gap-4 items-start w-full">
      <h3 className="relative w-full text-base font-bold tracking-wide leading-6 text-zinc-200 max-md:text-base max-sm:text-sm">
        What we can help you with:
      </h3>
      <ul className="flex relative flex-col gap-4 items-start w-full">
        {services.map((service, index) => (
          <ServiceListItem key={index}>
            {service}
          </ServiceListItem>
        ))}
      </ul>
    </section>
  );
};

export default ServiceList;
