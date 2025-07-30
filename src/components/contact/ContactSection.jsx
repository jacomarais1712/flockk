import React from 'react';
import { ContactHero } from './contactComp/ContactHero';
import { ContactForm } from './contactComp/ContactForm';
import { ContactInfo } from './contactComp/ContactInfo';
import { BackgroundBlur } from '../reuse/comp/BackgroundBlur';

function ContactSection() {
  const BgStyle2 = 'absolute left-[-26vw] bottom-[-244vh] w-[50vw] h-[50vw] rounded-full opacity-40 z-1 aspect-square'
  const contactInfoData = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/48c2153dffe66bd9075b661007d18815e124a893?placeholderIfAbsent=true&apiKey=917e8cc76bd54a7d91c30bd7f061bdf9",
      title: "Email",
      content: "info@flockkk.com",
      isLink: false,
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/14ec49cd69a58f4172a011b4078a94c609d56045?placeholderIfAbsent=true&apiKey=917e8cc76bd54a7d91c30bd7f061bdf9",
      title: "Phone",
      content: "+353 (87) 168 0123",
      isLink: false
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a54e2a05bdf168d60e811cc0ad7c4b3f79e88736?placeholderIfAbsent=true&apiKey=917e8cc76bd54a7d91c30bd7f061bdf9",
      title: "Location",
      content: "Dublin, Ireland",
      isLink: true,
      href: {
        link: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Greystones, Ireland")}`,
        target: "_blank"
      }
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a4f48aa6a21e2d8873158826033fc83664aed8bb?placeholderIfAbsent=true&apiKey=917e8cc76bd54a7d91c30bd7f061bdf9",
      title: "Connect",
      content: "Linkedin",
      isLink: true,
      href: {
        link: "https://za.linkedin.com",
        target: "_blank"
      },
    }
  ];

  return (
    <main className="px-16 py-20 max-md:px-5">
      <section id='contactForm' className="flex relative flex-col justify-center p-10 w-full rounded-xl min-h-[570px] max-md:px-5 max-md:max-w-full">
        <img
          src="/backgrounds/contactform/contactForm.svg"
          alt="Contact background"
          className="object-cover absolute inset-0 size-full rounded-xl"
        />
        <div className="flex relative flex-wrap gap-10 items-start w-full max-md:max-w-full">
          <ContactHero />
          <ContactForm />
        </div>
      </section>
      <section className="flex flex-wrap gap-10 mt-20 w-full max-md:mt-10 max-md:max-w-full">
        {contactInfoData.map((info, index) => (
          <ContactInfo
            key={index}
            icon={info.icon}
            title={info.title}
            content={info.content}
            isLink={info.isLink}
            href={info.href}
          />
        ))}
      </section>
      <BackgroundBlur backgroundStyle={BgStyle2}/>
    </main>
  );
}

export default ContactSection;
