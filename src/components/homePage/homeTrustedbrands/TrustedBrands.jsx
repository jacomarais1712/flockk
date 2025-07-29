import React from 'react';
import Logo from './Logo';

const TrustedBrands = () => {
  const logoData = [
    {
      id: 1,
      alt: "Bramd_t",
      logo: '/trusted/Bramd_t.png'
    },
    {
      id: 2,
      alt: "ChangeFolio",
      logo: '/trusted/ChangeFolio.png'
    },
    {
      id: 3,
      alt: "CyberOffsec",
      logo: '/trusted/CyberOffsec.png'
    },
    {
      id: 4,
      alt: "DigitalIDTech",
      logo: '/trusted/DigitalIDTech.png'
    },
    {
      id: 5,
      alt: "IFXBrokers",
      logo: '/trusted/IFXBrokers.png'
    },
    {
      id: 6,
      alt: "RedesignInteriors",
      logo: '/trusted/RedesignInteriors.png'
    }
  ];

  return (
    <section className="box-border flex relative gap-16 items-center self-stretch px-16 py-12 mx-auto w-full max-w-none max-md:flex-col max-md:gap-10 max-md:items-start max-md:px-10 max-md:py-8 max-md:max-w-[991px] max-sm:gap-6 max-sm:px-5 max-sm:py-6 max-sm:max-w-(--breakpoint-sm)">
      <header className="relative shrink-0 text-sm tracking-wide leading-6 text-gray-400 w-[200px] max-md:w-full max-md:text-center max-sm:text-xs max-sm:tracking-wide max-sm:leading-5">
        Trusted by top brands across various industries
      </header>

      <div className="flex relative justify-between items-center self-stretch flex-[1_0_0] max-md:flex-wrap max-md:gap-8 max-md:justify-center max-md:w-full max-sm:flex-col max-sm:gap-5 max-sm:items-center">
        {logoData.map((logo) => (
          <Logo
            key={logo.id}
            logo={logo.logo}
            alt={logo.alt}
          />
        ))}
      </div>
    </section>
  );
};

export default TrustedBrands;
