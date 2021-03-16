import React from "react";
import { Link } from "react-router-dom";
import ThumbnailOptions from "./ThumbnailOptions";

const CampaignThumbnail = ({ campaign }) => {
  const LINKURL = "/campaign-details?id=";

  const getStatusClassname = () => {
    let classname = "campaign__status";
    if (campaign.details.status) {
      classname += ` ${classname}--${campaign.details.status.toLowerCase()}`;
    }
    return classname;
  };

  const getStatusCapitilized = () => {
    let status = campaign.details.status;
    status = status.toLowerCase();
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <Link to={`${LINKURL}${campaign.id.value}`} className={"campaignThumbnail"}>
      <p className={getStatusClassname()}>{getStatusCapitilized()}</p>
      <h3 className={"campaign__name"}>{campaign.details.name}</h3>
      <p className={"campaign__id"}>{campaign.id.value}</p>
      <ThumbnailOptions />
    </Link>
  );
};

export default CampaignThumbnail;
