import React from "react";

const Search = props => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 12">
      <g strokeWidth="1" stroke={props.color || "fff"} fill="none">
        <path d="M11.29 11.71l-4-4" />
        <circle cx="5" cy="5" r="4" />
      </g>
    </svg>
  );
};

export default Search;
