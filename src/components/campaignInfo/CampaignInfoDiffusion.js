import React from "react";
import CampaignInfo from "./CampaignInfo";
import SingleBlock from "./infoBlocks/SingleBlock";
import SlotsBlock from "./infoBlocks/SlotsBlock";

const CampaignInfoDiffusion = ({ diffusion, updateSlot }) => {
  const dateFormatting = (date) => {
    const dateFormatted = new Date(date);
    let day = dateFormatted.getDay();
    if (day < 10) day = `0${day}`;
    let month = dateFormatted.getMonth();
    if (month < 10) month = `0${month}`;
    console.log(day);
    return `${day}/${month}/${dateFormatted.getFullYear()}`;
  };

  return (
    <CampaignInfo title={"Diffusion"} classname={"diffusion"}>
      <SingleBlock
        title={"From"}
        value={dateFormatting(diffusion.period.from)}
      />
      <SingleBlock title={"To"} value={dateFormatting(diffusion.period.to)} />
      <SlotsBlock
        slots={diffusion.slots.slots}
        updateSlot={(day, slot) => updateSlot(day, slot)}
      />
    </CampaignInfo>
  );
};

export default CampaignInfoDiffusion;
