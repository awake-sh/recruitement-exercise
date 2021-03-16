import React, { Fragment, useEffect, useState } from "react";
import BtnBack from "../../btn/BtnBack";
import MainPageLayout from "../mainPageLayout/MainPageLayout";
import CampaignInfoGeneral from "../../campaignInfo/CampaignInfoGeneral";
import CampaignInfoStats from "../../campaignInfo/CampaignInfoStats";
import CampaignInfoDiffusion from "../../campaignInfo/CampaignInfoDiffusion";

const CampaignDetails = () => {
  const [campaign, setCampaign] = useState({});

  const APIURL =
    "https://proxistore-campaign-qof7m4cq5q-ew.a.run.app/campaigns/";

  useEffect(() => {
    if (Object.keys(campaign).length === 0 && campaign.constructor === Object) {
      let urlParams = new URLSearchParams(window.location.search);
      fetchCampaign(urlParams.get("id"));
    }
  }, [campaign]);

  const fetchCampaign = (campaignID) => {
    fetch(`${APIURL}${campaignID}`)
      .then((r) => r.json())
      .then((result) => {
        setCampaign(result);
      });
  };

  const updateSlot = (day, time) => {
    let newCampaign = { ...campaign };
    newCampaign.diffusion.slots.slots[day][time] = !newCampaign.diffusion.slots
      .slots[day][time];
    setCampaign(newCampaign);
  };

  const deleteTarget = (value) => {
    let newCampaign = { ...campaign };
    newCampaign.targets.segments = newCampaign.targets.segments.filter(
      (segment) => {
        return segment["value"] !== value;
      }
    );
    setCampaign(newCampaign);
  };

  const addTarget = (value) => {
    let newCampaign = { ...campaign };
    newCampaign.targets.segments.push({ value: value });
    setCampaign(newCampaign);
  };

  const renderCampaignDetails = () => {
    if (Object.keys(campaign).length === 0 && campaign.constructor === Object) {
      return <p>Empty</p>;
    } else {
      return (
        <Fragment>
          <CampaignInfoGeneral
            campaign={campaign}
            deleteTarget={(value) => deleteTarget(value)}
            addTarget={(value) => addTarget(value)}
          />
          <CampaignInfoStats
            views={campaign.statistics.views}
            clicks={campaign.statistics.clicks}
          />
          <CampaignInfoDiffusion
            updateSlot={(day, time) => updateSlot(day, time)}
            diffusion={campaign.diffusion}
          />
        </Fragment>
      );
    }
  };

  return (
    <MainPageLayout>
      <div className={"campaignDetails"}>
        <BtnBack />

        {renderCampaignDetails()}
      </div>
    </MainPageLayout>
  );
};

export default CampaignDetails;
