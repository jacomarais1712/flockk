import * as React from "react";
import { SectionHeader } from "./servicesComp/SectionHeader";
import { ServiceCard } from "./servicesComp/ServiceCard";

const servicesData = [
  {
    id: 1,
    backgroundImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/fd2774bbb6f2377d775dc2b0f98372f530968b3c?placeholderIfAbsent=true&apiKey=b57ec36c5a364c76a8ad0ee0e3eff0ce",
    icon: "/services_icons/g_ads.svg",
    title: "Google Ads Management",
    description: "Setup, Strategy, Optimisation & Growth",
    buttonIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bb1c1813981520cd36804b905f1bf902776d688b?placeholderIfAbsent=true&apiKey=b57ec36c5a364c76a8ad0ee0e3eff0ce",
    iconShadow: false
  },
  {
    id: 2,
    backgroundImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/fd2774bbb6f2377d775dc2b0f98372f530968b3c?placeholderIfAbsent=true&apiKey=b57ec36c5a364c76a8ad0ee0e3eff0ce",
    icon: "/services_icons/analytics.svg",
    title: "Google Analytics Setup & Utilisation",
    description: "Understand what works & where to improve.",
    buttonIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bb1c1813981520cd36804b905f1bf902776d688b?placeholderIfAbsent=true&apiKey=b57ec36c5a364c76a8ad0ee0e3eff0ce",
    iconShadow: false
  },
  {
    id: 3,
    backgroundImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/fd2774bbb6f2377d775dc2b0f98372f530968b3c?placeholderIfAbsent=true&apiKey=b57ec36c5a364c76a8ad0ee0e3eff0ce",
    icon: "/services_icons/tag.svg",
    title: "Tracking & Tag Implementation",
    description: "Advanced Tracking Without Developer Delays",
    buttonIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bb1c1813981520cd36804b905f1bf902776d688b?placeholderIfAbsent=true&apiKey=b57ec36c5a364c76a8ad0ee0e3eff0ce",
    iconShadow: false
  },
  {
    id: 4,
    backgroundImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/fd2774bbb6f2377d775dc2b0f98372f530968b3c?placeholderIfAbsent=true&apiKey=b57ec36c5a364c76a8ad0ee0e3eff0ce",
    icon: "/services_icons/looker.svg",
    title: "Looker Studio Data Dashboards",
    description: "Clear, Automated, Decision-Ready Dashboards",
    buttonIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a8d4c654f7838a656766d79a718b31d34d3c614?placeholderIfAbsent=true&apiKey=b57ec36c5a364c76a8ad0ee0e3eff0ce",
    iconShadow: false
  }
];

export function ServicesSection({ heading }) {
  return (
    <section className="flex flex-col px-16 py-28 max-md:px-5 max-md:py-24">
      <SectionHeader
        tagline="OUR Services"
        heading={heading}
      />

      <div className="flex flex-wrap gap-6 items-start mt-20 w-full max-md:mt-10 max-md:max-w-full">
        {servicesData.map((service) => (
          <ServiceCard
            key={service.id}
            backgroundImage={service.backgroundImage}
            icon={service.icon}
            title={service.title}
            description={service.description}
            buttonIcon={service.buttonIcon}
            iconShadow={service.iconShadow}
          />
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
