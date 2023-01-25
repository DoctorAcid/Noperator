import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import {
  PrimaryButton,
  SecondaryButton,
} from "../../components/Buttons/Buttons";
import SidePanel from "../../components/Card/SidePanel";
import StockMain from "../../components/Card/StockMain";
import ColumnContainer from "../../components/ColumnContainer/ColumnContainer";
import OverflowContainer from "../../components/ColumnContainer/OverflowContainer";
import DurationFilter from "../../components/DurationFilter/DurationFilter";
import { FlexWrap } from "../../components/FlexWrap";
import Header from "../../components/Header";
import HorizoantalScroll from "../../components/HorizoantalScroll/HorizoantalScroll";
import IconContainer from "../../components/IconContainer/IconContainer";
import PageWrapper from "../../components/PageWrapper";
import RowContainer from "../../components/RowContainer/RowContainer";
import { StockIcons } from "../../components/StockIcons/StockIcons";
import SmallTitle from "../../components/Title/SmallTitle";
import Title from "../../components/Title/Title";
import HeroImg from "../../images/stocks/hero.png";

const P = styled.p`
  color: #2daf80;
`;

const Span = styled.p`
  width: 100%;
  font-size: 14px;
  text-align: center;
`;

const LargeInfoContainer = styled(motion.div)`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 32px;
  border-radius: 16px;
  padding: 24px;
  background-color: #fff;
`;

