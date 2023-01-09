import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { OutlineButton } from "../Buttons/Buttons";
import ColumnContainer from "../ColumnContainer/ColumnContainer";
import IconContainer from "../IconContainer/IconContainer";

interface Props {
  children: React.ReactElement;
}

const Wrapper = styled(ColumnContainer)`
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
`;

const H3 = styled.h3`
  text-transform: uppercase;
  text-align: center;
  width: 280px;
  margin-bottom: 4px;
`;

const NoContent = ({ children }: Props) => {
  const location = useLocation();
  const [Location, setUseLocation] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    const currentLocation = String(location.pathname);
    getLocation(currentLocation);
  }, [location]);

  function getLocation(currentLocation: string) {
    if (currentLocation === "/strategies") {
      setUseLocation("Strategies");
      setColor("#2DAF80");
    }
    if (currentLocation === "/technicals") {
      setUseLocation("technicals");
      setColor("#E95671");
    }
    if (currentLocation === "/scanners") {
      setUseLocation("scanners");
      setColor("#0B98E8");
    }
  }

  return (
    <Wrapper gap="sm" padding="32px">
      {children}
      <H3>no {Location} available to show</H3>
      <OutlineButton
        size="md"
        color={color}
        padding="16px 20px 16px 16px"
        borderRadius="14px"
      >
        <IconContainer size="sm">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 6.5C14 5.39543 13.1046 4.5 12 4.5C10.8954 4.5 10 5.39543 10 6.5V10.5L6 10.5C4.89543 10.5 4 11.3954 4 12.5C4 13.6046 4.89543 14.5 6 14.5H10V18.5C10 19.6046 10.8954 20.5 12 20.5C13.1046 20.5 14 19.6046 14 18.5V14.5H18C19.1046 14.5 20 13.6046 20 12.5C20 11.3954 19.1046 10.5 18 10.5L14 10.5V6.5Z"
              fill={color}
            />
          </svg>
        </IconContainer>
        create new {Location}
      </OutlineButton>
    </Wrapper>
  );
};

export default NoContent;
