import React from "react";
import { ReactComponent as Checked } from "../../../../assets/icons/check.svg";

const Slot = ({ timeRange, value, updateSlot }) => {
  return (
    <div
      className={`slot ${value ? " slot--checked" : ""}`}
      onClick={() => updateSlot(timeRange)}
    >
      <span className={"slot__state"}>
        <Checked />
      </span>
    </div>
  );
};

export default Slot;
