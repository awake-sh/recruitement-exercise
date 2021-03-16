import React from "react";
import { ReactComponent as Dots } from "../../assets/icons/dots.svg";

const ThumbnailOptions = () => {
  const toggleOptions = (e) => {
    e.stopPropagation();
    console.log("CLick");
  };

  return (
    <div className={"btn btn--options thumbnail__options"}>
      <button className={"btn btn--options"} onClick={toggleOptions}>
        <Dots />
      </button>
    </div>
  );
};

export default ThumbnailOptions;
