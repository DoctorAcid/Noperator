import React from "react";
import styled from "styled-components";
import { SecondaryButton, ThirdyButton } from "../Buttons/Buttons";
import ColumnContainer from "../ColumnContainer/ColumnContainer";
import IconContainer from "../IconContainer/IconContainer";
import RowContainer from "../RowContainer/RowContainer";

interface Props {
  titleName: string;
  filterOff?: boolean;
  viewallOff?: boolean;
}

const H3 = styled.h3`
  text-transform: uppercase;
  width: fit-content;
  @media (max-width: 1200px) {
    width: min-content;
  }
`;

const Title = ({ titleName, filterOff, viewallOff }: Props) => {
  return (
    <RowContainer justify="sb">
      <RowContainer gap="md">
        <H3>{titleName}</H3>
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
      </RowContainer>
      <RowContainer width="fit-content" gap="md">
        {!filterOff ? (
          <SecondaryButton size="md" width="max-content">
            Filters
          </SecondaryButton>
        ) : null}
        {!viewallOff ? (
          <ThirdyButton size="md" width="max-content">
            View all
          </ThirdyButton>
        ) : null}
      </RowContainer>
    </RowContainer>
  );
};

export default Title;
