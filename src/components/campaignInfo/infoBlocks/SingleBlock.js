import React from "react";
import InfoBlock from "./InfoBlock";

// eslint-disable-next-line react/prop-types
const SingleBlock = ({ title, value }) => {
  return (
    <InfoBlock className={"singleBlock"} title={title}>
      <p className="singleInfo">{value}</p>
    </InfoBlock>
  );
};

export default SingleBlock;
