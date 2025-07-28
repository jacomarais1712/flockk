import * as React from "react";
import MissionContent from "./missionComp/MissionContent";
import MissionChecklist from "./missionComp/MissionChecklist";
import MissionButton from "./missionComp/MissionButton";

function MissionSection() {
  return (
    <section className="flex relative flex-col gap-20 items-start px-16 py-28 w-full bg-black">
      <div className="flex relative gap-24 items-center self-stretch max-md:flex-col max-md:gap-16 max-sm:gap-10">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/295a67bc57d5d2f56a90701fb423806ac765efad?width=1114"
          alt=""
          className="relative rounded-lg aspect-square h-[557px] w-[557px]"
        />
        <div className="flex relative flex-col gap-10 items-start flex-[1_0_0] max-md:gap-8 max-sm:gap-6">
          <MissionContent />
          <MissionChecklist />
          <MissionButton />
        </div>
      </div>
    </section>
  );
}

export default MissionSection;
