import React from "react";
import styled from "styled-components";
import ColumnContainer from "../ColumnContainer/ColumnContainer";
import IconContainer from "../IconContainer/IconContainer";
import RowContainer from "../RowContainer/RowContainer";
import { Tag } from "../TagContainer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-width: 244px;
  padding: 24px;
  border-radius: 16px;
  background: #fff;
  border: 1px solid white;
  cursor: pointer;
  transition: border ease-in 0.3s;
  &:hover {
    border: 1px solid #f8f9fa;
  }
`;

const P = styled.p`
  color: #6c757d;
  text-transform: capitalize;
`;

const PBlue = styled.p`
  color: #0b98e8;
  text-transform: capitalize;
`;

const Scanner = () => {
  return (
    <Wrapper>
      <IconContainer size="lg">
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="32" cy="32" r="27" stroke="#0B98E8" stroke-width="2" />
          <circle cx="32" cy="32" r="23" fill="#0B98E8" fill-opacity="0.3" />
          <path
            d="M37.6001 21.6H36.0001L36.0001 33.6C36.0001 34.0418 35.6419 34.4 35.2001 34.4C34.7583 34.4 34.4001 34.0418 34.4001 33.6V21.6H32.8001V36.8C32.8001 37.2418 32.4419 37.6 32.0001 37.6C31.5583 37.6 31.2001 37.2418 31.2001 36.8L31.2001 21.6H29.6001L29.6001 30.4C29.6001 30.8418 29.2419 31.2 28.8001 31.2C28.3583 31.2 28.0001 30.8418 28.0001 30.4L28.0001 21.6H26.4001L26.4001 33.6C26.4001 34.0418 26.0419 34.4 25.6001 34.4C25.1583 34.4 24.8001 34.0418 24.8001 33.6L24.8001 21.6H23.2001C22.3164 21.6 21.6001 22.3163 21.6001 23.2V40.8C21.6001 41.6836 22.3164 42.4 23.2001 42.4H40.8001C41.6838 42.4 42.4001 41.6836 42.4001 40.8V23.2C42.4001 22.3163 41.6838 21.6 40.8001 21.6H39.2001V27.2C39.2001 27.6418 38.8419 28 38.4001 28C37.9583 28 37.6001 27.6418 37.6001 27.2V21.6Z"
            fill="#0B98E8"
          />
          <rect
            x="16"
            y="31.2"
            width="32"
            height="1.6"
            rx="0.8"
            fill="#0B98E8"
          />
        </svg>
      </IconContainer>
      <ColumnContainer gap="sm">
        <P>10 days low breakout</P>
        <PBlue>3 matches</PBlue>
      </ColumnContainer>
      <p>22 Nov 2022</p>
      <RowContainer gap="sm">
        <Tag tt="uppercase" bg="#0B98E80D" color="#0B98E8">
          nifty 100
        </Tag>
        <Tag>Daily</Tag>
      </RowContainer>
    </Wrapper>
  );
};

export default Scanner;
