import React from "react";
import { ReactComponent as Close } from "../../../../assets/icons/close.svg";

const Target = ({ value, deleteTarget }) => {
  return (
    <div className={"target"}>
      <p className={"target__value"}>{value}</p>
      <button
        className={"btn btn--deleteValue"}
        onClick={() => deleteTarget(value)}
      >
        <Close />
      </button>
    </div>
  );
};

export default Target;
