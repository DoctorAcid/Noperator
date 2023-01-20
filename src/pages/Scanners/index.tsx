import React, { useEffect, useState } from "react";
import CreationCont from "../../components/Card/CreationCont";
import Scanner from "../../components/Card/Scanner";
import ScannerMain from "../../components/Card/ScannerMain";
import SidePanel from "../../components/Card/SidePanel";
import ColumnContainer from "../../components/ColumnContainer/ColumnContainer";
import Header from "../../components/Header";
import HorizoantalScroll from "../../components/HorizoantalScroll/HorizoantalScroll";
import IconContainer from "../../components/IconContainer/IconContainer";
import NoContent from "../../components/NoContent/NoContent";
import PageWrapper from "../../components/PageWrapper";
import Title from "../../components/Title/Title";

const Scanners = () => {
  const [scanner, setScanner] = useState(false);
  useEffect(() => {
    setScanner(true);
  }, []);

  return (
    <PageWrapper
      header={<Header title="Scanners" />}
      content={
        <React.Fragment>
          <ColumnContainer gap="md">
            <Title titleName="My Scanners" filterOff={true} />
            {scanner ? (
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
                        x="17.1279"
                        y="17.1282"
                        width="61.7436"
                        height="61.7436"
                        rx="1"
                        fill="#0B98E8"
                        fill-opacity="0.3"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.6152 46V15.6154C11.6152 13.4062 13.4061 11.6154 15.6152 11.6154H80.3845C82.5936 11.6154 84.3845 13.4062 84.3845 15.6154V46H91C92.1046 46 93 46.8954 93 48C93 49.1046 92.1046 50 91 50H84.3845V80.3846C84.3845 82.5938 82.5936 84.3846 80.3845 84.3846H15.6152C13.4061 84.3846 11.6152 82.5938 11.6152 80.3846V50H5C3.89543 50 3 49.1046 3 48C3 46.8954 3.89543 46 5 46H11.6152ZM36.0771 13.6154H30.1543V46H46V13.6154H40.0771V41.3846C40.0771 42.4892 39.1817 43.3846 38.0771 43.3846C36.9726 43.3846 36.0771 42.4892 36.0771 41.3846V13.6154ZM46 50V59.5769C46 60.6815 46.8954 61.5769 48 61.5769C49.1046 61.5769 50 60.6815 50 59.5769V50H55.9527C56.1166 50.9396 56.9363 51.6539 57.9229 51.6539C58.9094 51.6539 59.7291 50.9396 59.893 50H82.3845V80.3846C82.3845 81.4892 81.489 82.3846 80.3845 82.3846H15.6152C14.5107 82.3846 13.6152 81.4892 13.6152 80.3846V50H26.1841C26.3481 50.9396 27.1678 51.6539 28.1543 51.6539C29.1408 51.6539 29.9605 50.9396 30.1245 50H46ZM82.3845 46H59.9229V13.6154H65.8457V31.4615C65.8457 32.5661 66.7411 33.4615 67.8457 33.4615C68.9503 33.4615 69.8457 32.5661 69.8457 31.4615V13.6154H80.3845C81.489 13.6154 82.3845 14.5108 82.3845 15.6154V46ZM55.9229 46V13.6154H50V46H55.9229ZM26.1543 46V13.6154H15.6152C14.5107 13.6154 13.6152 14.5108 13.6152 15.6154V46H26.1543Z"
                        fill="#0B98E8"
                      />
                    </svg>
                  </IconContainer>
                }
              />
            )}
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
