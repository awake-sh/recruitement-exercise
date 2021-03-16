import React from "react";
import InfoBlock from "./InfoBlock";

// eslint-disable-next-line react/prop-types
const IdentifiersBlock = ({ children }) => {
  return (
    <InfoBlock className={"identifierBlock"} title={"Identifiers"}>
      {children}
    </InfoBlock>
  );
};

export default IdentifiersBlock;