const ScannerSingle = () => (
  <PageWrapper
    header={<Header title="scanner" backButton={true} />}
    content={
      <React.Fragment>
        <ColumnContainer gap="32px">
          <RowContainer align="fs" gap="md">
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
                  d="M37.5996 21.6001H35.9996L35.9996 33.6001C35.9996 34.0419 35.6414 34.4001 35.1996 34.4001C34.7578 34.4001 34.3996 34.0419 34.3996 33.6001V21.6001H32.7996V36.8001C32.7996 37.2419 32.4414 37.6001 31.9996 37.6001C31.5578 37.6001 31.1996 37.2419 31.1996 36.8001L31.1996 21.6001H29.5996L29.5996 30.4001C29.5996 30.8419 29.2414 31.2001 28.7996 31.2001C28.3578 31.2001 27.9996 30.8419 27.9996 30.4001L27.9996 21.6001H26.3996L26.3996 33.6001C26.3996 34.0419 26.0414 34.4001 25.5996 34.4001C25.1578 34.4001 24.7996 34.0419 24.7996 33.6001L24.7996 21.6001H23.1996C22.316 21.6001 21.5996 22.3164 21.5996 23.2001V40.8001C21.5996 41.6838 22.316 42.4001 23.1996 42.4001H40.7996C41.6833 42.4001 42.3996 41.6838 42.3996 40.8001V23.2001C42.3996 22.3164 41.6833 21.6001 40.7996 21.6001H39.1996V27.2001C39.1996 27.6419 38.8414 28.0001 38.3996 28.0001C37.9578 28.0001 37.5996 27.6419 37.5996 27.2001V21.6001Z"
                  fill="#0B98E8"
                />
                <rect
                  x="16"
                  y="31.2002"
                  width="32"
                  height="1.6"
                  rx="0.8"
                  fill="#0B98E8"
                />
              </svg>
            </IconContainer>
            <OverflowContainer
              title="Bollinger Band and RSI"
              description="Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type
                            specimen book."
            />
            <SecondaryButton size="md" width="128px">
              Take Live
            </SecondaryButton>
            <PrimaryButton size="md" width="128px">
              Scan Now
            </PrimaryButton>
          </RowContainer>
        </ColumnContainer>

        <ColumnContainer gap="md">
          <Title
            titleName="backtest results"
            filterOff={true}
            viewallOff={true}
            secondryButton="Share"
          />
          <HorizoantalScroll
            children={
              <React.Fragment>
                <StockMain />
                <StockMain />
                <StockMain />
                <StockMain />
                <StockMain />
              </React.Fragment>
            }
          />
        </ColumnContainer>

        <ColumnContainer gap="lg">
          <RowContainer justify="sb" width="100%">
            <RowContainer gap="md">
              <StockIcons>
                <img width="48px" src={HeroImg} alt="" />
              </StockIcons>
              <ColumnContainer>
                <h3>Hero Motors</h3>
                <RowContainer gap="sm">
                  <p>₹599.10</p>
                  <P>(+0.17%)</P>
                </RowContainer>
              </ColumnContainer>
            </RowContainer>

            <RowContainer gap="sm" width="fit-content">
              <SecondaryButton size="md" width="80px">
                Sell
              </SecondaryButton>
              <PrimaryButton size="md" width="80px">
                Buy
              </PrimaryButton>
            </RowContainer>
          </RowContainer>

          <RowContainer>
            <DurationFilter
              time={[
                "1 min",
                "3 min",
                "5 min",
                "10 min",
                "15 min",
                "30 min",
                "1 hour",
                "1 day",
              ]}
            />
          </RowContainer>
        </ColumnContainer>

        <FlexWrap>
          <LargeInfoContainer>
            <SmallTitle title="Summery" />

            <ColumnContainer align="c" gap="md">
              <RowContainer
                style={{ position: "relative" }}
                width="fit-content"
              >
                <svg
                  width="347"
                  height="178"
                  viewBox="0 0 347 178"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M338.103 4.49998C338.103 2.04303 340.094 0.0512695 342.551 0.0512695C345.008 0.0512695 347 2.04303 347 4.49999V173.551C347 176.008 345.008 178 342.551 178C340.094 178 338.103 176.008 338.103 173.551V4.49998Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M302.513 26.7436C302.513 24.2867 304.505 22.2949 306.962 22.2949C309.419 22.2949 311.41 24.2867 311.41 26.7436V173.551C311.41 176.008 309.419 178 306.962 178C304.505 178 302.513 176.008 302.513 173.551V26.7436Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M289.167 28.968C286.71 28.968 284.718 30.9597 284.718 33.4167V173.551C284.718 176.008 286.71 178 289.167 178C291.624 178 293.615 176.008 293.615 173.551V33.4167C293.615 30.9598 291.624 28.968 289.167 28.968Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M253.577 37.8654C251.12 37.8654 249.128 39.8572 249.128 42.3142V173.551C249.128 176.008 251.12 178 253.577 178C256.034 178 258.026 176.008 258.026 173.551V42.3142C258.026 39.8572 256.034 37.8654 253.577 37.8654Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M195.744 45.6507C195.744 43.1937 197.735 41.202 200.192 41.202C202.649 41.202 204.641 43.1937 204.641 45.6507V173.551C204.641 176.008 202.649 178 200.192 178C197.735 178 195.744 176.008 195.744 173.551V45.6507Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M182.397 50.0994C179.94 50.0994 177.949 52.0912 177.949 54.5481V173.551C177.949 176.008 179.94 178 182.397 178C184.854 178 186.846 176.008 186.846 173.551V54.5481C186.846 52.0912 184.854 50.0994 182.397 50.0994Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M124.564 61.2212C124.564 58.7642 126.556 56.7725 129.013 56.7725C131.47 56.7725 133.462 58.7642 133.462 61.2212V173.551C133.462 176.008 131.47 178 129.013 178C126.556 178 124.564 176.008 124.564 173.551V61.2212Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M88.9744 83.4648C88.9744 81.0078 90.9661 79.0161 93.4231 79.0161C95.88 79.0161 97.8718 81.0078 97.8718 83.4648V173.551C97.8718 176.008 95.88 178 93.4231 178C90.9661 178 88.9744 176.008 88.9744 173.551V83.4648Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M75.6282 94.5866C73.1712 94.5866 71.1795 96.5784 71.1795 99.0353V173.551C71.1795 176.008 73.1712 178 75.6282 178C78.0852 178 80.0769 176.008 80.0769 173.551V99.0353C80.0769 96.5784 78.0852 94.5866 75.6282 94.5866Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M53.3846 109.045C53.3846 106.588 55.3764 104.596 57.8333 104.596C60.2903 104.596 62.2821 106.588 62.2821 109.045V173.551C62.2821 176.008 60.2903 178 57.8333 178C55.3764 178 53.3846 176.008 53.3846 173.551V109.045Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M40.0385 113.494C37.5815 113.494 35.5897 115.485 35.5897 117.942V173.551C35.5897 176.008 37.5815 178 40.0385 178C42.4954 178 44.4872 176.008 44.4872 173.551V117.942C44.4872 115.485 42.4954 113.494 40.0385 113.494Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M4.44872 127.952C1.99176 127.952 0 129.944 0 132.401V173.551C0 176.008 1.99176 178 4.44872 178C6.90568 178 8.89744 176.008 8.89744 173.551V132.401C8.89744 129.944 6.90568 127.952 4.44872 127.952Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M111.218 94.5866C108.761 94.5866 106.769 96.5784 106.769 99.0353V173.551C106.769 176.008 108.761 178 111.218 178C113.675 178 115.667 176.008 115.667 173.551V99.0353C115.667 96.5784 113.675 94.5866 111.218 94.5866Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M146.808 64.5577C144.351 64.5577 142.359 66.5495 142.359 69.0065V173.551C142.359 176.008 144.351 178 146.808 178C149.265 178 151.256 176.008 151.256 173.551V69.0065C151.256 66.5495 149.265 64.5577 146.808 64.5577Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M160.154 83.4648C160.154 81.0078 162.146 79.0161 164.603 79.0161C167.06 79.0161 169.051 81.0078 169.051 83.4648V173.551C169.051 176.008 167.06 178 164.603 178C162.146 178 160.154 176.008 160.154 173.551V83.4648Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M217.987 60.109C215.53 60.109 213.538 62.1008 213.538 64.5577V173.551C213.538 176.008 215.53 178 217.987 178C220.444 178 222.436 176.008 222.436 173.551V64.5577C222.436 62.1008 220.444 60.109 217.987 60.109Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M231.333 61.2212C231.333 58.7642 233.325 56.7725 235.782 56.7725C238.239 56.7725 240.231 58.7642 240.231 61.2212V173.551C240.231 176.008 238.239 178 235.782 178C233.325 178 231.333 176.008 231.333 173.551V61.2212Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M266.923 48.9872C266.923 46.5303 268.915 44.5385 271.372 44.5385C273.829 44.5385 275.821 46.5303 275.821 48.9872V173.551C275.821 176.008 273.829 178 271.372 178C268.915 178 266.923 176.008 266.923 173.551V48.9872Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M324.756 37.8654C322.299 37.8654 320.308 39.8572 320.308 42.3142V173.551C320.308 176.008 322.299 178 324.756 178C327.213 178 329.205 176.008 329.205 173.551V42.3142C329.205 39.8572 327.213 37.8654 324.756 37.8654Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M22.2436 106.821C19.7866 106.821 17.7949 108.812 17.7949 111.269V173.551C17.7949 176.008 19.7866 178 22.2436 178C24.7006 178 26.6923 176.008 26.6923 173.551V111.269C26.6923 108.812 24.7006 106.821 22.2436 106.821Z"
                    fill="#F3F8FA"
                  />
                </svg>
                <motion.div
                  style={{
                    top: "0",
                    position: "absolute",
                    overflow: "hidden",
                    width: "0%",
                  }}
                  animate={{ width: "80%" }}
                >
                  <svg
                    width="347"
                    height="178"
                    viewBox="0 0 347 178"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M338.103 4.45C338.103 1.99233 340.094 3.44813e-06 342.551 3.44813e-06C345.008 3.44813e-06 347 1.99234 347 4.45V173.55C347 176.008 345.008 178 342.551 178C340.094 178 338.103 176.008 338.103 173.55V4.45Z"
                      fill="url(#paint0_linear_374_4234)"
                    />
                    <path
                      d="M302.513 26.7C302.513 24.2423 304.505 22.2499 306.962 22.2499C309.419 22.2499 311.41 24.2423 311.41 26.7V173.55C311.41 176.008 309.419 178 306.962 178C304.505 178 302.513 176.008 302.513 173.55V26.7Z"
                      fill="url(#paint1_linear_374_4234)"
                    />
                    <path
                      d="M289.167 28.925C286.71 28.925 284.718 30.9173 284.718 33.3749V173.55C284.718 176.008 286.71 178 289.167 178C291.624 178 293.615 176.008 293.615 173.55V33.375C293.615 30.9173 291.624 28.925 289.167 28.925Z"
                      fill="url(#paint2_linear_374_4234)"
                    />
                    <path
                      d="M253.577 37.825C251.12 37.825 249.128 39.8173 249.128 42.275V173.55C249.128 176.008 251.12 178 253.577 178C256.034 178 258.026 176.008 258.026 173.55V42.275C258.026 39.8173 256.034 37.825 253.577 37.825Z"
                      fill="url(#paint3_linear_374_4234)"
                    />
                    <path
                      d="M195.744 45.6125C195.744 43.1548 197.735 41.1625 200.192 41.1625C202.649 41.1625 204.641 43.1548 204.641 45.6125V173.55C204.641 176.008 202.649 178 200.192 178C197.735 178 195.744 176.008 195.744 173.55V45.6125Z"
                      fill="url(#paint4_linear_374_4234)"
                    />
                    <path
                      d="M182.397 50.0625C179.94 50.0625 177.949 52.0548 177.949 54.5125V173.55C177.949 176.008 179.94 178 182.397 178C184.854 178 186.846 176.008 186.846 173.55V54.5125C186.846 52.0548 184.854 50.0625 182.397 50.0625Z"
                      fill="url(#paint5_linear_374_4234)"
                    />
                    <path
                      d="M124.564 61.1875C124.564 58.7298 126.556 56.7375 129.013 56.7375C131.47 56.7375 133.462 58.7298 133.462 61.1875V173.55C133.462 176.008 131.47 178 129.013 178C126.556 178 124.564 176.008 124.564 173.55V61.1875Z"
                      fill="url(#paint6_linear_374_4234)"
                    />
                    <path
                      d="M88.9744 83.4375C88.9744 80.9798 90.9661 78.9875 93.4231 78.9875C95.88 78.9875 97.8718 80.9798 97.8718 83.4375V173.55C97.8718 176.008 95.88 178 93.4231 178C90.9661 178 88.9744 176.008 88.9744 173.55V83.4375Z"
                      fill="url(#paint7_linear_374_4234)"
                    />
                    <path
                      d="M75.6282 94.5625C73.1713 94.5625 71.1795 96.5548 71.1795 99.0125V173.55C71.1795 176.008 73.1713 178 75.6282 178C78.0852 178 80.0769 176.008 80.0769 173.55V99.0125C80.0769 96.5548 78.0852 94.5625 75.6282 94.5625Z"
                      fill="url(#paint8_linear_374_4234)"
                    />
                    <path
                      d="M53.3846 109.025C53.3846 106.567 55.3764 104.575 57.8333 104.575C60.2903 104.575 62.2821 106.567 62.2821 109.025V173.55C62.2821 176.008 60.2903 178 57.8333 178C55.3764 178 53.3846 176.008 53.3846 173.55V109.025Z"
                      fill="url(#paint9_linear_374_4234)"
                    />
                    <path
                      d="M40.0385 113.475C37.5815 113.475 35.5897 115.467 35.5897 117.925V173.55C35.5897 176.008 37.5815 178 40.0385 178C42.4954 178 44.4872 176.008 44.4872 173.55V117.925C44.4872 115.467 42.4954 113.475 40.0385 113.475Z"
                      fill="url(#paint10_linear_374_4234)"
                    />
                    <path
                      d="M4.44872 127.937C1.99176 127.937 0 129.93 0 132.387V173.55C0 176.008 1.99176 178 4.44872 178C6.90568 178 8.89744 176.008 8.89744 173.55V132.387C8.89744 129.93 6.90568 127.937 4.44872 127.937Z"
                      fill="url(#paint11_linear_374_4234)"
                    />
                    <path
                      d="M111.218 94.5625C108.761 94.5625 106.769 96.5548 106.769 99.0125V173.55C106.769 176.008 108.761 178 111.218 178C113.675 178 115.667 176.008 115.667 173.55V99.0125C115.667 96.5548 113.675 94.5625 111.218 94.5625Z"
                      fill="url(#paint12_linear_374_4234)"
                    />
                    <path
                      d="M146.808 64.525C144.351 64.525 142.359 66.5173 142.359 68.975V173.55C142.359 176.008 144.351 178 146.808 178C149.265 178 151.256 176.008 151.256 173.55V68.975C151.256 66.5173 149.265 64.525 146.808 64.525Z"
                      fill="url(#paint13_linear_374_4234)"
                    />
                    <path
                      d="M160.154 83.4375C160.154 80.9798 162.146 78.9875 164.603 78.9875C167.06 78.9875 169.051 80.9798 169.051 83.4375V173.55C169.051 176.008 167.06 178 164.603 178C162.146 178 160.154 176.008 160.154 173.55V83.4375Z"
                      fill="url(#paint14_linear_374_4234)"
                    />
                    <path
                      d="M217.987 60.075C215.53 60.075 213.538 62.0673 213.538 64.525V173.55C213.538 176.008 215.53 178 217.987 178C220.444 178 222.436 176.008 222.436 173.55V64.525C222.436 62.0673 220.444 60.075 217.987 60.075Z"
                      fill="url(#paint15_linear_374_4234)"
                    />
                    <path
                      d="M231.333 61.1875C231.333 58.7298 233.325 56.7375 235.782 56.7375C238.239 56.7375 240.231 58.7298 240.231 61.1875V173.55C240.231 176.008 238.239 178 235.782 178C233.325 178 231.333 176.008 231.333 173.55V61.1875Z"
                      fill="url(#paint16_linear_374_4234)"
                    />
                    <path
                      d="M266.923 48.95C266.923 46.4923 268.915 44.5 271.372 44.5C273.829 44.5 275.821 46.4923 275.821 48.95V173.55C275.821 176.008 273.829 178 271.372 178C268.915 178 266.923 176.008 266.923 173.55V48.95Z"
                      fill="url(#paint17_linear_374_4234)"
                    />
                    <path
                      d="M324.756 37.825C322.299 37.825 320.308 39.8173 320.308 42.275V173.55C320.308 176.008 322.299 178 324.756 178C327.213 178 329.205 176.008 329.205 173.55V42.275C329.205 39.8173 327.213 37.825 324.756 37.825Z"
                      fill="url(#paint18_linear_374_4234)"
                    />
                    <path
                      d="M22.2436 106.8C19.7866 106.8 17.7949 108.792 17.7949 111.25V173.55C17.7949 176.008 19.7866 178 22.2436 178C24.7005 178 26.6923 176.008 26.6923 173.55V111.25C26.6923 108.792 24.7005 106.8 22.2436 106.8Z"
                      fill="url(#paint19_linear_374_4234)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_374_4234"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#E95671" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_374_4234"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#E95671" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_374_4234"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#E95671" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_374_4234"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#E95671" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint4_linear_374_4234"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#E95671" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint5_linear_374_4234"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#E95671" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint6_linear_374_4234"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#E95671" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint7_linear_374_4234"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#E95671" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint8_linear_374_4234"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#E95671" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint9_linear_374_4234"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#E95671" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint10_linear_374_4234"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#E95671" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint11_linear_374_4234"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#E95671" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint12_linear_374_4234"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#E95671" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint13_linear_374_4234"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#E95671" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint14_linear_374_4234"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#E95671" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint15_linear_374_4234"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#E95671" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint16_linear_374_4234"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#E95671" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint17_linear_374_4234"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#E95671" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint18_linear_374_4234"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#E95671" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint19_linear_374_4234"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#E95671" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>
              </RowContainer>

              <RowContainer width="347px">
                <Span style={{ textAlign: "left" }}>1</Span>
                <Span>8</Span>
                <Span style={{ textAlign: "right" }}>18</Span>
              </RowContainer>

              <RowContainer>
                <RowContainer
                  justify="c"
                  gap="sm"
                  style={{
                    backgroundColor: "#FEF7F8",
                    borderRadius: "8px 0 0 8px",
                    padding: "4px 8px",
                  }}
                >
                  <IconContainer size="sm">
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.2395 14.7015C10.8368 14.3654 10.8368 13.7308 11.2395 13.3947C11.5346 13.1484 11.9159 13 12.3322 13C12.7486 13 13.1298 13.1484 13.4249 13.3947C13.8277 13.7308 13.8277 14.3654 13.4249 14.7015C13.1298 14.9478 12.7486 15.0962 12.3322 15.0962C11.9159 15.0962 11.5346 14.9478 11.2395 14.7015Z"
                        fill="#E95671"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.55131 8.78047C7.15273 9.47979 6.90313 10.275 6.84573 11.123C6.17657 11.7346 5.61209 12.4566 5.18186 13.2598C4.93417 13.7222 4.93417 14.2778 5.18186 14.7402C6.53912 17.274 9.23239 19 12.3332 19C15.4341 19 18.1273 17.274 19.4846 14.7402C19.7323 14.2778 19.7323 13.7222 19.4846 13.2598C19.0543 12.4564 18.4896 11.7343 17.8203 11.1226C17.7628 10.2748 17.5132 9.47967 17.1147 8.78046C17.5455 8.5169 17.833 8.04203 17.833 7.5C17.833 6.67157 17.1614 6 16.333 6C15.791 6 15.3161 6.28749 15.0525 6.71831C14.2505 6.26117 13.3222 6 12.333 6C11.3438 6 10.4155 6.26116 9.61348 6.71831C9.34991 6.28749 8.87503 6 8.33301 6C7.50458 6 6.83301 6.67157 6.83301 7.5C6.83301 8.04203 7.1205 8.5169 7.55131 8.78047ZM9.09065 15.1389C8.794 14.7063 8.794 14.1337 9.09065 13.7011C9.79465 12.6745 10.984 12 12.3325 12C13.6811 12 14.8704 12.6745 15.5744 13.7011C15.8711 14.1337 15.8711 14.7063 15.5744 15.1389C14.8704 16.1655 13.6811 16.84 12.3325 16.84C10.984 16.84 9.79465 16.1655 9.09065 15.1389Z"
                        fill="#E95671"
                      />
                    </svg>
                  </IconContainer>
                  <p style={{ color: "#E95671" }}>Bearish</p>
                </RowContainer>

                <RowContainer
                  justify="c"
                  gap="sm"
                  style={{
                    backgroundColor: "#F8F9FA",
                    padding: "4px 8px",
                  }}
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
                        d="M21.5 11.9999C21.5 15.3763 19.7017 18.3377 17 19.9998C14.5686 18.5039 12.8689 15.9559 12.5531 13H15.5C16.0523 13 16.5 12.5523 16.5 12C16.5 11.4477 16.0523 11 15.5 11H12.5531C12.8688 8.04402 14.5685 5.49585 17 4C19.7018 5.66212 21.5 8.62347 21.5 11.9999Z"
                        fill="#6C757D"
                      />
                      <path
                        d="M2.5 11.9999C2.5 15.3763 4.29829 18.3377 7.00005 19.9998C9.43145 18.5039 11.1311 15.9559 11.4469 13H8.5C7.94772 13 7.5 12.5523 7.5 12C7.5 11.4477 7.94772 11 8.5 11H11.4469C11.1312 8.04402 9.43144 5.49584 6.99995 4C4.29824 5.66212 2.5 8.62347 2.5 11.9999Z"
                        fill="#6C757D"
                      />
                    </svg>
                  </IconContainer>
                  <p style={{ color: "#6C757D" }}>Neutral</p>
                </RowContainer>

                <RowContainer
                  justify="c"
                  gap="sm"
                  style={{
                    backgroundColor: "#F5FBF9",
                    borderRadius: "0 8px 8px 0",
                    padding: "4px 8px",
                  }}
                >
                  <IconContainer size="sm">
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.81091 19C9.42903 18.5639 9.1787 17.8425 8.87254 16.9602C8.47669 15.8194 7.98752 14.4097 7 13C6.26495 11.9507 5.63944 11.2537 5.03152 10.5763C4.19106 9.63985 3.38421 8.74083 2.36799 7C0.96697 4.6 0.908595 2.66667 1.05453 2C1.63836 3.5 2.39022 4.92681 4 6C4.99168 6.66112 6.94414 6.44808 8.96323 6.22777C9.99818 6.11484 11.0506 6 12.0002 6C12.9498 6 14.0022 6.11484 15.0371 6.22777C17.0561 6.44808 19.0083 6.66112 20 6C21.6098 4.92681 22.3616 3.5 22.9455 2C23.0914 2.66667 23.033 4.6 21.632 7C20.6158 8.74083 19.8089 9.63985 18.9685 10.5763C18.3606 11.2537 17.7351 11.9507 17 13C16.0125 14.4097 15.5233 15.8194 15.1275 16.9602C14.8213 17.8425 14.571 18.5639 14.1891 19C13.9924 19.2246 13.7682 19.4019 13.5376 19.5407C13.8263 19.8008 14 20.1352 14 20.5C14 21.3284 13.1046 22 12 22C10.8954 22 10 21.3284 10 20.5C10 20.1352 10.1737 19.8008 10.4624 19.5407C10.2318 19.4019 10.0076 19.2246 9.81091 19ZM12 20C11.4477 20 11 20.2239 11 20.5C11 20.7761 11.4477 21 12 21C12.5523 21 13 20.7761 13 20.5C13 20.2239 12.5523 20 12 20Z"
                        fill="#2DAF80"
                      />
                    </svg>
                  </IconContainer>
                  <p style={{ color: "#2DAF80" }}>Bullish</p>
                </RowContainer>
              </RowContainer>
            </ColumnContainer>

            <ColumnContainer align="c" gap="32px">
              <RowContainer style={{ textAlign: "center" }}>
                <ColumnContainer>
                  <h3>623.79</h3>
                  <Span>EMA (20)</Span>
                </ColumnContainer>
                <ColumnContainer
                  style={{
                    borderRight: "2px solid #F8F9FA",
                    borderLeft: "2px solid #F8F9FA",
                  }}
                >
                  <h3>625.47</h3>
                  <Span>SMA (20)</Span>
                </ColumnContainer>
                <ColumnContainer>
                  <h3>57.03</h3>
                  <Span>RSI (14)</Span>
                </ColumnContainer>
              </RowContainer>

              <RowContainer style={{ textAlign: "center" }}>
                <ColumnContainer>
                  <h3>21.36</h3>
                  <Span>Awsome Osc</Span>
                </ColumnContainer>
                <ColumnContainer
                  style={{
                    borderRight: "2px solid #F8F9FA",
                    borderLeft: "2px solid #F8F9FA",
                  }}
                >
                  <h3>6.08</h3>
                  <Span>Macd (12, 26, 9)</Span>
                </ColumnContainer>
                <ColumnContainer>
                  <h3>70.00</h3>
                  <Span>CCI (20)</Span>
                </ColumnContainer>
              </RowContainer>
            </ColumnContainer>
          </LargeInfoContainer>

          <LargeInfoContainer>
            <SmallTitle title="Support & Resistance" />

            <ColumnContainer align="c" gap="md">
              <RowContainer
                style={{ position: "relative" }}
                width="fit-content"
              >
                <svg
                  width="347"
                  height="178"
                  viewBox="0 0 347 178"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 0C2.01472 0 0 2.01472 0 4.5V173.5C0 175.985 2.01472 178 4.5 178C6.98528 178 9 175.985 9 173.5V4.5C9 2.01472 6.98528 0 4.5 0Z"
                    fill="#E9ECEF"
                  />
                  <path
                    d="M40.5 22C38.0147 22 36 24.0147 36 26.5V151.5C36 153.985 38.0147 156 40.5 156C42.9853 156 45 153.985 45 151.5V26.5C45 24.0147 42.9853 22 40.5 22Z"
                    fill="#E9ECEF"
                  />
                  <path
                    d="M53 4.5C53 2.01472 55.0147 0 57.5 0C59.9853 0 62 2.01472 62 4.5V173.5C62 175.985 59.9853 178 57.5 178C55.0147 178 53 175.985 53 173.5V4.5Z"
                    fill="#E9ECEF"
                  />
                  <path
                    d="M75.5 8C73.0147 8 71 10.0147 71 12.5V165.5C71 167.985 73.0147 170 75.5 170C77.9853 170 80 167.985 80 165.5V12.5C80 10.0147 77.9853 8 75.5 8Z"
                    fill="#E9ECEF"
                  />
                  <path
                    d="M89 26.5C89 24.0147 91.0147 22 93.5 22C95.9853 22 98 24.0147 98 26.5V151.5C98 153.985 95.9853 156 93.5 156C91.0147 156 89 153.985 89 151.5V26.5Z"
                    fill="#E9ECEF"
                  />
                  <path
                    d="M111.5 34C109.015 34 107 36.0147 107 38.5V139.5C107 141.985 109.015 144 111.5 144C113.985 144 116 141.985 116 139.5V38.5C116 36.0147 113.985 34 111.5 34Z"
                    fill="#E9ECEF"
                  />
                  <path
                    d="M125 48.5C125 46.0147 127.015 44 129.5 44C131.985 44 134 46.0147 134 48.5V129.5C134 131.985 131.985 134 129.5 134C127.015 134 125 131.985 125 129.5V48.5Z"
                    fill="#E9ECEF"
                  />
                  <path
                    d="M146.5 55C144.015 55 142 57.0147 142 59.5V118.5C142 120.985 144.015 123 146.5 123C148.985 123 151 120.985 151 118.5V59.5C151 57.0147 148.985 55 146.5 55Z"
                    fill="#E9ECEF"
                  />
                  <path
                    d="M160 69.5C160 67.0147 162.015 65 164.5 65C166.985 65 169 67.0147 169 69.5V108.5C169 110.985 166.985 113 164.5 113C162.015 113 160 110.985 160 108.5V69.5Z"
                    fill="#E9ECEF"
                  />
                  <path
                    d="M182.5 65C180.015 65 178 67.0147 178 69.5V108.5C178 110.985 180.015 113 182.5 113C184.985 113 187 110.985 187 108.5V69.5C187 67.0147 184.985 65 182.5 65Z"
                    fill="#E9ECEF"
                  />
                  <path
                    d="M196 59.5C196 57.0147 198.015 55 200.5 55C202.985 55 205 57.0147 205 59.5V118.5C205 120.985 202.985 123 200.5 123C198.015 123 196 120.985 196 118.5V59.5Z"
                    fill="#E9ECEF"
                  />
                  <path
                    d="M218.5 44C216.015 44 214 46.0147 214 48.5V129.5C214 131.985 216.015 134 218.5 134C220.985 134 223 131.985 223 129.5V48.5C223 46.0147 220.985 44 218.5 44Z"
                    fill="#E9ECEF"
                  />
                  <path
                    d="M231 38.5C231 36.0147 233.015 34 235.5 34C237.985 34 240 36.0147 240 38.5V139.5C240 141.985 237.985 144 235.5 144C233.015 144 231 141.985 231 139.5V38.5Z"
                    fill="#E9ECEF"
                  />
                  <path
                    d="M253.5 22C251.015 22 249 24.0147 249 26.5V151.5C249 153.985 251.015 156 253.5 156C255.985 156 258 153.985 258 151.5V26.5C258 24.0147 255.985 22 253.5 22Z"
                    fill="#E9ECEF"
                  />
                  <path
                    d="M267 12.5C267 10.0147 269.015 8 271.5 8C273.985 8 276 10.0147 276 12.5V165.5C276 167.985 273.985 170 271.5 170C269.015 170 267 167.985 267 165.5V12.5Z"
                    fill="#E9ECEF"
                  />
                  <path
                    d="M289.5 0C287.015 0 285 2.01472 285 4.5V173.5C285 175.985 287.015 178 289.5 178C291.985 178 294 175.985 294 173.5V4.5C294 2.01472 291.985 0 289.5 0Z"
                    fill="#E9ECEF"
                  />
                  <path
                    d="M303 26.5C303 24.0147 305.015 22 307.5 22C309.985 22 312 24.0147 312 26.5V151.5C312 153.985 309.985 156 307.5 156C305.015 156 303 153.985 303 151.5V26.5Z"
                    fill="#E9ECEF"
                  />
                  <path
                    d="M324.5 8C322.015 8 320 10.0147 320 12.5V165.5C320 167.985 322.015 170 324.5 170C326.985 170 329 167.985 329 165.5V12.5C329 10.0147 326.985 8 324.5 8Z"
                    fill="#E9ECEF"
                  />
                  <path
                    d="M338 4.5C338 2.01472 340.015 0 342.5 0C344.985 0 347 2.01472 347 4.5V173.5C347 175.985 344.985 178 342.5 178C340.015 178 338 175.985 338 173.5V4.5Z"
                    fill="#E9ECEF"
                  />
                  <path
                    d="M22.5 8C20.0147 8 18 10.0147 18 12.5V165.5C18 167.985 20.0147 170 22.5 170C24.9853 170 27 167.985 27 165.5V12.5C27 10.0147 24.9853 8 22.5 8Z"
                    fill="#E9ECEF"
                  />
                </svg>

                <RowContainer
                  style={{
                    position: "absolute",
                    gap: "9px",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <RowContainer
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      justifyContent: "flex-end",
                    }}
                  >
                    <motion.div
                      style={{
                        position: "absolute",
                        width: "0%",
                        height: "100%",
                        overflow: "hidden",
                      }}
                      animate={{
                        width: "0%",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          right: "0",
                        }}
                      >
                        <svg
                          width="169"
                          height="178"
                          viewBox="0 0 169 178"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M164.5 65C166.985 65 169 67.0147 169 69.5V108.5C169 110.985 166.985 113 164.5 113C162.015 113 160 110.985 160 108.5V69.5C160 67.0147 162.015 65 164.5 65Z"
                            fill="#E95671"
                          />
                          <path
                            d="M151 59.5C151 57.0147 148.985 55 146.5 55C144.015 55 142 57.0147 142 59.5V118.5C142 120.985 144.015 123 146.5 123C148.985 123 151 120.985 151 118.5V59.5Z"
                            fill="#E95671"
                          />
                          <path
                            d="M128.5 44C130.985 44 133 46.0147 133 48.5V129.5C133 131.985 130.985 134 128.5 134C126.015 134 124 131.985 124 129.5V48.5C124 46.0147 126.015 44 128.5 44Z"
                            fill="#E95671"
                          />
                          <path
                            d="M116 38.5C116 36.0147 113.985 34 111.5 34C109.015 34 107 36.0147 107 38.5V139.5C107 141.985 109.015 144 111.5 144C113.985 144 116 141.985 116 139.5V38.5Z"
                            fill="#E95671"
                          />
                          <path
                            d="M93.5 22C95.985 22 98 24.0147 98 26.5V151.5C98 153.985 95.985 156 93.5 156C91.015 156 89 153.985 89 151.5V26.5C89 24.0147 91.015 22 93.5 22Z"
                            fill="#E95671"
                          />
                          <path
                            d="M80 12.5C80 10.0147 77.985 8 75.5 8C73.015 8 71 10.0147 71 12.5V165.5C71 167.985 73.015 170 75.5 170C77.985 170 80 167.985 80 165.5V12.5Z"
                            fill="#E95671"
                          />
                          <path
                            d="M57.5 0C59.985 0 62 2.01472 62 4.5V173.5C62 175.985 59.985 178 57.5 178C55.015 178 53 175.985 53 173.5V4.5C53 2.01472 55.015 0 57.5 0Z"
                            fill="#E95671"
                          />
                          <path
                            d="M44 26.5C44 24.0147 41.985 22 39.5 22C37.015 22 35 24.0147 35 26.5V151.5C35 153.985 37.015 156 39.5 156C41.985 156 44 153.985 44 151.5V26.5Z"
                            fill="#E95671"
                          />
                          <path
                            d="M22.5 8C24.985 8 27 10.0147 27 12.5V165.5C27 167.985 24.985 170 22.5 170C20.015 170 18 167.985 18 165.5V12.5C18 10.0147 20.015 8 22.5 8Z"
                            fill="#E95671"
                          />
                          <path
                            d="M9 4.5C9 2.01472 6.985 0 4.5 0C2.015 0 0 2.01472 0 4.5V173.5C0 175.985 2.015 178 4.5 178C6.985 178 9 175.985 9 173.5V4.5Z"
                            fill="#E95671"
                          />
                        </svg>
                      </div>
                    </motion.div>
                  </RowContainer>

                  <RowContainer
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      justifyContent: "flex-start",
                    }}
                  >
                    <motion.div
                      style={{
                        position: "absolute",
                        width: "0%",
                        height: "100%",
                        overflow: "hidden",
                      }}
                      animate={{
                        width: "50%",
                      }}
                    >
                      <svg
                        width="169"
                        height="178"
                        viewBox="0 0 169 178"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.5 65C2.015 65 0 67.0147 0 69.5V108.5C0 110.985 2.015 113 4.5 113C6.985 113 9 110.985 9 108.5V69.5C9 67.0147 6.985 65 4.5 65Z"
                          fill="#0B98E8"
                        />
                        <path
                          d="M18 59.5C18 57.0147 20.015 55 22.5 55C24.985 55 27 57.0147 27 59.5V118.5C27 120.985 24.985 123 22.5 123C20.015 123 18 120.985 18 118.5V59.5Z"
                          fill="#0B98E8"
                        />
                        <path
                          d="M40.5 44C38.015 44 36 46.0147 36 48.5V129.5C36 131.985 38.015 134 40.5 134C42.985 134 45 131.985 45 129.5V48.5C45 46.0147 42.985 44 40.5 44Z"
                          fill="#0B98E8"
                        />
                        <path
                          d="M53 38.5C53 36.0147 55.015 34 57.5 34C59.985 34 62 36.0147 62 38.5V139.5C62 141.985 59.985 144 57.5 144C55.015 144 53 141.985 53 139.5V38.5Z"
                          fill="#0B98E8"
                        />
                        <path
                          d="M75.5 22C73.015 22 71 24.0147 71 26.5V151.5C71 153.985 73.015 156 75.5 156C77.985 156 80 153.985 80 151.5V26.5C80 24.0147 77.985 22 75.5 22Z"
                          fill="#0B98E8"
                        />
                        <path
                          d="M89 12.5C89 10.0147 91.015 8 93.5 8C95.985 8 98 10.0147 98 12.5V165.5C98 167.985 95.985 170 93.5 170C91.015 170 89 167.985 89 165.5V12.5Z"
                          fill="#0B98E8"
                        />
                        <path
                          d="M111.5 0C109.015 0 107 2.01472 107 4.5V173.5C107 175.985 109.015 178 111.5 178C113.985 178 116 175.985 116 173.5V4.5C116 2.01472 113.985 0 111.5 0Z"
                          fill="#0B98E8"
                        />
                        <path
                          d="M125 26.5C125 24.0147 127.015 22 129.5 22C131.985 22 134 24.0147 134 26.5V151.5C134 153.985 131.985 156 129.5 156C127.015 156 125 153.985 125 151.5V26.5Z"
                          fill="#0B98E8"
                        />
                        <path
                          d="M146.5 8C144.015 8 142 10.0147 142 12.5V165.5C142 167.985 144.015 170 146.5 170C148.985 170 151 167.985 151 165.5V12.5C151 10.0147 148.985 8 146.5 8Z"
                          fill="#0B98E8"
                        />
                        <path
                          d="M160 4.5C160 2.01472 162.015 0 164.5 0C166.985 0 169 2.01472 169 4.5V173.5C169 175.985 166.985 178 164.5 178C162.015 178 160 175.985 160 173.5V4.5Z"
                          fill="#0B98E8"
                        />
                      </svg>
                    </motion.div>
                  </RowContainer>
                </RowContainer>
              </RowContainer>

              <RowContainer width="347px">
                <Span style={{ textAlign: "left" }}>S3</Span>
                <Span style={{ textAlign: "left" }}>S2</Span>
                <Span style={{ textAlign: "left" }}>S1</Span>
                <Span></Span>
                <Span style={{ textAlign: "right" }}>R1</Span>
                <Span style={{ textAlign: "right" }}>R2</Span>
                <Span style={{ textAlign: "right" }}>R3</Span>
              </RowContainer>

              <RowContainer>
                <RowContainer
                  justify="c"
                  gap="sm"
                  style={{
                    backgroundColor: "#FEF7F8",
                    borderRadius: "8px 0 0 8px",
                    padding: "4px 8px",
                  }}
                >
                  <IconContainer size="sm">
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.2395 14.7015C10.8368 14.3654 10.8368 13.7308 11.2395 13.3947C11.5346 13.1484 11.9159 13 12.3322 13C12.7486 13 13.1298 13.1484 13.4249 13.3947C13.8277 13.7308 13.8277 14.3654 13.4249 14.7015C13.1298 14.9478 12.7486 15.0962 12.3322 15.0962C11.9159 15.0962 11.5346 14.9478 11.2395 14.7015Z"
                        fill="#E95671"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.55131 8.78047C7.15273 9.47979 6.90313 10.275 6.84573 11.123C6.17657 11.7346 5.61209 12.4566 5.18186 13.2598C4.93417 13.7222 4.93417 14.2778 5.18186 14.7402C6.53912 17.274 9.23239 19 12.3332 19C15.4341 19 18.1273 17.274 19.4846 14.7402C19.7323 14.2778 19.7323 13.7222 19.4846 13.2598C19.0543 12.4564 18.4896 11.7343 17.8203 11.1226C17.7628 10.2748 17.5132 9.47967 17.1147 8.78046C17.5455 8.5169 17.833 8.04203 17.833 7.5C17.833 6.67157 17.1614 6 16.333 6C15.791 6 15.3161 6.28749 15.0525 6.71831C14.2505 6.26117 13.3222 6 12.333 6C11.3438 6 10.4155 6.26116 9.61348 6.71831C9.34991 6.28749 8.87503 6 8.33301 6C7.50458 6 6.83301 6.67157 6.83301 7.5C6.83301 8.04203 7.1205 8.5169 7.55131 8.78047ZM9.09065 15.1389C8.794 14.7063 8.794 14.1337 9.09065 13.7011C9.79465 12.6745 10.984 12 12.3325 12C13.6811 12 14.8704 12.6745 15.5744 13.7011C15.8711 14.1337 15.8711 14.7063 15.5744 15.1389C14.8704 16.1655 13.6811 16.84 12.3325 16.84C10.984 16.84 9.79465 16.1655 9.09065 15.1389Z"
                        fill="#E95671"
                      />
                    </svg>
                  </IconContainer>
                  <p style={{ color: "#E95671" }}>Bearish</p>
                </RowContainer>

                <RowContainer
                  justify="c"
                  gap="sm"
                  style={{
                    backgroundColor: "#F8F9FA",
                    padding: "4px 8px",
                  }}
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
                        d="M21.5 11.9999C21.5 15.3763 19.7017 18.3377 17 19.9998C14.5686 18.5039 12.8689 15.9559 12.5531 13H15.5C16.0523 13 16.5 12.5523 16.5 12C16.5 11.4477 16.0523 11 15.5 11H12.5531C12.8688 8.04402 14.5685 5.49585 17 4C19.7018 5.66212 21.5 8.62347 21.5 11.9999Z"
                        fill="#6C757D"
                      />
                      <path
                        d="M2.5 11.9999C2.5 15.3763 4.29829 18.3377 7.00005 19.9998C9.43145 18.5039 11.1311 15.9559 11.4469 13H8.5C7.94772 13 7.5 12.5523 7.5 12C7.5 11.4477 7.94772 11 8.5 11H11.4469C11.1312 8.04402 9.43144 5.49584 6.99995 4C4.29824 5.66212 2.5 8.62347 2.5 11.9999Z"
                        fill="#6C757D"
                      />
                    </svg>
                  </IconContainer>
                  <p style={{ color: "#6C757D" }}>Neutral</p>
                </RowContainer>

                <RowContainer
                  justify="c"
                  gap="sm"
                  style={{
                    backgroundColor: "#F5FBF9",
                    borderRadius: "0 8px 8px 0",
                    padding: "4px 8px",
                  }}
                >
                  <IconContainer size="sm">
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.81091 19C9.42903 18.5639 9.1787 17.8425 8.87254 16.9602C8.47669 15.8194 7.98752 14.4097 7 13C6.26495 11.9507 5.63944 11.2537 5.03152 10.5763C4.19106 9.63985 3.38421 8.74083 2.36799 7C0.96697 4.6 0.908595 2.66667 1.05453 2C1.63836 3.5 2.39022 4.92681 4 6C4.99168 6.66112 6.94414 6.44808 8.96323 6.22777C9.99818 6.11484 11.0506 6 12.0002 6C12.9498 6 14.0022 6.11484 15.0371 6.22777C17.0561 6.44808 19.0083 6.66112 20 6C21.6098 4.92681 22.3616 3.5 22.9455 2C23.0914 2.66667 23.033 4.6 21.632 7C20.6158 8.74083 19.8089 9.63985 18.9685 10.5763C18.3606 11.2537 17.7351 11.9507 17 13C16.0125 14.4097 15.5233 15.8194 15.1275 16.9602C14.8213 17.8425 14.571 18.5639 14.1891 19C13.9924 19.2246 13.7682 19.4019 13.5376 19.5407C13.8263 19.8008 14 20.1352 14 20.5C14 21.3284 13.1046 22 12 22C10.8954 22 10 21.3284 10 20.5C10 20.1352 10.1737 19.8008 10.4624 19.5407C10.2318 19.4019 10.0076 19.2246 9.81091 19ZM12 20C11.4477 20 11 20.2239 11 20.5C11 20.7761 11.4477 21 12 21C12.5523 21 13 20.7761 13 20.5C13 20.2239 12.5523 20 12 20Z"
                        fill="#2DAF80"
                      />
                    </svg>
                  </IconContainer>
                  <p style={{ color: "#2DAF80" }}>Bullish</p>
                </RowContainer>
              </RowContainer>
            </ColumnContainer>

            <ColumnContainer align="c" gap="32px">
              <RowContainer style={{ textAlign: "center" }}>
                <ColumnContainer>
                  <h3>623.79</h3>
                  <Span>EMA (20)</Span>
                </ColumnContainer>
                <ColumnContainer
                  style={{
                    borderRight: "2px solid #F8F9FA",
                    borderLeft: "2px solid #F8F9FA",
                  }}
                >
                  <h3>625.47</h3>
                  <Span>SMA (20)</Span>
                </ColumnContainer>
                <ColumnContainer>
                  <h3>57.03</h3>
                  <Span>RSI (14)</Span>
                </ColumnContainer>
              </RowContainer>

              <RowContainer style={{ textAlign: "center" }}>
                <ColumnContainer>
                  <h3>21.36</h3>
                  <Span>Awsome Osc</Span>
                </ColumnContainer>
                <ColumnContainer
                  style={{
                    borderRight: "2px solid #F8F9FA",
                    borderLeft: "2px solid #F8F9FA",
                  }}
                >
                  <h3>6.08</h3>
                  <Span>Macd (12, 26, 9)</Span>
                </ColumnContainer>
                <ColumnContainer>
                  <h3>70.00</h3>
                  <Span>CCI (20)</Span>
                </ColumnContainer>
              </RowContainer>
            </ColumnContainer>
          </LargeInfoContainer>

          <LargeInfoContainer>
            <SmallTitle title="Moving Averages" />

            <ColumnContainer align="c" gap="md">
              <RowContainer
                style={{ position: "relative" }}
                width="fit-content"
              >
                <svg
                  width="347"
                  height="178"
                  viewBox="0 0 347 178"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M338.103 4.49998C338.103 2.04303 340.094 0.0512695 342.551 0.0512695C345.008 0.0512695 347 2.04303 347 4.49999V173.551C347 176.008 345.008 178 342.551 178C340.094 178 338.103 176.008 338.103 173.551V4.49998Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M302.513 26.7436C302.513 24.2867 304.505 22.2949 306.962 22.2949C309.419 22.2949 311.41 24.2867 311.41 26.7436V173.551C311.41 176.008 309.419 178 306.962 178C304.505 178 302.513 176.008 302.513 173.551V26.7436Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M289.167 28.968C286.71 28.968 284.718 30.9597 284.718 33.4167V173.551C284.718 176.008 286.71 178 289.167 178C291.624 178 293.615 176.008 293.615 173.551V33.4167C293.615 30.9598 291.624 28.968 289.167 28.968Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M253.577 37.8654C251.12 37.8654 249.128 39.8572 249.128 42.3142V173.551C249.128 176.008 251.12 178 253.577 178C256.034 178 258.026 176.008 258.026 173.551V42.3142C258.026 39.8572 256.034 37.8654 253.577 37.8654Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M195.744 45.6507C195.744 43.1937 197.735 41.202 200.192 41.202C202.649 41.202 204.641 43.1937 204.641 45.6507V173.551C204.641 176.008 202.649 178 200.192 178C197.735 178 195.744 176.008 195.744 173.551V45.6507Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M182.397 50.0994C179.94 50.0994 177.949 52.0912 177.949 54.5481V173.551C177.949 176.008 179.94 178 182.397 178C184.854 178 186.846 176.008 186.846 173.551V54.5481C186.846 52.0912 184.854 50.0994 182.397 50.0994Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M124.564 61.2212C124.564 58.7642 126.556 56.7725 129.013 56.7725C131.47 56.7725 133.462 58.7642 133.462 61.2212V173.551C133.462 176.008 131.47 178 129.013 178C126.556 178 124.564 176.008 124.564 173.551V61.2212Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M88.9744 83.4648C88.9744 81.0078 90.9661 79.0161 93.4231 79.0161C95.88 79.0161 97.8718 81.0078 97.8718 83.4648V173.551C97.8718 176.008 95.88 178 93.4231 178C90.9661 178 88.9744 176.008 88.9744 173.551V83.4648Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M75.6282 94.5866C73.1712 94.5866 71.1795 96.5784 71.1795 99.0353V173.551C71.1795 176.008 73.1712 178 75.6282 178C78.0852 178 80.0769 176.008 80.0769 173.551V99.0353C80.0769 96.5784 78.0852 94.5866 75.6282 94.5866Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M53.3846 109.045C53.3846 106.588 55.3764 104.596 57.8333 104.596C60.2903 104.596 62.2821 106.588 62.2821 109.045V173.551C62.2821 176.008 60.2903 178 57.8333 178C55.3764 178 53.3846 176.008 53.3846 173.551V109.045Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M40.0385 113.494C37.5815 113.494 35.5897 115.485 35.5897 117.942V173.551C35.5897 176.008 37.5815 178 40.0385 178C42.4954 178 44.4872 176.008 44.4872 173.551V117.942C44.4872 115.485 42.4954 113.494 40.0385 113.494Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M4.44872 127.952C1.99176 127.952 0 129.944 0 132.401V173.551C0 176.008 1.99176 178 4.44872 178C6.90568 178 8.89744 176.008 8.89744 173.551V132.401C8.89744 129.944 6.90568 127.952 4.44872 127.952Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M111.218 94.5866C108.761 94.5866 106.769 96.5784 106.769 99.0353V173.551C106.769 176.008 108.761 178 111.218 178C113.675 178 115.667 176.008 115.667 173.551V99.0353C115.667 96.5784 113.675 94.5866 111.218 94.5866Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M146.808 64.5577C144.351 64.5577 142.359 66.5495 142.359 69.0065V173.551C142.359 176.008 144.351 178 146.808 178C149.265 178 151.256 176.008 151.256 173.551V69.0065C151.256 66.5495 149.265 64.5577 146.808 64.5577Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M160.154 83.4648C160.154 81.0078 162.146 79.0161 164.603 79.0161C167.06 79.0161 169.051 81.0078 169.051 83.4648V173.551C169.051 176.008 167.06 178 164.603 178C162.146 178 160.154 176.008 160.154 173.551V83.4648Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M217.987 60.109C215.53 60.109 213.538 62.1008 213.538 64.5577V173.551C213.538 176.008 215.53 178 217.987 178C220.444 178 222.436 176.008 222.436 173.551V64.5577C222.436 62.1008 220.444 60.109 217.987 60.109Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M231.333 61.2212C231.333 58.7642 233.325 56.7725 235.782 56.7725C238.239 56.7725 240.231 58.7642 240.231 61.2212V173.551C240.231 176.008 238.239 178 235.782 178C233.325 178 231.333 176.008 231.333 173.551V61.2212Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M266.923 48.9872C266.923 46.5303 268.915 44.5385 271.372 44.5385C273.829 44.5385 275.821 46.5303 275.821 48.9872V173.551C275.821 176.008 273.829 178 271.372 178C268.915 178 266.923 176.008 266.923 173.551V48.9872Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M324.756 37.8654C322.299 37.8654 320.308 39.8572 320.308 42.3142V173.551C320.308 176.008 322.299 178 324.756 178C327.213 178 329.205 176.008 329.205 173.551V42.3142C329.205 39.8572 327.213 37.8654 324.756 37.8654Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M22.2436 106.821C19.7866 106.821 17.7949 108.812 17.7949 111.269V173.551C17.7949 176.008 19.7866 178 22.2436 178C24.7006 178 26.6923 176.008 26.6923 173.551V111.269C26.6923 108.812 24.7006 106.821 22.2436 106.821Z"
                    fill="#F3F8FA"
                  />
                </svg>
                <motion.div
                  style={{
                    top: "0",
                    position: "absolute",
                    overflow: "hidden",
                    width: "0%",
                  }}
                  animate={{ width: "93%" }}
                >
                  <svg
                    width="347"
                    height="178"
                    viewBox="0 0 347 178"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M338.103 4.45C338.103 1.99233 340.094 3.44813e-06 342.551 3.44813e-06C345.008 3.44813e-06 347 1.99234 347 4.45V173.55C347 176.008 345.008 178 342.551 178C340.094 178 338.103 176.008 338.103 173.55V4.45Z"
                      fill="url(#paint0_linear_374_4521)"
                    />
                    <path
                      d="M302.513 26.6999C302.513 24.2423 304.505 22.2499 306.962 22.2499C309.419 22.2499 311.41 24.2423 311.41 26.6999V173.55C311.41 176.008 309.419 178 306.962 178C304.505 178 302.513 176.008 302.513 173.55V26.6999Z"
                      fill="url(#paint1_linear_374_4521)"
                    />
                    <path
                      d="M289.167 28.925C286.71 28.925 284.718 30.9173 284.718 33.3749V173.55C284.718 176.008 286.71 178 289.167 178C291.624 178 293.615 176.008 293.615 173.55V33.375C293.615 30.9173 291.624 28.925 289.167 28.925Z"
                      fill="url(#paint2_linear_374_4521)"
                    />
                    <path
                      d="M253.577 37.825C251.12 37.825 249.128 39.8173 249.128 42.275V173.55C249.128 176.008 251.12 178 253.577 178C256.034 178 258.026 176.008 258.026 173.55V42.275C258.026 39.8173 256.034 37.825 253.577 37.825Z"
                      fill="url(#paint3_linear_374_4521)"
                    />
                    <path
                      d="M195.744 45.6125C195.744 43.1548 197.735 41.1625 200.192 41.1625C202.649 41.1625 204.641 43.1548 204.641 45.6125V173.55C204.641 176.008 202.649 178 200.192 178C197.735 178 195.744 176.008 195.744 173.55V45.6125Z"
                      fill="url(#paint4_linear_374_4521)"
                    />
                    <path
                      d="M182.397 50.0625C179.94 50.0625 177.949 52.0548 177.949 54.5125V173.55C177.949 176.008 179.94 178 182.397 178C184.854 178 186.846 176.008 186.846 173.55V54.5125C186.846 52.0548 184.854 50.0625 182.397 50.0625Z"
                      fill="url(#paint5_linear_374_4521)"
                    />
                    <path
                      d="M124.564 61.1875C124.564 58.7298 126.556 56.7375 129.013 56.7375C131.47 56.7375 133.462 58.7298 133.462 61.1875V173.55C133.462 176.008 131.47 178 129.013 178C126.556 178 124.564 176.008 124.564 173.55V61.1875Z"
                      fill="url(#paint6_linear_374_4521)"
                    />
                    <path
                      d="M88.9744 83.4375C88.9744 80.9798 90.9661 78.9875 93.4231 78.9875C95.88 78.9875 97.8718 80.9798 97.8718 83.4375V173.55C97.8718 176.008 95.88 178 93.4231 178C90.9661 178 88.9744 176.008 88.9744 173.55V83.4375Z"
                      fill="url(#paint7_linear_374_4521)"
                    />
                    <path
                      d="M75.6282 94.5625C73.1712 94.5625 71.1795 96.5548 71.1795 99.0125V173.55C71.1795 176.008 73.1712 178 75.6282 178C78.0852 178 80.0769 176.008 80.0769 173.55V99.0125C80.0769 96.5548 78.0852 94.5625 75.6282 94.5625Z"
                      fill="url(#paint8_linear_374_4521)"
                    />
                    <path
                      d="M53.3846 109.025C53.3846 106.567 55.3764 104.575 57.8333 104.575C60.2903 104.575 62.2821 106.567 62.2821 109.025V173.55C62.2821 176.008 60.2903 178 57.8333 178C55.3764 178 53.3846 176.008 53.3846 173.55V109.025Z"
                      fill="url(#paint9_linear_374_4521)"
                    />
                    <path
                      d="M40.0385 113.475C37.5815 113.475 35.5897 115.467 35.5897 117.925V173.55C35.5897 176.008 37.5815 178 40.0385 178C42.4954 178 44.4872 176.008 44.4872 173.55V117.925C44.4872 115.467 42.4954 113.475 40.0385 113.475Z"
                      fill="url(#paint10_linear_374_4521)"
                    />
                    <path
                      d="M4.44872 127.937C1.99176 127.937 0 129.93 0 132.387V173.55C0 176.008 1.99176 178 4.44872 178C6.90568 178 8.89744 176.008 8.89744 173.55V132.387C8.89744 129.93 6.90568 127.937 4.44872 127.937Z"
                      fill="url(#paint11_linear_374_4521)"
                    />
                    <path
                      d="M111.218 94.5625C108.761 94.5625 106.769 96.5548 106.769 99.0125V173.55C106.769 176.008 108.761 178 111.218 178C113.675 178 115.667 176.008 115.667 173.55V99.0125C115.667 96.5548 113.675 94.5625 111.218 94.5625Z"
                      fill="url(#paint12_linear_374_4521)"
                    />
                    <path
                      d="M146.808 64.525C144.351 64.525 142.359 66.5173 142.359 68.975V173.55C142.359 176.008 144.351 178 146.808 178C149.265 178 151.256 176.008 151.256 173.55V68.975C151.256 66.5173 149.265 64.525 146.808 64.525Z"
                      fill="url(#paint13_linear_374_4521)"
                    />
                    <path
                      d="M160.154 83.4375C160.154 80.9798 162.146 78.9875 164.603 78.9875C167.06 78.9875 169.051 80.9798 169.051 83.4375V173.55C169.051 176.008 167.06 178 164.603 178C162.146 178 160.154 176.008 160.154 173.55V83.4375Z"
                      fill="url(#paint14_linear_374_4521)"
                    />
                    <path
                      d="M217.987 60.075C215.53 60.075 213.538 62.0673 213.538 64.525V173.55C213.538 176.008 215.53 178 217.987 178C220.444 178 222.436 176.008 222.436 173.55V64.525C222.436 62.0673 220.444 60.075 217.987 60.075Z"
                      fill="url(#paint15_linear_374_4521)"
                    />
                    <path
                      d="M231.333 61.1875C231.333 58.7298 233.325 56.7375 235.782 56.7375C238.239 56.7375 240.231 58.7298 240.231 61.1875V173.55C240.231 176.008 238.239 178 235.782 178C233.325 178 231.333 176.008 231.333 173.55V61.1875Z"
                      fill="url(#paint16_linear_374_4521)"
                    />
                    <path
                      d="M266.923 48.95C266.923 46.4923 268.915 44.5 271.372 44.5C273.829 44.5 275.821 46.4923 275.821 48.95V173.55C275.821 176.008 273.829 178 271.372 178C268.915 178 266.923 176.008 266.923 173.55V48.95Z"
                      fill="url(#paint17_linear_374_4521)"
                    />
                    <path
                      d="M324.756 37.825C322.299 37.825 320.308 39.8173 320.308 42.275V173.55C320.308 176.008 322.299 178 324.756 178C327.213 178 329.205 176.008 329.205 173.55V42.275C329.205 39.8173 327.213 37.825 324.756 37.825Z"
                      fill="url(#paint18_linear_374_4521)"
                    />
                    <path
                      d="M22.2436 106.8C19.7866 106.8 17.7949 108.792 17.7949 111.25V173.55C17.7949 176.008 19.7866 178 22.2436 178C24.7006 178 26.6923 176.008 26.6923 173.55V111.25C26.6923 108.792 24.7006 106.8 22.2436 106.8Z"
                      fill="url(#paint19_linear_374_4521)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_374_4521"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#0B98E8" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_374_4521"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#0B98E8" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_374_4521"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#0B98E8" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_374_4521"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#0B98E8" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint4_linear_374_4521"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#0B98E8" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint5_linear_374_4521"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#0B98E8" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint6_linear_374_4521"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#0B98E8" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint7_linear_374_4521"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#0B98E8" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint8_linear_374_4521"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#0B98E8" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint9_linear_374_4521"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#0B98E8" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint10_linear_374_4521"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#0B98E8" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint11_linear_374_4521"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#0B98E8" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint12_linear_374_4521"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#0B98E8" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint13_linear_374_4521"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#0B98E8" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint14_linear_374_4521"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#0B98E8" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint15_linear_374_4521"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#0B98E8" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint16_linear_374_4521"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#0B98E8" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint17_linear_374_4521"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#0B98E8" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint18_linear_374_4521"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#0B98E8" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint19_linear_374_4521"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#0B98E8" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>
              </RowContainer>

              <RowContainer width="347px">
                <Span style={{ textAlign: "left" }}>1</Span>
                <Span>8</Span>
                <Span style={{ textAlign: "right" }}>18</Span>
              </RowContainer>

              <RowContainer>
                <RowContainer
                  justify="c"
                  gap="sm"
                  style={{
                    backgroundColor: "#F3FAFE",
                    borderRadius: "8px 0 0 8px",
                    padding: "4px 8px",
                  }}
                >
                  <IconContainer size="sm">
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.2395 14.7015C10.8368 14.3654 10.8368 13.7308 11.2395 13.3947C11.5346 13.1484 11.9159 13 12.3322 13C12.7486 13 13.1298 13.1484 13.4249 13.3947C13.8277 13.7308 13.8277 14.3654 13.4249 14.7015C13.1298 14.9478 12.7486 15.0962 12.3322 15.0962C11.9159 15.0962 11.5346 14.9478 11.2395 14.7015Z"
                        fill="#0B98E8"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.55131 8.78047C7.15273 9.47979 6.90313 10.275 6.84573 11.123C6.17657 11.7346 5.61209 12.4566 5.18186 13.2598C4.93417 13.7222 4.93417 14.2778 5.18186 14.7402C6.53912 17.274 9.23239 19 12.3332 19C15.4341 19 18.1273 17.274 19.4846 14.7402C19.7323 14.2778 19.7323 13.7222 19.4846 13.2598C19.0543 12.4564 18.4896 11.7343 17.8203 11.1226C17.7628 10.2748 17.5132 9.47967 17.1147 8.78046C17.5455 8.5169 17.833 8.04203 17.833 7.5C17.833 6.67157 17.1614 6 16.333 6C15.791 6 15.3161 6.28749 15.0525 6.71831C14.2505 6.26117 13.3222 6 12.333 6C11.3438 6 10.4155 6.26116 9.61348 6.71831C9.34991 6.28749 8.87503 6 8.33301 6C7.50458 6 6.83301 6.67157 6.83301 7.5C6.83301 8.04203 7.1205 8.5169 7.55131 8.78047ZM9.09065 15.1389C8.794 14.7063 8.794 14.1337 9.09065 13.7011C9.79465 12.6745 10.984 12 12.3325 12C13.6811 12 14.8704 12.6745 15.5744 13.7011C15.8711 14.1337 15.8711 14.7063 15.5744 15.1389C14.8704 16.1655 13.6811 16.84 12.3325 16.84C10.984 16.84 9.79465 16.1655 9.09065 15.1389Z"
                        fill="#0B98E8"
                      />
                    </svg>
                  </IconContainer>
                  <p style={{ color: "#0B98E8" }}>Bearish</p>
                </RowContainer>

                <RowContainer
                  justify="c"
                  gap="sm"
                  style={{
                    backgroundColor: "#F8F9FA",
                    padding: "4px 8px",
                  }}
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
                        d="M21.5 11.9999C21.5 15.3763 19.7017 18.3377 17 19.9998C14.5686 18.5039 12.8689 15.9559 12.5531 13H15.5C16.0523 13 16.5 12.5523 16.5 12C16.5 11.4477 16.0523 11 15.5 11H12.5531C12.8688 8.04402 14.5685 5.49585 17 4C19.7018 5.66212 21.5 8.62347 21.5 11.9999Z"
                        fill="#6C757D"
                      />
                      <path
                        d="M2.5 11.9999C2.5 15.3763 4.29829 18.3377 7.00005 19.9998C9.43145 18.5039 11.1311 15.9559 11.4469 13H8.5C7.94772 13 7.5 12.5523 7.5 12C7.5 11.4477 7.94772 11 8.5 11H11.4469C11.1312 8.04402 9.43144 5.49584 6.99995 4C4.29824 5.66212 2.5 8.62347 2.5 11.9999Z"
                        fill="#6C757D"
                      />
                    </svg>
                  </IconContainer>
                  <p style={{ color: "#6C757D" }}>Neutral</p>
                </RowContainer>

                <RowContainer
                  justify="c"
                  gap="sm"
                  style={{
                    backgroundColor: "#F5FBF9",
                    borderRadius: "0 8px 8px 0",
                    padding: "4px 8px",
                  }}
                >
                  <IconContainer size="sm">
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.81091 19C9.42903 18.5639 9.1787 17.8425 8.87254 16.9602C8.47669 15.8194 7.98752 14.4097 7 13C6.26495 11.9507 5.63944 11.2537 5.03152 10.5763C4.19106 9.63985 3.38421 8.74083 2.36799 7C0.96697 4.6 0.908595 2.66667 1.05453 2C1.63836 3.5 2.39022 4.92681 4 6C4.99168 6.66112 6.94414 6.44808 8.96323 6.22777C9.99818 6.11484 11.0506 6 12.0002 6C12.9498 6 14.0022 6.11484 15.0371 6.22777C17.0561 6.44808 19.0083 6.66112 20 6C21.6098 4.92681 22.3616 3.5 22.9455 2C23.0914 2.66667 23.033 4.6 21.632 7C20.6158 8.74083 19.8089 9.63985 18.9685 10.5763C18.3606 11.2537 17.7351 11.9507 17 13C16.0125 14.4097 15.5233 15.8194 15.1275 16.9602C14.8213 17.8425 14.571 18.5639 14.1891 19C13.9924 19.2246 13.7682 19.4019 13.5376 19.5407C13.8263 19.8008 14 20.1352 14 20.5C14 21.3284 13.1046 22 12 22C10.8954 22 10 21.3284 10 20.5C10 20.1352 10.1737 19.8008 10.4624 19.5407C10.2318 19.4019 10.0076 19.2246 9.81091 19ZM12 20C11.4477 20 11 20.2239 11 20.5C11 20.7761 11.4477 21 12 21C12.5523 21 13 20.7761 13 20.5C13 20.2239 12.5523 20 12 20Z"
                        fill="#2DAF80"
                      />
                    </svg>
                  </IconContainer>
                  <p style={{ color: "#2DAF80" }}>Bullish</p>
                </RowContainer>
              </RowContainer>
            </ColumnContainer>

            <ColumnContainer align="c" gap="lg">
              <RowContainer justify="sb">
                <RowContainer gap="md">
                  <IconContainer
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "8px",
                      backgroundColor: "#F3FAFE",
                    }}
                  >
                    <Span style={{ color: "#0B98E8" }}>B</Span>
                  </IconContainer>
                  <p>EMA (5)</p>
                </RowContainer>

                <p style={{ color: "#6c757d" }}>632.61</p>
              </RowContainer>

              <RowContainer justify="sb">
                <RowContainer gap="md">
                  <IconContainer
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "8px",
                      backgroundColor: "#F3FAFE",
                    }}
                  >
                    <Span style={{ color: "#0B98E8" }}>B</Span>
                  </IconContainer>
                  <p>EMA (5)</p>
                </RowContainer>

                <p style={{ color: "#6c757d" }}>632.61</p>
              </RowContainer>

              <RowContainer justify="sb">
                <RowContainer gap="md">
                  <IconContainer
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "8px",
                      backgroundColor: "#F3FAFE",
                    }}
                  >
                    <Span style={{ color: "#0B98E8" }}>B</Span>
                  </IconContainer>
                  <p>EMA (5)</p>
                </RowContainer>

                <p style={{ color: "#6c757d" }}>632.61</p>
              </RowContainer>

              <RowContainer justify="sb">
                <RowContainer gap="md">
                  <IconContainer
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "8px",
                      backgroundColor: "#F3FAFE",
                    }}
                  >
                    <Span style={{ color: "#0B98E8" }}>B</Span>
                  </IconContainer>
                  <p>EMA (5)</p>
                </RowContainer>

                <p style={{ color: "#6c757d" }}>632.61</p>
              </RowContainer>

              <RowContainer justify="sb">
                <RowContainer gap="md">
                  <IconContainer
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "8px",
                      backgroundColor: "#FEF7F8",
                    }}
                  >
                    <Span style={{ color: "#E95671" }}>S</Span>
                  </IconContainer>
                  <p>EMA (5)</p>
                </RowContainer>

                <p style={{ color: "#6c757d" }}>632.61</p>
              </RowContainer>

              <RowContainer justify="sb">
                <RowContainer gap="md">
                  <IconContainer
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "8px",
                      backgroundColor: "#F8F9FA",
                    }}
                  >
                    <Span style={{ color: "#6C757D" }}>N</Span>
                  </IconContainer>
                  <p>EMA (5)</p>
                </RowContainer>

                <p style={{ color: "#6c757d" }}>632.61</p>
              </RowContainer>
            </ColumnContainer>
          </LargeInfoContainer>

          <LargeInfoContainer>
            <SmallTitle title="Oscillators" />

            <ColumnContainer align="c" gap="md">
              <RowContainer
                style={{ position: "relative" }}
                width="fit-content"
              >
                <svg
                  width="347"
                  height="178"
                  viewBox="0 0 347 178"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M338.103 4.49998C338.103 2.04303 340.094 0.0512695 342.551 0.0512695C345.008 0.0512695 347 2.04303 347 4.49999V173.551C347 176.008 345.008 178 342.551 178C340.094 178 338.103 176.008 338.103 173.551V4.49998Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M302.513 26.7436C302.513 24.2867 304.505 22.2949 306.962 22.2949C309.419 22.2949 311.41 24.2867 311.41 26.7436V173.551C311.41 176.008 309.419 178 306.962 178C304.505 178 302.513 176.008 302.513 173.551V26.7436Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M289.167 28.968C286.71 28.968 284.718 30.9597 284.718 33.4167V173.551C284.718 176.008 286.71 178 289.167 178C291.624 178 293.615 176.008 293.615 173.551V33.4167C293.615 30.9598 291.624 28.968 289.167 28.968Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M253.577 37.8654C251.12 37.8654 249.128 39.8572 249.128 42.3142V173.551C249.128 176.008 251.12 178 253.577 178C256.034 178 258.026 176.008 258.026 173.551V42.3142C258.026 39.8572 256.034 37.8654 253.577 37.8654Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M195.744 45.6507C195.744 43.1937 197.735 41.202 200.192 41.202C202.649 41.202 204.641 43.1937 204.641 45.6507V173.551C204.641 176.008 202.649 178 200.192 178C197.735 178 195.744 176.008 195.744 173.551V45.6507Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M182.397 50.0994C179.94 50.0994 177.949 52.0912 177.949 54.5481V173.551C177.949 176.008 179.94 178 182.397 178C184.854 178 186.846 176.008 186.846 173.551V54.5481C186.846 52.0912 184.854 50.0994 182.397 50.0994Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M124.564 61.2212C124.564 58.7642 126.556 56.7725 129.013 56.7725C131.47 56.7725 133.462 58.7642 133.462 61.2212V173.551C133.462 176.008 131.47 178 129.013 178C126.556 178 124.564 176.008 124.564 173.551V61.2212Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M88.9744 83.4648C88.9744 81.0078 90.9661 79.0161 93.4231 79.0161C95.88 79.0161 97.8718 81.0078 97.8718 83.4648V173.551C97.8718 176.008 95.88 178 93.4231 178C90.9661 178 88.9744 176.008 88.9744 173.551V83.4648Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M75.6282 94.5866C73.1712 94.5866 71.1795 96.5784 71.1795 99.0353V173.551C71.1795 176.008 73.1712 178 75.6282 178C78.0852 178 80.0769 176.008 80.0769 173.551V99.0353C80.0769 96.5784 78.0852 94.5866 75.6282 94.5866Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M53.3846 109.045C53.3846 106.588 55.3764 104.596 57.8333 104.596C60.2903 104.596 62.2821 106.588 62.2821 109.045V173.551C62.2821 176.008 60.2903 178 57.8333 178C55.3764 178 53.3846 176.008 53.3846 173.551V109.045Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M40.0385 113.494C37.5815 113.494 35.5897 115.485 35.5897 117.942V173.551C35.5897 176.008 37.5815 178 40.0385 178C42.4954 178 44.4872 176.008 44.4872 173.551V117.942C44.4872 115.485 42.4954 113.494 40.0385 113.494Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M4.44872 127.952C1.99176 127.952 0 129.944 0 132.401V173.551C0 176.008 1.99176 178 4.44872 178C6.90568 178 8.89744 176.008 8.89744 173.551V132.401C8.89744 129.944 6.90568 127.952 4.44872 127.952Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M111.218 94.5866C108.761 94.5866 106.769 96.5784 106.769 99.0353V173.551C106.769 176.008 108.761 178 111.218 178C113.675 178 115.667 176.008 115.667 173.551V99.0353C115.667 96.5784 113.675 94.5866 111.218 94.5866Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M146.808 64.5577C144.351 64.5577 142.359 66.5495 142.359 69.0065V173.551C142.359 176.008 144.351 178 146.808 178C149.265 178 151.256 176.008 151.256 173.551V69.0065C151.256 66.5495 149.265 64.5577 146.808 64.5577Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M160.154 83.4648C160.154 81.0078 162.146 79.0161 164.603 79.0161C167.06 79.0161 169.051 81.0078 169.051 83.4648V173.551C169.051 176.008 167.06 178 164.603 178C162.146 178 160.154 176.008 160.154 173.551V83.4648Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M217.987 60.109C215.53 60.109 213.538 62.1008 213.538 64.5577V173.551C213.538 176.008 215.53 178 217.987 178C220.444 178 222.436 176.008 222.436 173.551V64.5577C222.436 62.1008 220.444 60.109 217.987 60.109Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M231.333 61.2212C231.333 58.7642 233.325 56.7725 235.782 56.7725C238.239 56.7725 240.231 58.7642 240.231 61.2212V173.551C240.231 176.008 238.239 178 235.782 178C233.325 178 231.333 176.008 231.333 173.551V61.2212Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M266.923 48.9872C266.923 46.5303 268.915 44.5385 271.372 44.5385C273.829 44.5385 275.821 46.5303 275.821 48.9872V173.551C275.821 176.008 273.829 178 271.372 178C268.915 178 266.923 176.008 266.923 173.551V48.9872Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M324.756 37.8654C322.299 37.8654 320.308 39.8572 320.308 42.3142V173.551C320.308 176.008 322.299 178 324.756 178C327.213 178 329.205 176.008 329.205 173.551V42.3142C329.205 39.8572 327.213 37.8654 324.756 37.8654Z"
                    fill="#F3F8FA"
                  />
                  <path
                    d="M22.2436 106.821C19.7866 106.821 17.7949 108.812 17.7949 111.269V173.551C17.7949 176.008 19.7866 178 22.2436 178C24.7006 178 26.6923 176.008 26.6923 173.551V111.269C26.6923 108.812 24.7006 106.821 22.2436 106.821Z"
                    fill="#F3F8FA"
                  />
                </svg>
                <motion.div
                  style={{
                    top: "0",
                    position: "absolute",
                    overflow: "hidden",
                    width: "0%",
                  }}
                  animate={{ width: "40%" }}
                >
                  <svg
                    width="347"
                    height="178"
                    viewBox="0 0 347 178"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M338.103 4.45C338.103 1.99233 340.094 3.44813e-06 342.551 3.44813e-06C345.008 3.44813e-06 347 1.99234 347 4.45V173.55C347 176.008 345.008 178 342.551 178C340.094 178 338.103 176.008 338.103 173.55V4.45Z"
                      fill="url(#paint0_linear_374_4675)"
                    />
                    <path
                      d="M302.513 26.6999C302.513 24.2423 304.505 22.2499 306.962 22.2499C309.419 22.2499 311.41 24.2423 311.41 26.6999V173.55C311.41 176.008 309.419 178 306.962 178C304.505 178 302.513 176.008 302.513 173.55V26.6999Z"
                      fill="url(#paint1_linear_374_4675)"
                    />
                    <path
                      d="M289.167 28.925C286.71 28.925 284.718 30.9173 284.718 33.3749V173.55C284.718 176.008 286.71 178 289.167 178C291.624 178 293.615 176.008 293.615 173.55V33.375C293.615 30.9173 291.624 28.925 289.167 28.925Z"
                      fill="url(#paint2_linear_374_4675)"
                    />
                    <path
                      d="M253.577 37.825C251.12 37.825 249.128 39.8173 249.128 42.275V173.55C249.128 176.008 251.12 178 253.577 178C256.034 178 258.026 176.008 258.026 173.55V42.275C258.026 39.8173 256.034 37.825 253.577 37.825Z"
                      fill="url(#paint3_linear_374_4675)"
                    />
                    <path
                      d="M195.744 45.6125C195.744 43.1548 197.735 41.1625 200.192 41.1625C202.649 41.1625 204.641 43.1548 204.641 45.6125V173.55C204.641 176.008 202.649 178 200.192 178C197.735 178 195.744 176.008 195.744 173.55V45.6125Z"
                      fill="url(#paint4_linear_374_4675)"
                    />
                    <path
                      d="M182.397 50.0625C179.94 50.0625 177.949 52.0548 177.949 54.5125V173.55C177.949 176.008 179.94 178 182.397 178C184.854 178 186.846 176.008 186.846 173.55V54.5125C186.846 52.0548 184.854 50.0625 182.397 50.0625Z"
                      fill="url(#paint5_linear_374_4675)"
                    />
                    <path
                      d="M124.564 61.1875C124.564 58.7298 126.556 56.7375 129.013 56.7375C131.47 56.7375 133.462 58.7298 133.462 61.1875V173.55C133.462 176.008 131.47 178 129.013 178C126.556 178 124.564 176.008 124.564 173.55V61.1875Z"
                      fill="url(#paint6_linear_374_4675)"
                    />
                    <path
                      d="M88.9744 83.4375C88.9744 80.9798 90.9661 78.9875 93.4231 78.9875C95.88 78.9875 97.8718 80.9798 97.8718 83.4375V173.55C97.8718 176.008 95.88 178 93.4231 178C90.9661 178 88.9744 176.008 88.9744 173.55V83.4375Z"
                      fill="url(#paint7_linear_374_4675)"
                    />
                    <path
                      d="M75.6282 94.5625C73.1712 94.5625 71.1795 96.5548 71.1795 99.0125V173.55C71.1795 176.008 73.1712 178 75.6282 178C78.0852 178 80.0769 176.008 80.0769 173.55V99.0125C80.0769 96.5548 78.0852 94.5625 75.6282 94.5625Z"
                      fill="url(#paint8_linear_374_4675)"
                    />
                    <path
                      d="M53.3846 109.025C53.3846 106.567 55.3764 104.575 57.8333 104.575C60.2903 104.575 62.2821 106.567 62.2821 109.025V173.55C62.2821 176.008 60.2903 178 57.8333 178C55.3764 178 53.3846 176.008 53.3846 173.55V109.025Z"
                      fill="url(#paint9_linear_374_4675)"
                    />
                    <path
                      d="M40.0385 113.475C37.5815 113.475 35.5897 115.467 35.5897 117.925V173.55C35.5897 176.008 37.5815 178 40.0385 178C42.4954 178 44.4872 176.008 44.4872 173.55V117.925C44.4872 115.467 42.4954 113.475 40.0385 113.475Z"
                      fill="url(#paint10_linear_374_4675)"
                    />
                    <path
                      d="M4.44872 127.937C1.99176 127.937 0 129.93 0 132.387V173.55C0 176.008 1.99176 178 4.44872 178C6.90568 178 8.89744 176.008 8.89744 173.55V132.387C8.89744 129.93 6.90568 127.937 4.44872 127.937Z"
                      fill="url(#paint11_linear_374_4675)"
                    />
                    <path
                      d="M111.218 94.5625C108.761 94.5625 106.769 96.5548 106.769 99.0125V173.55C106.769 176.008 108.761 178 111.218 178C113.675 178 115.667 176.008 115.667 173.55V99.0125C115.667 96.5548 113.675 94.5625 111.218 94.5625Z"
                      fill="url(#paint12_linear_374_4675)"
                    />
                    <path
                      d="M146.808 64.525C144.351 64.525 142.359 66.5173 142.359 68.975V173.55C142.359 176.008 144.351 178 146.808 178C149.265 178 151.256 176.008 151.256 173.55V68.975C151.256 66.5173 149.265 64.525 146.808 64.525Z"
                      fill="url(#paint13_linear_374_4675)"
                    />
                    <path
                      d="M160.154 83.4375C160.154 80.9798 162.146 78.9875 164.603 78.9875C167.06 78.9875 169.051 80.9798 169.051 83.4375V173.55C169.051 176.008 167.06 178 164.603 178C162.146 178 160.154 176.008 160.154 173.55V83.4375Z"
                      fill="url(#paint14_linear_374_4675)"
                    />
                    <path
                      d="M217.987 60.075C215.53 60.075 213.538 62.0673 213.538 64.525V173.55C213.538 176.008 215.53 178 217.987 178C220.444 178 222.436 176.008 222.436 173.55V64.525C222.436 62.0673 220.444 60.075 217.987 60.075Z"
                      fill="url(#paint15_linear_374_4675)"
                    />
                    <path
                      d="M231.333 61.1875C231.333 58.7298 233.325 56.7375 235.782 56.7375C238.239 56.7375 240.231 58.7298 240.231 61.1875V173.55C240.231 176.008 238.239 178 235.782 178C233.325 178 231.333 176.008 231.333 173.55V61.1875Z"
                      fill="url(#paint16_linear_374_4675)"
                    />
                    <path
                      d="M266.923 48.95C266.923 46.4923 268.915 44.5 271.372 44.5C273.829 44.5 275.821 46.4923 275.821 48.95V173.55C275.821 176.008 273.829 178 271.372 178C268.915 178 266.923 176.008 266.923 173.55V48.95Z"
                      fill="url(#paint17_linear_374_4675)"
                    />
                    <path
                      d="M324.756 37.825C322.299 37.825 320.308 39.8173 320.308 42.275V173.55C320.308 176.008 322.299 178 324.756 178C327.213 178 329.205 176.008 329.205 173.55V42.275C329.205 39.8173 327.213 37.825 324.756 37.825Z"
                      fill="url(#paint18_linear_374_4675)"
                    />
                    <path
                      d="M22.2436 106.8C19.7866 106.8 17.7949 108.792 17.7949 111.25V173.55C17.7949 176.008 19.7866 178 22.2436 178C24.7006 178 26.6923 176.008 26.6923 173.55V111.25C26.6923 108.792 24.7006 106.8 22.2436 106.8Z"
                      fill="url(#paint19_linear_374_4675)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_374_4675"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#A10BE8" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_374_4675"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#A10BE8" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_374_4675"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#A10BE8" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_374_4675"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#A10BE8" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint4_linear_374_4675"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#A10BE8" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint5_linear_374_4675"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#A10BE8" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint6_linear_374_4675"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#A10BE8" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint7_linear_374_4675"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#A10BE8" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint8_linear_374_4675"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#A10BE8" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint9_linear_374_4675"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#A10BE8" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint10_linear_374_4675"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#A10BE8" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint11_linear_374_4675"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#A10BE8" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint12_linear_374_4675"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#A10BE8" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint13_linear_374_4675"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#A10BE8" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint14_linear_374_4675"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#A10BE8" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint15_linear_374_4675"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#A10BE8" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint16_linear_374_4675"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#A10BE8" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint17_linear_374_4675"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#A10BE8" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint18_linear_374_4675"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#A10BE8" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                      <linearGradient
                        id="paint19_linear_374_4675"
                        x1="0"
                        y1="1.1125"
                        x2="347"
                        y2="1.1125"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#A10BE8" />
                        <stop offset="1" stop-color="#2DAF80" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>
              </RowContainer>

              <RowContainer width="347px">
                <Span style={{ textAlign: "left" }}>1</Span>
                <Span>8</Span>
                <Span style={{ textAlign: "right" }}>18</Span>
              </RowContainer>

              <RowContainer>
                <RowContainer
                  justify="c"
                  gap="sm"
                  style={{
                    backgroundColor: "#FAF3FE",
                    borderRadius: "8px 0 0 8px",
                    padding: "4px 8px",
                  }}
                >
                  <IconContainer size="sm">
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.2395 14.7015C10.8368 14.3654 10.8368 13.7308 11.2395 13.3947C11.5346 13.1484 11.9159 13 12.3322 13C12.7486 13 13.1298 13.1484 13.4249 13.3947C13.8277 13.7308 13.8277 14.3654 13.4249 14.7015C13.1298 14.9478 12.7486 15.0962 12.3322 15.0962C11.9159 15.0962 11.5346 14.9478 11.2395 14.7015Z"
                        fill="#A10BE8"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.55131 8.78047C7.15273 9.47979 6.90313 10.275 6.84573 11.123C6.17657 11.7346 5.61209 12.4566 5.18186 13.2598C4.93417 13.7222 4.93417 14.2778 5.18186 14.7402C6.53912 17.274 9.23239 19 12.3332 19C15.4341 19 18.1273 17.274 19.4846 14.7402C19.7323 14.2778 19.7323 13.7222 19.4846 13.2598C19.0543 12.4564 18.4896 11.7343 17.8203 11.1226C17.7628 10.2748 17.5132 9.47967 17.1147 8.78046C17.5455 8.5169 17.833 8.04203 17.833 7.5C17.833 6.67157 17.1614 6 16.333 6C15.791 6 15.3161 6.28749 15.0525 6.71831C14.2505 6.26117 13.3222 6 12.333 6C11.3438 6 10.4155 6.26116 9.61348 6.71831C9.34991 6.28749 8.87503 6 8.33301 6C7.50458 6 6.83301 6.67157 6.83301 7.5C6.83301 8.04203 7.1205 8.5169 7.55131 8.78047ZM9.09065 15.1389C8.794 14.7063 8.794 14.1337 9.09065 13.7011C9.79465 12.6745 10.984 12 12.3325 12C13.6811 12 14.8704 12.6745 15.5744 13.7011C15.8711 14.1337 15.8711 14.7063 15.5744 15.1389C14.8704 16.1655 13.6811 16.84 12.3325 16.84C10.984 16.84 9.79465 16.1655 9.09065 15.1389Z"
                        fill="#A10BE8"
                      />
                    </svg>
                  </IconContainer>
                  <p style={{ color: "#A10BE8" }}>Bearish</p>
                </RowContainer>

                <RowContainer
                  justify="c"
                  gap="sm"
                  style={{
                    backgroundColor: "#F8F9FA",
                    padding: "4px 8px",
                  }}
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
                        d="M21.5 11.9999C21.5 15.3763 19.7017 18.3377 17 19.9998C14.5686 18.5039 12.8689 15.9559 12.5531 13H15.5C16.0523 13 16.5 12.5523 16.5 12C16.5 11.4477 16.0523 11 15.5 11H12.5531C12.8688 8.04402 14.5685 5.49585 17 4C19.7018 5.66212 21.5 8.62347 21.5 11.9999Z"
                        fill="#6C757D"
                      />
                      <path
                        d="M2.5 11.9999C2.5 15.3763 4.29829 18.3377 7.00005 19.9998C9.43145 18.5039 11.1311 15.9559 11.4469 13H8.5C7.94772 13 7.5 12.5523 7.5 12C7.5 11.4477 7.94772 11 8.5 11H11.4469C11.1312 8.04402 9.43144 5.49584 6.99995 4C4.29824 5.66212 2.5 8.62347 2.5 11.9999Z"
                        fill="#6C757D"
                      />
                    </svg>
                  </IconContainer>
                  <p style={{ color: "#6C757D" }}>Neutral</p>
                </RowContainer>

                <RowContainer
                  justify="c"
                  gap="sm"
                  style={{
                    backgroundColor: "#F5FBF9",
                    borderRadius: "0 8px 8px 0",
                    padding: "4px 8px",
                  }}
                >
                  <IconContainer size="sm">
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.81091 19C9.42903 18.5639 9.1787 17.8425 8.87254 16.9602C8.47669 15.8194 7.98752 14.4097 7 13C6.26495 11.9507 5.63944 11.2537 5.03152 10.5763C4.19106 9.63985 3.38421 8.74083 2.36799 7C0.96697 4.6 0.908595 2.66667 1.05453 2C1.63836 3.5 2.39022 4.92681 4 6C4.99168 6.66112 6.94414 6.44808 8.96323 6.22777C9.99818 6.11484 11.0506 6 12.0002 6C12.9498 6 14.0022 6.11484 15.0371 6.22777C17.0561 6.44808 19.0083 6.66112 20 6C21.6098 4.92681 22.3616 3.5 22.9455 2C23.0914 2.66667 23.033 4.6 21.632 7C20.6158 8.74083 19.8089 9.63985 18.9685 10.5763C18.3606 11.2537 17.7351 11.9507 17 13C16.0125 14.4097 15.5233 15.8194 15.1275 16.9602C14.8213 17.8425 14.571 18.5639 14.1891 19C13.9924 19.2246 13.7682 19.4019 13.5376 19.5407C13.8263 19.8008 14 20.1352 14 20.5C14 21.3284 13.1046 22 12 22C10.8954 22 10 21.3284 10 20.5C10 20.1352 10.1737 19.8008 10.4624 19.5407C10.2318 19.4019 10.0076 19.2246 9.81091 19ZM12 20C11.4477 20 11 20.2239 11 20.5C11 20.7761 11.4477 21 12 21C12.5523 21 13 20.7761 13 20.5C13 20.2239 12.5523 20 12 20Z"
                        fill="#2DAF80"
                      />
                    </svg>
                  </IconContainer>
                  <p style={{ color: "#2DAF80" }}>Bullish</p>
                </RowContainer>
              </RowContainer>
            </ColumnContainer>

            <ColumnContainer align="c" gap="lg">
              <RowContainer justify="sb">
                <RowContainer gap="md">
                  <IconContainer
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "8px",
                      backgroundColor: "#F3FAFE",
                    }}
                  >
                    <Span style={{ color: "#0B98E8" }}>B</Span>
                  </IconContainer>
                  <p>EMA (5)</p>
                </RowContainer>

                <p style={{ color: "#6c757d" }}>632.61</p>
              </RowContainer>

              <RowContainer justify="sb">
                <RowContainer gap="md">
                  <IconContainer
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "8px",
                      backgroundColor: "#F3FAFE",
                    }}
                  >
                    <Span style={{ color: "#0B98E8" }}>B</Span>
                  </IconContainer>
                  <p>EMA (5)</p>
                </RowContainer>

                <p style={{ color: "#6c757d" }}>632.61</p>
              </RowContainer>

              <RowContainer justify="sb">
                <RowContainer gap="md">
                  <IconContainer
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "8px",
                      backgroundColor: "#F3FAFE",
                    }}
                  >
                    <Span style={{ color: "#0B98E8" }}>B</Span>
                  </IconContainer>
                  <p>EMA (5)</p>
                </RowContainer>

                <p style={{ color: "#6c757d" }}>632.61</p>
              </RowContainer>

              <RowContainer justify="sb">
                <RowContainer gap="md">
                  <IconContainer
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "8px",
                      backgroundColor: "#F3FAFE",
                    }}
                  >
                    <Span style={{ color: "#0B98E8" }}>B</Span>
                  </IconContainer>
                  <p>EMA (5)</p>
                </RowContainer>

                <p style={{ color: "#6c757d" }}>632.61</p>
              </RowContainer>

              <RowContainer justify="sb">
                <RowContainer gap="md">
                  <IconContainer
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "8px",
                      backgroundColor: "#FEF7F8",
                    }}
                  >
                    <Span style={{ color: "#E95671" }}>S</Span>
                  </IconContainer>
                  <p>EMA (5)</p>
                </RowContainer>

                <p style={{ color: "#6c757d" }}>632.61</p>
              </RowContainer>

              <RowContainer justify="sb">
                <RowContainer gap="md">
                  <IconContainer
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "8px",
                      backgroundColor: "#F8F9FA",
                    }}
                  >
                    <Span style={{ color: "#6C757D" }}>N</Span>
                  </IconContainer>
                  <p>EMA (5)</p>
                </RowContainer>

                <p style={{ color: "#6c757d" }}>632.61</p>
              </RowContainer>
            </ColumnContainer>
          </LargeInfoContainer>
        </FlexWrap>
      </React.Fragment>
    }
    sidepanel={<SidePanel />}
  ></PageWrapper>
);

export default ScannerSingle;
