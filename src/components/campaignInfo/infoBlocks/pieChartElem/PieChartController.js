import React, { Fragment } from "react";

const PieChartController = ({ currentKey, keys, changeKey }) => {
  const renderButtons = () => {
    return (
      <Fragment>
        {keys.map((elem, index) => {
          return (
            <button
              className={`btn btn--piechart${
                currentKey === elem ? " btn--piechart--active" : ""
              }`}
              key={elem}
              onClick={() => changeKey(elem)}
            >
              {elem}
            </button>
          );
        })}
      </Fragment>
    );
  };

  return (
    <div className={"controller controller--piechart"}>{renderButtons()}</div>
  );
};

export default PieChartController;
