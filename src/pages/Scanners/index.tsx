import React from "react";
import SidePanel from "../../components/Card/SidePanel";
import Header from "../../components/Header";
import PageWrapper from "../../components/PageWrapper";

const Scanners = () => {
  return (
    <PageWrapper
      header={<Header title="Scanners" />}
      content={<React.Fragment></React.Fragment>}
      sidepanel={<SidePanel />}
    />
  );
};

export default Scanners;
