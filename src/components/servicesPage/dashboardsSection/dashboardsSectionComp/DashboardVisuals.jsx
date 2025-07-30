import * as React from "react";

export function DashboardVisuals() {
  return (
    <div className="box-border flex relative flex-col gap-2 justify-center items-center w-[600px] max-md:px-20 max-md:py-16 max-md:w-full max-md:max-w-[500px] max-sm:px-5 max-sm:py-5">
          <img
            className="relative w-[600px] w-[325px] max-md:h-[194px] max-md:w-[280px] max-sm:w-full max-sm:h-[237px]"
            src="/services_images/dashboards.svg"
            alt="Google Analytics"
          />
    </div>
  );
}
