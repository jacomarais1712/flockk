import React, { useState, useEffect } from "react";
import Slider from 'react-infinite-logo-slider'

const logos = {
  1: { name: 'logo1', source: "/customer_logos/Bramd_t.png"},
  2: { name: 'logo2', source: "/customer_logos/Budget_Gas.png"},
  3: { name: 'logo3', source: "/customer_logos/ChangeFolio.png"},
  4: { name: 'logo4', source: "/customer_logos/ChefsBrigade.png"},
  5: { name: 'logo5', source: "/customer_logos/CyberOffsec.png"},
  6: { name: 'logo6', source: "/customer_logos/DigitalIDTech.png"},
  7: { name: 'logo7', source: "/customer_logos/Entelect.png"},
  8: { name: 'logo8', source: "/customer_logos/HooplaLoans.png"},
  9: { name: 'logo9', source: "/customer_logos/IFXBrokers.png"},
  10: { name: 'logo10', source: "/customer_logos/Ikhambi.png"},
  11: { name: 'logo11', source: "/customer_logos/OhMyCake.png"},
  12: { name: 'logo12', source: "/customer_logos/Red+White.png"},
  13: { name: 'logo13', source: "/customer_logos/RedesignInteriors.png"},
  14: { name: 'logo14', source: "/customer_logos/Zestlife.png"},
  15: { name: 'logo14', source: "/customer_logos/MoAfricaTours.png"},
}

function TrustedBrands() {
  const [windowSize, setWindowSize] = useState(600)

  window.addEventListener('resize', () => {
    setWindowSize(window.innerWidth);
  });

  return (
    <section className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-col items-center pt-20 pb-12 w-full max-md:max-w-full">
        <h2 className="text-base font-medium tracking-wide text-gray-400 max-sm:text-center">
          Trusted by top brands across various industries
        </h2>
        <div className="flex flex-wrap gap-6 justify-center items-center mt-8 max-md:max-w-full">
          <Slider className='w-full'
              width={`${windowSize < 590 ? '180px' : '250px'}`}
              duration={40}
              pauseOnHover={true}
              blurBorders={false}
              blurBorderColor={'#fff'}
          >   
            {Object.entries(logos).map(([key, logo]) => (
              <Slider.Slide key={logo.name}>
                  <img 
                      src={logo.source} 
                      alt="logo" 
                      className='object-contain shrink-0 self-stretch my-auto aspect-[3.57] w-[200px] max-sm:w-[150px]'
                  />
              </Slider.Slide>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default TrustedBrands;
