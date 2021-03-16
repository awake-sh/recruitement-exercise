import React from "react";

// eslint-disable-next-line react/prop-types
const CampaignInfoSection = ({ children, classname, title }) => {
  return (
    <section className={`campaign__info campaign__info--${classname}`}>
      <h2 className={"title title--campaignInfo"}>{title}</h2>
      <div className={"info__content"}>{children}</div>
    </section>
  );
};

export default CampaignInfoSection;
