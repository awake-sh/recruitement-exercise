import React, { createRef } from "react";
import { ReactComponent as SearchIcon } from "../../../assets/icons/search.svg";

const Searchbar = ({ searchName }) => {
  const searchDelay = 500;
  var searchTimer;
  let inputRef = createRef();

  const onChange = (e) => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => searchName(e.target.value), searchDelay);
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div
      className={"controller controller--searchbar"}
      onClick={() => focusInput()}
    >
      <span className={"controller__svg"}>
        <SearchIcon />
      </span>
      <input
        type="test"
        placeholder="Search"
        onChange={onChange}
        ref={inputRef}
        size="14"
      />
    </div>
  );
};

export default Searchbar;
