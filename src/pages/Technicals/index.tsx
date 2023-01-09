import React from "react";
import styled from "styled-components";
import CreationCont from "../../components/Card/CreationCont";
import SidePanel from "../../components/Card/SidePanel";
import Strategy from "../../components/Card/Strategy";
import ColumnContainer from "../../components/ColumnContainer/ColumnContainer";
import Header from "../../components/Header";
import HorizoantalScroll from "../../components/HorizoantalScroll/HorizoantalScroll";
import PageWrapper from "../../components/PageWrapper";
import Table from "../../components/Table/Table";
import Title from "../../components/Title/Title";

const Technicals = () => {
  return (
    <PageWrapper
      header={<Header title="Technicals" />}
      content={
        <React.Fragment>
          <ColumnContainer gap="md">
            <Title titleName="my watchlist" filterOff={true}></Title>
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
          </ColumnContainer>
          <Table title="Top Movers" filter={true} />
        </React.Fragment>
      }
      sidepanel={<SidePanel />}
    />
  );
};

export default Technicals;
