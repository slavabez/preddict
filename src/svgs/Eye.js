import React from "react";

const Eye = props => {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32.004" cy="28" r="5.996" fill={props.color || `#000`} />
      <path
        d="M2.537,33.673a2.9,2.9,0,0,1-.008-3.353C5.921,25.507,16.793,12,32,12c15.075,0,26.022,13.487,29.459,18.311a2.9,2.9,0,0,1-.008,3.373C57.992,38.5,46.96,52,32,52,16.912,52,5.955,38.481,2.537,33.673Z"
        fill="none"
        stroke={props.color || `#000`}
        strokeWidth="2"
      />
      <circle
        cx="32.004"
        cy="28"
        r="15.996"
        fill="none"
        stroke={props.color || `#000`}
        strokeWidth="2"
      />
      <circle
        cx="32.004"
        cy="28"
        r="5.996"
        fill="none"
        stroke={props.color || `#000`}
        strokeWidth="2"
      />
    </svg>
  );
};

export default Eye;
