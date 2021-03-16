import React from "react";
import CampaignInfoSection from "./CampaignInfo";
import IdentifiersBlock from "./infoBlocks/IdentifiersBlock";
import SingleBlock from "./infoBlocks/SingleBlock";
import TargetsBlock from "./infoBlocks/TargetsBlock";

const CampaignInfoGeneral = ({ campaign, deleteTarget, addTarget }) => {
  const getCampaignBudget = () => {
    return `${campaign.details.budget.value} ${campaign.details.budget.currency}`;
  };

  return (
    <CampaignInfoSection title={"General"} classname={"general"}>
      <IdentifiersBlock>
        <h4 className={"campaign__name"}>{campaign.details.name}</h4>
        <p className={"campaign__id"}>{campaign.id.value}</p>
        <div className={"campaign__info"}>
          <SingleBlock title={"Status"} value={campaign.details.status} />
          <SingleBlock title={"Source"} value={campaign.details.source} />
          <SingleBlock title={"Budget"} value={getCampaignBudget()} />
        </div>
      </IdentifiersBlock>
      <TargetsBlock
        targets={campaign.targets}
        deleteTarget={(value) => deleteTarget(value)}
        addTarget={(value) => addTarget(value)}
      />
    </CampaignInfoSection>
  );
};

export default CampaignInfoGeneral;
