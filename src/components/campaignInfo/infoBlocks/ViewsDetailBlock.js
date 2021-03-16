import React, { useState } from "react";
import InfoBlock from "./InfoBlock";
import { PieChart } from "react-minimal-pie-chart";
import PieChartController from "./pieChartElem/PieChartController";
import ViewsCounterList from "./pieChartElem/ViewsCounterList";
import PieChartDisplay from "./pieChartElem/PieChartDisplay";

const ViewsDetailBlock = ({ views }) => {
  const [viewsKey, setViewsKey] = useState(Object.keys(views)[0]);

  return (
    <InfoBlock className={"viewsDetailBlock"} title={"Views Detail"}>
      <PieChartController
        currentKey={viewsKey}
        keys={Object.keys(views)}
        changeKey={(key) => setViewsKey(key)}
      />
      <PieChartDisplay counts={views[viewsKey].counts} />
      <ViewsCounterList counts={views[viewsKey].counts} />
    </InfoBlock>
  );
};

export default ViewsDetailBlock;
