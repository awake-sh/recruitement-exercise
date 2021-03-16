import React from "react";

const ViewsCounter = ({ plateform, value, percentage }) => {
  return (
    <div className={"views__counter"}>
      <p className={"counter__plateform"}>{plateform}</p>
      <p className={"counter__value"}>{value} views</p>
      <p className={"counter__percentage"}>{Math.round(percentage)}%</p>
    </div>
  );
};

export default ViewsCounter;
