import React from "react";
import IconContainer from "../IconContainer/IconContainer";

const HelpButton = () => {
  return (
    <IconContainer size="sm">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="9"
          fill="#F8F9FA"
          stroke="#FFC849"
          stroke-width="2"
        />
        <circle cx="12" cy="12" r="7" fill="#FFC849" fill-opacity="0.3" />
        <rect x="11" y="10" width="2" height="7" rx="1" fill="#FFC849" />
        <rect x="11" y="7" width="2" height="2" rx="1" fill="#FFC849" />
      </svg>
    </IconContainer>
  );
};

export default HelpButton;
