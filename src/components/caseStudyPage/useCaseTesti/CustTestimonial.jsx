"use client";
import React from 'react';
import { CustTestiCard } from './useCaseTestiComp/CustTestiCard.jsx';

const testiDataExample = {
  name: "Ava Leonard",
  title: "Marketing, XYZ Ltd.",
  logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/f1fd1be130265254b55f4fae608cb591aa3ccf5f?placeholderIfAbsent=true&apiKey=917e8cc76bd54a7d91c30bd7f061bdf9",
  quote: "Flockk transformed our digital presence and exceeded our expectations. Their expertise and dedication were evident from day one.",
  avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/537e1dc5acbb7dd5fb0656798c32d45d02b664e1?placeholderIfAbsent=true&apiKey=917e8cc76bd54a7d91c30bd7f061bdf9",
}

export const CustTestimonial = ({ testiData }) => {
  return (
    <section className="flex flex-col justify-center px-16 py-20 max-md:px-5">
      <div className="w-full max-md:max-w-full">
        <div className="flex overflow-hidden items-center w-full max-md:max-w-full">
          <CustTestiCard
            variant="dark"
            logo={testiData.logo}
            logoAlt="Company logo"
            quote={testiData.quote}
            avatarSrc={testiData.avatarSrc}
            avatarAlt="customer"
            name={testiData.name}
            title={testiData.title}
            className="self-stretch"
          />
        </div>
      </div>
    </section>
  );
};

export default CustTestimonial;
