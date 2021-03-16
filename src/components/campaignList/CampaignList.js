import React from "react";
import CampaignThumbnail from "./CampaignThumbnail";

const CampaignList = ({ list }) => {
  const renderList = () => {
    return (
      <ul className={"campaignThumbnail__li"}>
        {list.map((campaign) => {
          return (
            <li key={campaign.id.value} className={"campaignThumbnail__el"}>
              <CampaignThumbnail campaign={campaign} />
            </li>
          );
        })}
      </ul>
    );
  };

  return <div className={"campaignList"}>{renderList()}</div>;
};

export default CampaignList;
