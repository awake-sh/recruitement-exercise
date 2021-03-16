import React from "react";
import SlotsRow from "./SlotsRow";

const slotsArray = ({ title, slots, updateSlot }) => {
  const renderRows = () => {
    return slots.map((row) => {
      return (
        <li className={"slots__row__el"} key={row[0]}>
          <SlotsRow
            title={row[0]}
            slots={row[1]}
            updateSlot={(day, slot) => updateSlot(day, slot)}
          />
        </li>
      );
    });
  };

  const renderTitle = () => {
    if (title) {
      return <h3 className={"slots__array__title"}>{title}</h3>;
    } else {
      return null;
    }
  };

  return (
    <div className={"slots__array"}>
      {renderTitle()}
      <ul className={"slots__row__li"}>{renderRows()}</ul>
    </div>
  );
};

export default slotsArray;
