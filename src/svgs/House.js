import React from "react";

const House = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="64px"
      height="64px"
      viewBox="0 0 64 64"
    >
      <g>
        <g strokeWidth="2">
          <polyline
            data-cap="butt"
            data-color="color-2"
            points="2 28 32 4 62 28"
            fill="none"
            stroke={props.color || `#000`}
          />
          <polyline
            data-cap="butt"
            points="26 60 26 43 38 43 38 60"
            fill="none"
            stroke={props.color || `#000`}
            
          />
          <polyline
            points="10 30 10 60 54 60 54 30"
            fill="none"
            stroke={props.color || `#000`}
            
          />
          <rect
            x="27"
            y="25"
            width="10"
            height="10"
            fill="none"
            stroke={props.color || `#000`}
            
          />
          <line
            data-cap="butt"
            data-color="color-2"
            x1="14"
            y1="18.4"
            x2="14"
            y2="8"
            fill="none"
            stroke={props.color || `#000`}
            
          />
        </g>
      </g>
    </svg>
  );
};

export default House;
