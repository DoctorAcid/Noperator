import React from "react";
import CreationCont from "../../components/Card/CreationCont";
import Scanner from "../../components/Card/Scanner";
import ScannerMain from "../../components/Card/ScannerMain";
import SidePanel from "../../components/Card/SidePanel";
import StrategyMain from "../../components/Card/StrategyMain";
import ColumnContainer from "../../components/ColumnContainer/ColumnContainer";
import Header from "../../components/Header";
import HorizoantalScroll from "../../components/HorizoantalScroll/HorizoantalScroll";
import PageWrapper from "../../components/PageWrapper";
import Title from "../../components/Title/Title";

const Scanners = () => {
  return (
    <PageWrapper
      header={<Header title="Scanners" />}
      content={
        <React.Fragment>
          <ColumnContainer gap="md">
            <Title titleName="My Scanners" />
            <HorizoantalScroll>
              <React.Fragment>
                <CreationCont title="Scanners" />
                <Scanner />
                <Scanner />
                <Scanner />
                <Scanner />
                <Scanner />
                <Scanner />
                <Scanner />
              </React.Fragment>
            </HorizoantalScroll>
          </ColumnContainer>

          <ColumnContainer gap="md">
            <Title viewallOff={true} titleName="discover scanners" />
            <ColumnContainer gap="md">
              <ScannerMain />
              <ScannerMain />
              <ScannerMain />
              <ScannerMain />
              <ScannerMain />
            </ColumnContainer>
          </ColumnContainer>
        </React.Fragment>
      }
      sidepanel={<SidePanel />}
    />
  );
};

export default Scanners;
