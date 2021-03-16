import React, { Fragment, useState } from "react";
import { ReactComponent as Arrow } from "../../../assets/icons/arrow-down-sign-to-navigate.svg";

const SortingParamSelector = ({ title, paramList }) => {
  const [params, setParams] = useState(() => {
    let list = {};
    paramList.forEach((element) => {
      list[`${element}`] = true;
    });
    return list;
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleCheckbox = (key) => {
    let newParams = { ...params };
    newParams[key] = !newParams[key];
    setParams(newParams);
  };

  const resetParams = () => {
    let newParams = { ...params };
    Object.entries(newParams).forEach((param) => {
      newParams[`${param[0]}`] = true;
    });
    setParams({ ...newParams });
  };

  const renderTitle = () => {
    if (title) return <span className={"paramSelector__text"}>{title}</span>;
    else {
      return <span className={"paramSelector__text"}>Param Selector</span>;
    }
  };

  const renderParamList = () => {
    if (Object.keys(params).length === 0 && params.constructor === Object) {
      return <p className={"paramSelector__empty"}>No param</p>;
    } else {
      return (
        <Fragment>
          <ul className={"param__li"}>
            {Object.entries(params).map((param) => {
              return (
                <li
                  key={param}
                  className={"param__el"}
                  onClick={() => toggleCheckbox(param[0])}
                >
                  <div
                    className={`param__checkbox${
                      param[1] ? " param__checkbox--checked" : ""
                    }`}
                  >
                    x
                  </div>
                  <p className={"param__label"}>{param[0]}</p>
                </li>
              );
            })}
          </ul>
          <span className={"paramSelector__reset"} onClick={resetParams}>
            Reset
          </span>
        </Fragment>
      );
    }
  };

  const renderParamDropdown = () => {
    if (dropdownOpen) {
      return (
        <div
          className={"paramSelector__dropdown"}
          onClick={(e) => e.stopPropagation()}
        >
          {renderParamList()}
        </div>
      );
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div
      className={"controller controller--paramSelector"}
      onClick={toggleDropdown}
    >
      {renderTitle()}
      <span
        className={`controller__svg${
          dropdownOpen ? " controller__svg--active" : ""
        }`}
      >
        <Arrow />
      </span>
      {renderParamDropdown()}
    </div>
  );
};

export default SortingParamSelector;
