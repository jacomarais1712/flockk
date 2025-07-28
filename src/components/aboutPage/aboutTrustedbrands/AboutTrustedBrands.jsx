import * as React from "react";
import Slider from 'react-infinite-logo-slider'

const logos = {
  1: { name: 'logo1', source: "/trustedCarousel/company1.svg"},
  2: { name: 'logo2', source: "/trustedCarousel/company2.svg"},
  3: { name: 'logo3', source: "/trustedCarousel/company1.svg"},
  4: { name: 'logo4', source: "/trustedCarousel/company2.svg"},
  5: { name: 'logo5', source: "/trustedCarousel/company1.svg"},
  6: { name: 'logo6', source: "/trustedCarousel/company2.svg"},
  7: { name: 'logo7', source: "/trustedCarousel/company1.svg"}
}

function TrustedBrands() {
  return (
    <section className="px-14 max-md:pl-5">
      <div className="flex flex-col items-center pt-20 pb-12 w-full max-md:max-w-full">
        <h2 className="text-base font-medium tracking-wide text-gray-400">
          Trusted by top brands across various industries
        </h2>
        <div className="flex flex-wrap gap-6 justify-center items-center mt-8 max-md:max-w-full">
          <Slider
              width="200px"
              duration={40}
              pauseOnHover={true}
              blurBorders={false}
              blurBorderColor={'#fff'}
          >   
            {Object.entries(logos).map(([key, logo]) => (
              <Slider.Slide>
                  <img key={key}
                      src={logo.source} 
                      alt="logo" 
                      className='object-contain shrink-0 self-stretch my-auto aspect-[3.57] w-[200px]'
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
