import React from "react";

const ArrowDown: React.FC<{
  width?: string | number;
  height?: string | number;
  color?: string;
}> = ({ width = "12", height = "7", color = "#82888F" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1.25C1 1.25 5 5.75 6 5.75C7 5.75 11 1.25 11 1.25"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default ArrowDown;
