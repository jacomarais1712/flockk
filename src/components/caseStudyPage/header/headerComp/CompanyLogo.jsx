"use client";
import React from "react";

function CompanyLogo({ companyLogo }) {
  return (
    <div className="flex scale-75 flex-row justify-center absolute w-full object-contain">
      <img src={`/casestudy/companyLogos/${companyLogo}`}/>
    </div>
  );
}

export default CompanyLogo;
