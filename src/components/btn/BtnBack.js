import React from "react";
import { useHistory } from "react-router-dom";
import { ReactComponent as Arrow } from "../../assets/icons/arrow-down-sign-to-navigate.svg";

const BtnBack = () => {
  let history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <button className={"btn btn--back"} onClick={goBack}>
      <span className={"btn__svg"}>
        <Arrow />
      </span>
      <p className={"btn__message"}>Go Back</p>
    </button>
  );
};

export default BtnBack;
