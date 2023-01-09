import React from "react";
import styled from "styled-components";
import {
  PrimaryButton,
  SecondaryButton,
  ThirdyButton,
} from "../Buttons/Buttons";
import ColumnContainer from "../ColumnContainer/ColumnContainer";
import { HDivLine } from "../Divider/Divider";
import { FlexWrap } from "../FlexWrap";
import IconContainer from "../IconContainer/IconContainer";
import RowContainer from "../RowContainer/RowContainer";
import { Tag } from "../TagContainer";

const Wrapper = styled(FlexWrap)`
  background-color: #fff;
  border-radius: 16px;
  gap: 32px;
  border: 1px solid white;
  cursor: pointer;
  transition: all ease-in 0.3s;
  &:hover {
    transform: scale(1.01);
    box-shadow: 8px 8px 40px 0px #0000000d;
  }
`;

const ScannerMain = () => {
  return (
    <Wrapper>
      <ColumnContainer>
        <RowContainer
          align="fs"
          gap="md"
          padding="24px"
          style={{ borderBottom: "2px solid #F8F9FA" }}
        >
          <IconContainer size="lg">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="32"
                cy="32"
                r="27"
                stroke="#0B98E8"
                stroke-width="2"
              />
              <circle
                cx="32"
                cy="32"
                r="23"
                fill="#0B98E8"
                fill-opacity="0.3"
              />
              <path
                d="M37.5996 21.6H35.9996L35.9996 33.6C35.9996 34.0418 35.6414 34.4 35.1996 34.4C34.7578 34.4 34.3996 34.0418 34.3996 33.6V21.6H32.7996V36.8C32.7996 37.2418 32.4414 37.6 31.9996 37.6C31.5578 37.6 31.1996 37.2418 31.1996 36.8L31.1996 21.6H29.5996L29.5996 30.4C29.5996 30.8418 29.2414 31.2 28.7996 31.2C28.3578 31.2 27.9996 30.8418 27.9996 30.4L27.9996 21.6H26.3996L26.3996 33.6C26.3996 34.0418 26.0414 34.4 25.5996 34.4C25.1578 34.4 24.7996 34.0418 24.7996 33.6L24.7996 21.6H23.1996C22.316 21.6 21.5996 22.3164 21.5996 23.2V40.8C21.5996 41.6837 22.316 42.4 23.1996 42.4H40.7996C41.6833 42.4 42.3996 41.6837 42.3996 40.8V23.2C42.3996 22.3164 41.6833 21.6 40.7996 21.6H39.1996V27.2C39.1996 27.6418 38.8414 28 38.3996 28C37.9578 28 37.5996 27.6418 37.5996 27.2V21.6Z"
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
            <h3>10 days low breakout</h3>
            <p>3 matches</p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <RowContainer gap="sm">
              <Tag tt="uppercase" bg="#0B98E80D" color="#0B98E8">
                nifty 100
              </Tag>
              <Tag>Daily</Tag>
            </RowContainer>
          </ColumnContainer>
        </RowContainer>
        <RowContainer justify="sb" padding="24px">
          <p>22 Nov 2022</p>
          <RowContainer width="max-content" gap="sm">
            <ThirdyButton size="md">Show Results</ThirdyButton>
            <PrimaryButton size="md">Take Live</PrimaryButton>
          </RowContainer>
        </RowContainer>
      </ColumnContainer>
    </Wrapper>
  );
};

export default ScannerMain;
