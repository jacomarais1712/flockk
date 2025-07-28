import * as React from "react";
import { CheckIcon } from "./CheckIcon";

const services = [
  "Weekly or monthly performance dashboards",
  "Live spend and budget pacing reports",
  "Breakdown by campaign, location, keyword, or conversion etc.",
  "CRM & business data overlays",
  "CMO & executive friendly views with no fluff"
];

export function ServicesList() {
  return (
    <section className="flex flex-col gap-4 items-start w-full">
      <h3 className="w-full text-base font-bold tracking-wide leading-6 text-zinc-200 max-sm:text-sm">
        What we can help you with:
      </h3>
      <ul className="flex flex-col gap-4 items-start w-full">
        {services.map((service, index) => (
          <li key={index} className="flex gap-4 items-center w-full">
            <CheckIcon />
            <p className="flex-1 text-base tracking-wide leading-6 text-gray-400 max-sm:text-sm">
              {service}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
