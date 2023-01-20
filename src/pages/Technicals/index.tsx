import React, { useEffect, useState } from "react";
import CreationCont from "../../components/Card/CreationCont";
import SidePanel from "../../components/Card/SidePanel";
import Strategy from "../../components/Card/Strategy";
import ColumnContainer from "../../components/ColumnContainer/ColumnContainer";
import Header from "../../components/Header";
import HorizoantalScroll from "../../components/HorizoantalScroll/HorizoantalScroll";
import IconContainer from "../../components/IconContainer/IconContainer";
import NoContent from "../../components/NoContent/NoContent";
import PageWrapper from "../../components/PageWrapper";
import Table from "../../components/Table/Table";
import Title from "../../components/Title/Title";

const Technicals = () => {
  const [strategy, setStrategy] = useState(false);

  useEffect(() => {
    setStrategy(true);
  }, []);

  return (
    <PageWrapper
      header={<Header title="Technicals" />}
      content={
        <React.Fragment>
          <ColumnContainer gap="md">
            <Title titleName="my watchlist" filterOff={true}></Title>
            {strategy ? (
              <HorizoantalScroll>
                <React.Fragment>
                  <CreationCont title="Technicals" />
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
                        x="18.5"
                        y="11.5"
                        width="54"
                        height="70"
                        rx="4"
                        fill="#E95671"
                        fill-opacity="0.3"
                      />
                      <path
                        d="M24.5 15.5C23.3954 15.5 22.5 16.3954 22.5 17.5V27.5C22.5 28.6046 23.3954 29.5 24.5 29.5H34.5C35.6046 29.5 36.5 28.6046 36.5 27.5V17.5C36.5 16.3954 35.6046 15.5 34.5 15.5H24.5Z"
                        fill="#E95671"
                      />
                      <path
                        d="M42.5 17.5C41.3954 17.5 40.5 18.3954 40.5 19.5C40.5 20.6046 41.3954 21.5 42.5 21.5H64.5C65.6046 21.5 66.5 20.6046 66.5 19.5C66.5 18.3954 65.6046 17.5 64.5 17.5H42.5Z"
                        fill="#E95671"
                      />
                      <path
                        d="M40.5 25.5C40.5 24.3954 41.3954 23.5 42.5 23.5H54.5C55.6046 23.5 56.5 24.3954 56.5 25.5C56.5 26.6046 55.6046 27.5 54.5 27.5H42.5C41.3954 27.5 40.5 26.6046 40.5 25.5Z"
                        fill="#E95671"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.5 14.5C13.5 10.0817 17.0817 6.5 21.5 6.5H69.5C73.9183 6.5 77.5 10.0817 77.5 14.5V78.5C77.5 82.9183 73.9183 86.5 69.5 86.5H21.5C17.0817 86.5 13.5 82.9183 13.5 78.5V14.5ZM21.5 8.5H69.5C72.8137 8.5 75.5 11.1863 75.5 14.5V33.5H15.5V14.5C15.5 11.1863 18.1863 8.5 21.5 8.5ZM15.5 35.5V78.5C15.5 81.8137 18.1863 84.5 21.5 84.5H69.5C72.8137 84.5 75.5 81.8137 75.5 78.5V35.5H15.5Z"
                        fill="#E95671"
                      />
                      <path
                        d="M80.5 79.5V16.5C82.6204 16.5 82.5552 18.0611 82.5112 19.1145C82.5054 19.2533 82.5 19.3835 82.5 19.5V79.5C82.5 88.5 75 91.5 69.5 91.5H25C22.6 91.5 22.5 90.5 22.5 89.5H69.5C78.3 89.5 80.5 82.8333 80.5 79.5Z"
                        fill="#E95671"
                      />
                    </svg>
                  </IconContainer>
                }
              />
            )}
          </ColumnContainer>
          <Table title="Top Movers" filter={true} />
        </React.Fragment>
      }
      sidepanel={<SidePanel />}
    />
  );
};

export default Technicals;
