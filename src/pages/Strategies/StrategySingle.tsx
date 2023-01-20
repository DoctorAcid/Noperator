import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ColumnContainer from "../../components/ColumnContainer/ColumnContainer";
import Header from "../../components/Header";
import IconContainer from "../../components/IconContainer/IconContainer";
import PageWrapper from "../../components/PageWrapper";
import RowContainer from "../../components/RowContainer/RowContainer";
import { motion } from "framer-motion";
import { ThirdyButton } from "../../components/Buttons/Buttons";
import Title from "../../components/Title/Title";
import HorizoantalScroll from "../../components/HorizoantalScroll/HorizoantalScroll";
import StockMain from "../../components/Card/StockMain";
import { StockIcons } from "../../components/StockIcons/StockIcons";
import HeroImg from "../../images/stocks/hero.png";
import ToggleButton from "../../components/Buttons/ToggleButton";

const BacktestTitle = styled(RowContainer)`
  padding: 12px 16px;
  background-color: #2daf800d;
  border-radius: 16px;
  justify-content: space-between;
  z-index: 1;
`;

const H3 = styled.h3`
  text-transform: uppercase;
`;

const Divider = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 2px;
  height: 40px;
  background-color: #2daf80;
`;

const P = styled.p`
  color: #2daf80;
`;

const StrategySingle = () => {
  const textContainer = useRef<HTMLDivElement>(null);

  const [readMore, setReadMore] = useState(false);
  const [toggleButton, setToggleButton] = useState(false);
  const [switchButton, setSwitchButton] = useState(false);

  useEffect(() => {
    if (textContainer.current) {
      const height = textContainer.current.offsetHeight;
      if (height > 96) {
        setToggleButton(true);
        setReadMore(true);
      }
      if (height < 96) {
        setToggleButton(false);
      }
    }
  }, []);

  return (
    <PageWrapper
      header={<Header title="strategy" backButton={true} />}
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
                  <rect
                    x="6"
                    y="6"
                    width="52"
                    height="52"
                    rx="26"
                    stroke="#2DAF80"
                    stroke-width="2"
                  />
                  <rect
                    x="9"
                    y="9"
                    width="46"
                    height="46"
                    rx="23"
                    fill="#2DAF80"
                    fill-opacity="0.3"
                  />
                  <path
                    d="M43 24.6667C43 26.6917 41.3584 28.3333 39.3333 28.3333C38.6533 28.3333 38.0166 28.1482 37.4707 27.8257L27.8257 37.4707C28.1482 38.0166 28.3333 38.6533 28.3333 39.3333C28.3333 41.3584 26.6917 43 24.6667 43C22.6416 43 21 41.3584 21 39.3333C21 37.3083 22.6416 35.6667 24.6667 35.6667C25.3466 35.6667 25.9834 35.8518 26.5293 36.1743L36.1743 26.5293C35.8518 25.9834 35.6667 25.3466 35.6667 24.6667C35.6667 22.6416 37.3083 21 39.3333 21C41.3584 21 43 22.6416 43 24.6667Z"
                    fill="#2DAF80"
                  />
                  <path
                    d="M29.1517 22.8056C29.5648 22.3925 29.5648 21.7228 29.1517 21.3098C28.7387 20.8967 28.069 20.8967 27.6559 21.3098L25.2308 23.735L22.8056 21.3098C22.3925 20.8967 21.7228 20.8967 21.3098 21.3098C20.8967 21.7228 20.8967 22.3925 21.3098 22.8056L23.735 25.2308L21.3098 27.6559C20.8967 28.069 20.8967 28.7387 21.3098 29.1517C21.7228 29.5648 22.3925 29.5648 22.8056 29.1517L25.2308 26.7266L27.6559 29.1517C28.069 29.5648 28.7387 29.5648 29.1517 29.1517C29.5648 28.7387 29.5648 28.069 29.1517 27.6559L26.7266 25.2308L29.1517 22.8056Z"
                    fill="#2DAF80"
                  />
                  <path
                    d="M42.6908 36.3442C43.1039 35.9311 43.1039 35.2614 42.6908 34.8484C42.2778 34.4353 41.6081 34.4353 41.195 34.8484L38.7698 37.2735L36.3447 34.8484C35.9316 34.4353 35.2619 34.4353 34.8489 34.8484C34.4358 35.2614 34.4358 35.9311 34.8489 36.3442L37.274 38.7693L34.8489 41.1945C34.4358 41.6076 34.4358 42.2773 34.8489 42.6903C35.2619 43.1034 35.9316 43.1034 36.3447 42.6903L38.7698 40.2651L41.195 42.6903C41.6081 43.1034 42.2778 43.1034 42.6908 42.6903C43.1039 42.2773 43.1039 41.6076 42.6908 41.1945L40.2656 38.7693L42.6908 36.3442Z"
                    fill="#2DAF80"
                  />
                </svg>
              </IconContainer>
              <ColumnContainer gap="sm" ref={textContainer}>
                <h3>Bollinger Band and RSI</h3>
                <motion.p
                  style={{ overflow: "hidden" }}
                  animate={{ height: readMore ? "58px" : "" }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </motion.p>
                {toggleButton ? (
                  <ThirdyButton
                    onClick={() => setReadMore(!readMore)}
                    width="fit-content"
                  >
                    {readMore ? "Read More" : "Read Less"}
                  </ThirdyButton>
                ) : null}
              </ColumnContainer>
            </RowContainer>

            <ColumnContainer gap="md">
              <Title
                titleName="backtest Results"
                viewallOff={true}
                filterOff={true}
                primaryButton="Deploy all"
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
              <BacktestTitle>
                <RowContainer gap="md">
                  <IconContainer size="md">
                    <StockIcons>
                      <img src={HeroImg} alt="" />
                    </StockIcons>
                  </IconContainer>
                  <H3>hero motors</H3>
                  <Divider />
                  <p>Backtest P&L</p>
                  <P>599.10 (+0.17%)</P>
                </RowContainer>
                <RowContainer gap="sm" width="fit-content">
                  <P>Brokarage</P>
                  <ToggleButton
                    switchButton={switchButton}
                    setSwitchButton={setSwitchButton}
                  />
                </RowContainer>
              </BacktestTitle>
            </ColumnContainer>
          </ColumnContainer>
        </React.Fragment>
      }
      sidepanel={<></>}
    ></PageWrapper>
  );
};

export default StrategySingle;
