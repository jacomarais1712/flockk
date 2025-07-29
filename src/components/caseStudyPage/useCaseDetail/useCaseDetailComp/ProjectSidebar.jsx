import * as React from "react";
import { Detail } from "./Detail";

const projectDetailExample = {
  service: "Paid Media &amp; Analytics",
  clientName: "XYZ Ltd.",
  industry: "B2B SaaS",
  location: "London, United Kingdom"
}

export function ProjectSidebar({ projectDetail }) {
  const serviceIcon = `<svg id="4066:2276" layer-name="Union" width="18" height="25" viewBox="0 0 18 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="sidebar-icon" style="width: 24px; height: 24px; position: relative"> <path d="M5.91895 14.9014H11.2812L16.8926 22.915L15.5625 24.5H10.5869L4.79883 16.2344H-0.00195312V12.5088L10.0732 0.5H18.002L5.91895 14.9014ZM15.3008 8.51562C16.1798 8.51568 16.8926 9.2284 16.8926 10.1074C16.8925 10.9864 16.1797 11.6992 15.3008 11.6992C14.4218 11.6992 13.7091 10.9864 13.709 10.1074C13.709 9.22837 14.4217 8.51562 15.3008 8.51562Z" fill="#23F399"></path> </svg>`;

  const clientIcon = `<svg id="4066:2285" layer-name="Team-Line--Streamline-Remix" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="sidebar-icon" style="width: 24px; height: 24px; position: relative"> <path d="M12 11.5C14.7614 11.5 17 13.7386 17 16.5V22.5H15V16.5C15 14.9023 13.7511 13.5963 12.1763 13.5051L12 13.5C10.4023 13.5 9.09634 14.7489 9.00509 16.3237L9 16.5V22.5H7V16.5C7 13.7386 9.23858 11.5 12 11.5ZM5.5 14.5C5.77885 14.5 6.05009 14.5326 6.3101 14.5942C6.14202 15.094 6.03873 15.622 6.00896 16.1693L6 16.5L6.0007 16.5856C5.88757 16.5456 5.76821 16.5187 5.64446 16.5069L5.5 16.5C4.7203 16.5 4.07955 17.0949 4.00687 17.8555L4 18V22.5H2V18C2 16.067 3.567 14.5 5.5 14.5ZM18.5 14.5C20.433 14.5 22 16.067 22 18V22.5H20V18C20 17.2203 19.4051 16.5796 18.6445 16.5069L18.5 16.5C18.3248 16.5 18.1566 16.53 18.0003 16.5852L18 16.5C18 15.8343 17.8916 15.194 17.6915 14.5956C17.9499 14.5326 18.2211 14.5 18.5 14.5ZM5.5 8.5C6.88071 8.5 8 9.61929 8 11C8 12.3807 6.88071 13.5 5.5 13.5C4.11929 13.5 3 12.3807 3 11C3 9.61929 4.11929 8.5 5.5 8.5ZM18.5 8.5C19.8807 8.5 21 9.61929 21 11C21 12.3807 19.8807 13.5 18.5 13.5C17.1193 13.5 16 12.3807 16 11C16 9.61929 17.1193 8.5 18.5 8.5ZM5.5 10.5C5.22386 10.5 5 10.7239 5 11C5 11.2761 5.22386 11.5 5.5 11.5C5.77614 11.5 6 11.2761 6 11C6 10.7239 5.77614 10.5 5.5 10.5ZM18.5 10.5C18.2239 10.5 18 10.7239 18 11C18 11.2761 18.2239 11.5 18.5 11.5C18.7761 11.5 19 11.2761 19 11C19 10.7239 18.7761 10.5 18.5 10.5ZM12 2.5C14.2091 2.5 16 4.29086 16 6.5C16 8.70914 14.2091 10.5 12 10.5C9.79086 10.5 8 8.70914 8 6.5C8 4.29086 9.79086 2.5 12 2.5ZM12 4.5C10.8954 4.5 10 5.39543 10 6.5C10 7.60457 10.8954 8.5 12 8.5C13.1046 8.5 14 7.60457 14 6.5C14 5.39543 13.1046 4.5 12 4.5Z" fill="#23F399"></path> </svg>`;

  const industryIcon = `<svg id="4066:2292" layer-name="Building-3-Line--Streamline-Remix" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="sidebar-icon" style="width: 24px; height: 24px; position: relative"> <path d="M10 10.6111V1.5L21 7.5V21.5H3V7.5L10 10.6111ZM12 4.86908V13.6886L5 10.5775V19.5H19V8.68727L12 4.86908Z" fill="#23F399"></path> </svg>`;

  const locationIcon = `<svg id="4066:2299" layer-name="Map-Pin-2-Line--Streamline-Remix" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="sidebar-icon" style="width: 24px; height: 24px; position: relative"> <g clip-path="url(#clip0_4066_2299)"> <path d="M12 24.2279L5.63604 17.864C2.12132 14.3492 2.12132 8.65076 5.63604 5.13604C9.15076 1.62132 14.8492 1.62132 18.364 5.13604C21.8787 8.65076 21.8787 14.3492 18.364 17.864L12 24.2279ZM16.9497 16.4497C19.6834 13.7161 19.6834 9.28392 16.9497 6.55025C14.2161 3.81658 9.78392 3.81658 7.05025 6.55025C4.31658 9.28392 4.31658 13.7161 7.05025 16.4497L12 21.3995L16.9497 16.4497ZM12 13.5C10.8954 13.5 10 12.6046 10 11.5C10 10.3954 10.8954 9.5 12 9.5C13.1046 9.5 14 10.3954 14 11.5C14 12.6046 13.1046 13.5 12 13.5Z" fill="#23F399"></path> </g> <defs> <clipPath id="clip0_4066_2299"> <rect width="24" height="24" fill="white" transform="translate(0 0.5)"></rect> </clipPath> </defs> </svg>`;

  return (
    <aside className="flex relative flex-col gap-5 items-start p-6 rounded-lg border-solid backdrop-blur-[20px] border-[1.5px] border-emerald-200 border-opacity-30 w-[421px] max-md:w-full max-sm:gap-4 max-sm:p-4">
      <header>
        <h2 className="relative self-stretch text-3xl font-medium tracking-normal leading-9 text-zinc-200 max-sm:text-2xl">
          About the Project
        </h2>
      </header>

      <div className="relative bg-white bg-opacity-10 h-[1.5px] w-full max-w-[373px] max-md:max-w-full max-sm:max-w-full" />

      <div className="flex relative flex-col gap-6 items-start self-stretch max-sm:gap-4">
        <Detail
          icon={serviceIcon}
          title="Service"
          description={projectDetail.service}
        />

        <Detail
          icon={clientIcon}
          title="Client"
          description={projectDetail.clientName}
        />

        <Detail
          icon={industryIcon}
          title="Industry"
          description={projectDetail.industry}
        />

        <Detail
          icon={locationIcon}
          title="Location"
          description={projectDetail.location}
        />
      </div>
    </aside>
  );
}
