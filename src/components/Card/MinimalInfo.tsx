import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

interface Props {
  number: string;
  contentTitle: string;
}

const Wrapper = styled(motion.div)`
  min-width: 218px;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 4px;
  padding: 24px;
  border-radius: 16px;
  background-color: #fff;
`;

const MinimalInfo = ({ number, contentTitle }: Props) => {
  return (
    <Wrapper>
      <h2>{number}</h2>
      <p>{contentTitle}</p>
    </Wrapper>
  );
};

export default MinimalInfo;
