import * as React from "react";
import ChecklistItem from "./ChecklistItem";

function MissionChecklist() {
  const checklistItems = [
    "Clarity over chaos",
    "Execution backed by data",
    "Real relationships, not retainer traps",
    "We scale what works, and fix what doesn't"
  ];

  return (
    <ul className="flex relative flex-col gap-5 items-start self-stretch px-0 py-2 max-sm:gap-4">
      {checklistItems.map((item, index) => (
        <ChecklistItem key={index}>
          {item}
        </ChecklistItem>
      ))}
    </ul>
  );
}

export default MissionChecklist;
