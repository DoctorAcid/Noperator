import React, { useEffect, useState } from "react";
import CreationCont from "../../components/Card/CreationCont";
import SidePanel from "../../components/Card/SidePanel";
import Strategy from "../../components/Card/Strategy";
import StrategyMain from "../../components/Card/StrategyMain";
import ColumnContainer from "../../components/ColumnContainer/ColumnContainer";
import Header from "../../components/Header";
import HorizoantalScroll from "../../components/HorizoantalScroll/HorizoantalScroll";
import IconContainer from "../../components/IconContainer/IconContainer";
import NoContent from "../../components/NoContent/NoContent";
import PageWrapper from "../../components/PageWrapper";
import Title from "../../components/Title/Title";

const Strategies = () => {
  const [strategy, setStrategy] = useState(true);

  useEffect(() => {
    setStrategy(true);
  }, []);

  return (
    <PageWrapper
      header={<Header title="Stragtegies" />}
      content={
        <React.Fragment>
          <ColumnContainer gap="md">
            <Title filterOff={true} titleName="My strategies" />
            {strategy ? (
              <HorizoantalScroll>
                <React.Fragment>
                  <CreationCont title="Strategies" />
                  <Strategy
                    title="Bolling band and RSI"
                    stocks={22}
                    date="10 Nov 2022"
                    percentage={160}
                  />
                  <Strategy
                    title="Nothing Spaecial"
                    stocks={22}
                    date="10 Nov 2022"
                    percentage={120}
                  />
                  <Strategy
                    title="Sky Rocketing"
                    stocks={22}
                    date="10 Nov 2022"
                    percentage={80}
                  />
                  <Strategy
                    title="jkband and RSI"
                    stocks={22}
                    date="10 Nov 2022"
                    percentage={200}
                  />
                  <Strategy
                    title="Bolling band and RSI"
                    stocks={22}
                    date="10 Nov 2022"
                    percentage={160}
                  />
                  <Strategy
                    title="Nothing Spaecial"
                    stocks={22}
                    date="10 Nov 2022"
                    percentage={120}
                  />
                  <Strategy
                    title="Sky Rocketing"
                    stocks={22}
                    date="10 Nov 2022"
                    percentage={80}
                  />
                  <Strategy
                    title="jkband and RSI"
                    stocks={22}
                    date="10 Nov 2022"
                    percentage={200}
                  />
                </React.Fragment>
              </HorizoantalScroll>
            ) : (
              <NoContent
                children={
                  <IconContainer size="xl">
                    <svg
                      width="96"
                      height="96"
                      viewBox="0 0 96 96"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="12"
                        y="12"
                        width="72"
                        height="72"
                        rx="11"
                        fill="#2DAF80"
                        fill-opacity="0.3"
                      />
                      <rect
                        x="8"
                        y="8"
                        width="80"
                        height="80"
                        rx="15"
                        stroke="#2DAF80"
                        stroke-width="2"
                      />
                      <path
                        d="M40.8457 30.8452C41.4965 30.1943 41.4965 29.139 40.8457 28.4882C40.1948 27.8373 39.1395 27.8373 38.4886 28.4882L34.6672 32.3096L30.8457 28.4882C30.1948 27.8373 29.1395 27.8373 28.4886 28.4882C27.8378 29.139 27.8378 30.1943 28.4886 30.8452L32.3101 34.6667L28.4886 38.4882C27.8378 39.139 27.8378 40.1943 28.4886 40.8452C29.1395 41.496 30.1948 41.496 30.8457 40.8452L34.6672 37.0237L38.4886 40.8452C39.1395 41.496 40.1948 41.496 40.8457 40.8452C41.4965 40.1943 41.4965 39.139 40.8457 38.4882L37.0242 34.6667L40.8457 30.8452Z"
                        fill="#2DAF80"
                      />
                      <path
                        d="M68.0005 34.6667C68.0005 38.3486 65.0157 41.3333 61.3338 41.3333C60.0974 41.3333 58.9397 40.9968 57.9471 40.4103L40.4108 57.9467C40.9973 58.9392 41.3338 60.0969 41.3338 61.3333C41.3338 65.0152 38.349 68 34.6672 68C30.9853 68 28.0005 65.0152 28.0005 61.3333C28.0005 57.6514 30.9853 54.6667 34.6672 54.6667C35.9035 54.6667 37.0612 55.0032 38.0537 55.5897L55.5901 38.0532C55.0037 37.0607 54.6671 35.903 54.6671 34.6667C54.6671 30.9848 57.6519 28 61.3338 28C65.0157 28 68.0005 30.9848 68.0005 34.6667Z"
                        fill="#2DAF80"
                      />
                      <path
                        d="M67.5122 55.1548C68.163 55.8057 68.163 56.8609 67.5122 57.5118L63.6907 61.3333L67.5122 65.1548C68.163 65.8056 68.163 66.8609 67.5122 67.5118C66.8613 68.1627 65.806 68.1627 65.1551 67.5118L61.3337 63.6903L57.5122 67.5118C56.8613 68.1627 55.806 68.1627 55.1551 67.5118C54.5043 66.8609 54.5043 65.8056 55.1551 65.1548L58.9766 61.3333L55.1551 57.5118C54.5043 56.8609 54.5043 55.8057 55.1551 55.1548C55.806 54.5039 56.8613 54.5039 57.5122 55.1548L61.3337 58.9763L65.1551 55.1548C65.806 54.5039 66.8613 54.5039 67.5122 55.1548Z"
                        fill="#2DAF80"
                      />
                    </svg>
                  </IconContainer>
                }
              />
            )}
          </ColumnContainer>
          <ColumnContainer gap="md">
            <Title viewallOff={true} titleName="discover strategies" />
            <ColumnContainer gap="md">
              <StrategyMain />
              <StrategyMain />
              <StrategyMain />
              <StrategyMain />
              <StrategyMain />
            </ColumnContainer>
          </ColumnContainer>
        </React.Fragment>
      }
      sidepanel={<SidePanel />}
    />
  );
};

export default Strategies;
