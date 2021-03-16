import React, { Fragment } from "react";
import ViewsCounter from "./ViewsCounter";

const ViewsCounterList = ({ counts }) => {
  const viewsTotal = Object.values(counts).reduce((accumulator, count) => {
    return (accumulator += count);
  });

  const getPercentage = (views) => {
    return (views / viewsTotal) * 100;
  };

  const renderCounters = () => {
    return (
      <Fragment>
        {Object.entries(counts).map((elem) => {
          return (
            <li
              key={elem[0]}
              className={`views__counter__el views__counter__el--${elem[0].toLowerCase()}`}
            >
              <ViewsCounter
                plateform={elem[0]}
                value={elem[1]}
                percentage={getPercentage(elem[1])}
              />
            </li>
          );
        })}
      </Fragment>
    );
  };

  return <ul className={"views__counter__li"}>{renderCounters()}</ul>;
};

export default ViewsCounterList;
