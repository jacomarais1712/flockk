"use client";
import React from 'react';
import BackgroundBlur from './servicesComp/BackgroundBlur';
import SectionHeader from './servicesComp/SectionHeader';
import ServiceCard from './servicesComp/ServiceCard';

const ServicesSection = () => {
  const handleLearnMore = (serviceName) => {
    console.log(`Learn more clicked for: ${serviceName}`);
    // Add your navigation logic here
  };

  const services = [
    {
      id: 'google-ads',
      icon: "<svg layer-name=\"Union\" width=\"38\" height=\"36\" viewBox=\"0 0 38 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"google-ads-icon\" style=\"width: 38px; height: 34px; shrink: 0; fill: #23F399\"> <path d=\"M15.8164 1.68034C19.1111 0.0400385 23.0041 1.13386 24.9805 4.10905L25.1719 4.41277L25.1787 4.42644L36.9678 24.7897V24.8014C38.7084 28.1032 37.4421 32.2503 34.2256 34.1364L34.2158 34.1432L34.2051 34.1491C30.7365 36.0939 26.4914 34.8961 24.5225 31.5915L24.5146 31.5778L19.0771 22.1842L13.5518 31.6862L13.5068 31.7458C13.374 31.922 13.2201 32.0602 13.0576 32.1706C11.7694 33.936 9.68576 35.0846 7.33301 35.0846C3.42114 35.0845 0.25 31.9125 0.25 28.0007C0.250055 25.9901 1.08819 24.1757 2.43359 22.8864L12.1162 6.23796C12.5517 4.45726 13.699 2.85803 15.4893 1.85417L15.8164 1.68034ZM7.33301 23.8346C6.3443 23.8347 5.43609 24.1792 4.72168 24.7546C3.90947 25.4088 3.34746 26.3613 3.20312 27.446C3.17901 27.6273 3.167 27.8127 3.16699 28.0007C3.16699 30.3017 5.03197 32.1675 7.33301 32.1676C8.38656 32.1676 9.34932 31.7764 10.083 31.1315C10.5458 30.7247 10.9176 30.2166 11.1641 29.6423C11.3802 29.1385 11.5 28.5835 11.5 28.0007C11.4999 25.7715 9.74927 23.9512 7.54785 23.8395L7.33301 23.8346ZM22.665 5.90398C21.536 4.0085 19.1511 3.27659 17.1123 4.29265L16.916 4.39714C16.1322 4.83666 15.5538 5.46903 15.208 6.19988L15.1201 6.40105C14.9284 6.87347 14.8299 7.38174 14.832 7.90202L14.8418 8.1696C14.8855 8.79549 15.0742 9.43279 15.4189 10.0407L19.083 16.3708L20.0459 18.0329L27.0391 30.1159C28.2068 32.0549 30.6951 32.7638 32.7666 31.61C34.74 30.4408 35.4125 27.8701 34.2861 25.9801L34.0508 25.5866V25.5719L22.665 5.90398ZM6.94629 20.9274C7.07431 20.9205 7.20327 20.9177 7.33301 20.9176L7.69824 20.9264C10.499 21.0686 12.8706 22.8376 13.8867 25.3073L17.3936 19.277L12.8945 11.5026L12.8906 11.4948C12.8128 11.3583 12.7412 11.2197 12.6729 11.0807L6.94629 20.9274Z\" fill=\"#23F399\"></path> </svg>",
      title: 'Google Ads Management',
      description: 'Strategy, Setup, Optimisation & Growth'
    },
    {
      id: 'analytics',
      icon: "<svg layer-name=\"ic_analytics\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"analytics-icon\" style=\"width: 40px; height: 40px\"> <g clip-path=\"url(#clip0_4066_1099)\"> <path d=\"M27.0835 6.0415V33.5415C27.0835 36.6186 29.2064 38.3332 31.4585 38.3332C33.5418 38.3332 35.8335 36.8748 35.8335 33.5415V6.24984C35.8335 3.429 33.7502 1.6665 31.4585 1.6665C29.1668 1.6665 27.0835 3.61025 27.0835 6.0415Z\" fill=\"#23F399\"></path> <path d=\"M15.6252 20V33.5417C15.6252 36.6187 17.7482 38.3333 20.0002 38.3333C22.0836 38.3333 24.3752 36.875 24.3752 33.5417V20.2083C24.3752 17.3875 22.2919 15.625 20.0002 15.625C17.7086 15.625 15.6252 17.5687 15.6252 20Z\" fill=\"#23F399\"></path> <path d=\"M8.54199 38.333C10.9582 38.333 12.917 36.3743 12.917 33.958C12.917 31.5418 10.9582 29.583 8.54199 29.583C6.12575 29.583 4.16699 31.5418 4.16699 33.958C4.16699 36.3743 6.12575 38.333 8.54199 38.333Z\" fill=\"#23F399\"></path> </g> <defs> <clipPath id=\"clip0_4066_1099\"> <rect width=\"40\" height=\"40\" fill=\"white\"></rect> </clipPath> </defs> </svg>",
      title: 'Google Analytics & GA4 Implementation',
      description: 'Understand Your Users, Track What Matters'
    },
    {
      id: 'tag-management',
      icon: "<svg layer-name=\"Price-Tag-3-Line--Streamline-Remix\" width=\"52\" height=\"52\" viewBox=\"0 0 52 52\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"tag-icon\" style=\"width: 40px; height: 40px; filter: drop-shadow(0px 0px 8px rgba(35,243,153,0.30))\"> <g filter=\"url(#filter0_d_4066_1117)\"> <path d=\"M24.1733 8.50098L40.6724 10.858L43.0294 27.3572L27.7088 42.6777C27.0579 43.3287 26.0028 43.3287 25.3518 42.6777L8.85266 26.1787C8.20178 25.5277 8.20178 24.4726 8.85266 23.8216L24.1733 8.50098ZM25.3518 12.0365L12.3882 25.0001L26.5303 39.1422L39.4939 26.1787L37.7263 13.8043L25.3518 12.0365ZM28.8874 22.6431C27.5856 21.3414 27.5856 19.2308 28.8874 17.9291C30.1891 16.6273 32.2996 16.6273 33.6014 17.9291C34.9031 19.2308 34.9031 21.3414 33.6014 22.6431C32.2996 23.9449 30.1891 23.9449 28.8874 22.6431Z\" fill=\"#23F399\"></path> </g> <defs> <filter id=\"filter0_d_4066_1117\" x=\"-2\" y=\"-3\" width=\"56\" height=\"56\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\"> <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood> <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix> <feOffset></feOffset> <feGaussianBlur stdDeviation=\"4\"></feGaussianBlur> <feComposite in2=\"hardAlpha\" operator=\"out\"></feComposite> <feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.137255 0 0 0 0 0.952941 0 0 0 0 0.6 0 0 0 0.3 0\"></feColorMatrix> <feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_4066_1117\"></feBlend> <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_4066_1117\" result=\"shape\"></feBlend> </filter> </defs> </svg>",
      title: 'Tag Management & Tracking',
      description: 'Advanced Tracking Without Developer Delays'
    },
    {
      id: 'dashboards',
      icon: "<svg layer-name=\"Chat-Poll-Line--Streamline-Remix\" width=\"50\" height=\"49\" viewBox=\"0 0 50 49\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"dashboard-icon\" style=\"width: 40px; height: 40px; filter: drop-shadow(0px 0px 8px rgba(35,243,153,0.30))\"> <g filter=\"url(#filter0_d_4066_1128)\"> <path d=\"M39.9999 8C40.9204 8 41.6666 8.7462 41.6666 9.66667V33C41.6666 33.9205 40.9204 34.6667 39.9999 34.6667H15.7583L8.33325 40.5V9.66667C8.33325 8.7462 9.07945 8 9.99992 8H39.9999ZM38.3333 11.3333H11.6666V33.6417L14.6055 31.3333H38.3333V11.3333ZM26.6666 14.6667V28H23.3333V14.6667H26.6666ZM33.3333 18V28H29.9999V18H33.3333ZM19.9999 21.3333V28H16.6666V21.3333H19.9999Z\" fill=\"#23F399\"></path> </g> <defs> <filter id=\"filter0_d_4066_1128\" x=\"-3\" y=\"-5\" width=\"56\" height=\"56\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\"> <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"></feFlood> <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"></feColorMatrix> <feOffset></feOffset> <feGaussianBlur stdDeviation=\"4\"></feGaussianBlur> <feComposite in2=\"hardAlpha\" operator=\"out\"></feComposite> <feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.137255 0 0 0 0 0.952941 0 0 0 0 0.6 0 0 0 0.3 0\"></feColorMatrix> <feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_4066_1128\"></feBlend> <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_4066_1128\" result=\"shape\"></feBlend> </filter> </defs> </svg>",
      title: 'Custom Dashboards & Reporting',
      description: 'Clear, Automated, Decision-Ready Dashboards'
    }
  ];

  return (
    <section className="flex relative flex-col gap-20 items-center px-16 py-20 mx-auto my-0 w-full min-h-screen max-w-[1440px] max-md:gap-16 max-md:px-8 max-md:py-16 max-sm:gap-10 max-sm:px-4 max-sm:py-10">
      <BackgroundBlur />

      <SectionHeader
        tagline="Our Services"
        heading="What We Do Best"
        description="We help small to medium businesses succeed with:"
      />

      <div className="flex relative gap-6 items-start w-full z-1 max-md:flex-col max-md:gap-5 max-sm:gap-4">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            icon={service.icon}
            title={service.title}
            description={service.description}
            onLearnMore={() => handleLearnMore(service.title)}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
