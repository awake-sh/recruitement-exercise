import React from "react";
import Slot from "./Slot";

const SlotsRow = ({ title, slots, updateSlot }) => {
  const renderSlots = () => {
    return Object.entries(slots).map((brick) => {
      return (
        <li key={brick[0]} className={"row__brick__el"}>
          <Slot
            timeRange={brick[0]}
            value={brick[1]}
            updateSlot={(slot) => updateSlot(title, slot)}
          />
        </li>
      );
    });
  };

  return (
    <div className={"slots__row"}>
      <h4 className={"row__title"}>{title}</h4>

      <ul className={"row__brick__li"}>{renderSlots()}</ul>
    </div>
  );
};

export default SlotsRow;
