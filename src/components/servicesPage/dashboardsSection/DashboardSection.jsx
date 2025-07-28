import * as React from "react";
import { DashboardHero } from "./dashboardsSectionComp/DashboardHero";
import { DashboardVisuals } from "./dashboardsSectionComp/DashboardVisuals";

export default function Layout209() {
  return (
    <main className="box-border flex flex-col gap-20 items-center px-16 py-28 mx-auto my-0 w-full max-w-[1440px] max-md:gap-16 max-md:px-10 max-md:py-20 max-sm:gap-10 max-sm:px-5 max-sm:py-16">
      <div className="flex gap-20 items-center w-full max-md:flex-col max-md:gap-16 max-sm:gap-10">
        <DashboardHero />
        <DashboardVisuals />
      </div>
    </main>
  );
}
