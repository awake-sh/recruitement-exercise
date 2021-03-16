import React, { useState } from "react";
import InfoBlock from "./InfoBlock";
import SlotsArray from "./slotsElem/SlotsArray";

const SlotsBlock = ({ slots, updateSlot }) => {
  const slotsWeek = Object.entries(slots).slice(0, 5);
  const slotsWeekend = Object.entries(slots).slice(5, 7);

  return (
    <InfoBlock title={"Slots"} className={"slotsBlock"}>
      <SlotsArray
        slots={slotsWeek}
        updateSlot={(day, slot) => updateSlot(day, slot)}
      />
      <SlotsArray
        title={"Weekend"}
        slots={slotsWeekend}
        updateSlot={(day, slot) => updateSlot(day, slot)}
      />
    </InfoBlock>
  );
};

export default SlotsBlock;
