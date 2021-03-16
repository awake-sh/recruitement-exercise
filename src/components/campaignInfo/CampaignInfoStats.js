import React from "react";
import CampaignInfoSection from "./CampaignInfo";
import SingleBlock from "./infoBlocks/SingleBlock";
import ViewsDetailBlock from "./infoBlocks/ViewsDetailBlock";

const CampaignInfoStats = ({ views, clicks }) => {
  const getViewsTotal = (counts) => {
    return counts.reduce((a, val) => {
      return a + val;
    });
  };

  return (
    <CampaignInfoSection title={"Stats"} classname={"stats"}>
      <SingleBlock
        title={"Expected views"}
        value={getViewsTotal(Object.values(views.expected.counts))}
      />
      <SingleBlock
        title={"Real views"}
        value={getViewsTotal(Object.values(views.effective.counts))}
      />
      <SingleBlock title={"Unique visitors"} value={clicks.unique} />
      <SingleBlock title={"Visitor total"} value={clicks.count} />
      <ViewsDetailBlock views={views} />
    </CampaignInfoSection>
  );
};

export default CampaignInfoStats;
