import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useMediaQuery from "../../custom hooks/useMediaQuery";
import ColumnContainer from "../ColumnContainer/ColumnContainer";
import RowContainer from "../RowContainer/RowContainer";

interface Props {
  header: React.ReactElement;
  content: React.ReactElement;
  sidepanel: React.ReactElement;
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 32px;
  align-items: centers;
  justify-content: flex-start;
  padding: 32px;
  overflow-y: auto;
`;

const SidePanelConteiner = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 20%;
  min-width: 374px;
  @media (max-width: 1176px) {
    display: none;
  }
`;

const PageWrapper = ({ header, content, sidepanel }: Props) => {
  return (
    <Wrapper>
      <RowContainer justify="sb" align="fs">
        {header}
      </RowContainer>
      <RowContainer gap="md" align="fs">
        <ColumnContainer gap="32px">{content}</ColumnContainer>
        <SidePanelConteiner>{sidepanel}</SidePanelConteiner>
      </RowContainer>
    </Wrapper>
  );
};

export default PageWrapper;
