import React from "react";
import styled from "styled-components";
import { ThirdyButton } from "../../components/Buttons/Buttons";
import ColumnContainer from "../../components/ColumnContainer/ColumnContainer";
import IconContainer from "../../components/IconContainer/IconContainer";
import LBar from "../../components/LBar/LBar";
import RowContainer from "../../components/RowContainer/RowContainer";

const Wrapper = styled.div`
  flex: 59%;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 16px;
`;

const ContentWrap = styled(ColumnContainer)`
  padding: 12px 0;
`;

const RecantActivity = () => {
  return (
    <Wrapper>
      <RowContainer padding="24px" justify="sb">
        <h3>Deployed</h3>
        <ThirdyButton size="sm" width="80px">
          View all
        </ThirdyButton>
      </RowContainer>
      <RowContainer
        padding="4px 24px"
        justify="sb"
        style={{ backgroundColor: "#F8F9FA" }}
      >
        <p>Strategy</p>
        <p>Compeltion</p>
      </RowContainer>

      <ContentWrap>
        <RowContainer justify="sb" padding="12px 24px">
          <RowContainer gap="md">
            <IconContainer>
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
                  stroke="#2DAF80"
                  stroke-width="2"
                />
                <circle
                  cx="32"
                  cy="32"
                  r="23"
                  fill="#2DAF80"
                  fill-opacity="0.3"
                />
                <path
                  d="M20.321 28.0294C19.8901 27.5921 19.888 26.8801 20.345 26.471C23.554 23.5983 27.6958 22 32 22C36.3042 22 40.446 23.5983 43.655 26.471C44.112 26.8801 44.1099 27.5921 43.679 28.0294C43.2482 28.4667 42.552 28.4632 42.0915 28.0583C39.2991 25.6034 35.7188 24.2394 32 24.2394C28.2812 24.2394 24.7009 25.6034 21.9085 28.0583C21.448 28.4632 20.7519 28.4667 20.321 28.0294Z"
                  fill="#2DAF80"
                />
                <path
                  d="M23.434 31.1887C23.0041 30.7525 23.0014 30.0411 23.4655 29.6426C25.8421 27.6022 28.8636 26.4706 32 26.4706C35.1364 26.4706 38.1579 27.6022 40.5345 29.6426C40.9986 30.0411 40.9959 30.7525 40.566 31.1887C40.1362 31.625 39.4424 31.62 38.9718 31.2294C37.0133 29.604 34.5523 28.7048 32 28.7048C29.4477 28.7048 26.9867 29.604 25.0282 31.2294C24.5576 31.62 23.8638 31.625 23.434 31.1887Z"
                  fill="#2DAF80"
                />
                <path
                  d="M26.5474 34.3485C26.1183 33.913 26.1146 33.2005 26.5938 32.8225C28.1315 31.6096 30.0318 30.9412 32 30.9412C33.9682 30.9412 35.8685 31.6096 37.4062 32.8225C37.8854 33.2005 37.8817 33.913 37.4526 34.3485C37.0235 34.784 36.332 34.7749 35.8378 34.4175C34.7248 33.6124 33.3848 33.1715 32 33.1715C30.6152 33.1715 29.2752 33.6124 28.1622 34.4175C27.668 34.7749 26.9765 34.784 26.5474 34.3485Z"
                  fill="#2DAF80"
                />
                <path
                  d="M34.2025 38.7647C34.2025 39.9992 33.2164 41 32 41C30.7836 41 29.7975 39.9992 29.7975 38.7647C29.7975 37.5302 30.7836 36.5294 32 36.5294C33.2164 36.5294 34.2025 37.5302 34.2025 38.7647Z"
                  fill="#2DAF80"
                />
              </svg>
            </IconContainer>
            <span className="name_tag">Live Trade</span>
          </RowContainer>
          <ColumnContainer>
            <LBar width="5" color="y" />
            <LBar width="10" color="g" />
            <LBar width="8" color="r" />
          </ColumnContainer>
        </RowContainer>

        <RowContainer justify="sb" padding="12px 24px">
          <RowContainer gap="md">
            <IconContainer>
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
                  stroke="#FFC849"
                  stroke-width="2"
                />
                <circle
                  cx="32"
                  cy="32"
                  r="23"
                  fill="#FFC849"
                  fill-opacity="0.3"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24 22C24 20.8954 24.8954 20 26 20H33.5129C34.0502 20 34.5649 20.2162 34.941 20.5999L39.4281 25.1767C39.7947 25.5506 40 26.0533 40 26.5769V42C40 43.1046 39.1046 44 38 44H26C24.8954 44 24 43.1046 24 42V22ZM27 34C26.4477 34 26 34.4477 26 35C26 35.5523 26.4477 36 27 36H33C33.5523 36 34 35.5523 34 35C34 34.4477 33.5523 34 33 34H27ZM27 37C26.4477 37 26 37.4477 26 38C26 38.5523 26.4477 39 27 39H37C37.5523 39 38 38.5523 38 38C38 37.4477 37.5523 37 37 37H27ZM26 41C26 40.4477 26.4477 40 27 40H37C37.5523 40 38 40.4477 38 41C38 41.5523 37.5523 42 37 42H27C26.4477 42 26 41.5523 26 41Z"
                  fill="#FFC849"
                />
              </svg>
            </IconContainer>
            <span className="name_tag">Paper Trade</span>
          </RowContainer>
          <ColumnContainer>
            <LBar width="6" color="y" />
            <LBar width="4" color="g" />
            <LBar width="7" color="r" />
          </ColumnContainer>
        </RowContainer>

        <RowContainer justify="sb" padding="12px 24px">
          <RowContainer gap="md">
            <IconContainer>
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
            <span className="name_tag">Scanner</span>
          </RowContainer>
          <ColumnContainer>
            <LBar width="8" color="y" />
            <LBar width="2" color="g" />
            <LBar width="6" color="r" />
          </ColumnContainer>
        </RowContainer>
      </ContentWrap>
    </Wrapper>
  );
};

export default RecantActivity;
