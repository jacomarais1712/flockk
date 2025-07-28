import * as React from "react";
import { SectionHeader } from "./homeServicesComp/SectionHeader";
import { ServiceCard } from "./homeServicesComp/ServiceCard";

const servicesData = [
  {
    id: 1,
    backgroundImage: "/backgrounds/services/card.svg",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/36b5d87ad4e662f6927d9e84abf3da802e4a1fc4?placeholderIfAbsent=true&apiKey=b57ec36c5a364c76a8ad0ee0e3eff0ce",
    title: "Google Ads Setup & Management",
    description: "Strategy, Setup, Optimisation & Growth",
    buttonIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bb1c1813981520cd36804b905f1bf902776d688b?placeholderIfAbsent=true&apiKey=b57ec36c5a364c76a8ad0ee0e3eff0ce",
    iconShadow: true
  },
  {
    id: 2,
    backgroundImage: "/backgrounds/services/card.svg",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8233ac73556428b04cfd3d04e009022296a2c500?placeholderIfAbsent=true&apiKey=b57ec36c5a364c76a8ad0ee0e3eff0ce",
    title: "Google Analytics Setup & Utilization",
    description: "Understand what works and where to improve",
    buttonIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bb1c1813981520cd36804b905f1bf902776d688b?placeholderIfAbsent=true&apiKey=b57ec36c5a364c76a8ad0ee0e3eff0ce",
    iconShadow: false
  },
  {
    id: 3,
    backgroundImage: "/backgrounds/services/card.svg",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2d03a6a9f8b937ba044c425b19c81e736a26f009?placeholderIfAbsent=true&apiKey=b57ec36c5a364c76a8ad0ee0e3eff0ce",
    title: "Tracking & Tag Implementation",
    description: "Advanced Tracking Without Developer Delays",
    buttonIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bb1c1813981520cd36804b905f1bf902776d688b?placeholderIfAbsent=true&apiKey=b57ec36c5a364c76a8ad0ee0e3eff0ce",
    iconShadow: true
  },
  {
    id: 4,
    backgroundImage: "/backgrounds/services/card.svg",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/334df0a2c59937773f22a69589382d49a05ce7c6?placeholderIfAbsent=true&apiKey=b57ec36c5a364c76a8ad0ee0e3eff0ce",
    title: "Looker Studio Data Dashboards",
    description: "Clear, Automated, Decision-Ready Dashboards",
    buttonIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1a8d4c654f7838a656766d79a718b31d34d3c614?placeholderIfAbsent=true&apiKey=b57ec36c5a364c76a8ad0ee0e3eff0ce",
    iconShadow: true
  }
];

export function ServicesSection() {
  return (
    <section className="flex flex-col px-16 py-28 max-md:px-5 max-md:py-24">
      <SectionHeader
        tagline="OUR Services"
        heading="How We Can Help You Grow"
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
