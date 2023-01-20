import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import ColumnContainer from "../ColumnContainer/ColumnContainer";
import HeroImg from "../../images/stocks/hero.png";
import { StockIcons } from "../StockIcons/StockIcons";
import IconContainer from "../IconContainer/IconContainer";

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  min-width: 244px;
  border-radius: 16px;
  background: #fff;
  cursor: pointer;
  transition: all ease-in 0.3s;
  &:hover {
    transform: scale(1.02);
    box-shadow: 8px 8px 40px 0px #0000000d;
  }
`;

const TopSection = styled(ColumnContainer)`
  padding: 24px;
  gap: 4px;
`;

const BottomSection = styled(ColumnContainer)`
  padding: 24px;
`;

const StockMain = () => {
  const [active, setActive] = useState(false);

  return (
    <Wrapper
      onClick={() => setActive(!active)}
      animate={{ backgroundColor: active ? "#0B98E8" : "#fff" }}
    >
      <TopSection>
        <IconContainer size="lg">
          <StockIcons>
            <img width={"48px"} src={HeroImg} alt="" />
          </StockIcons>
        </IconContainer>
        <motion.h3
          animate={{ color: active ? "#fff" : "#6c757d" }}
          transition={{ duration: 1 }}
        >
          Hero Motors
        </motion.h3>
        <motion.p animate={{ color: active ? "#fff" : "#adb5bd" }}>
          599.10 (+0.17%)
        </motion.p>
      </TopSection>
      <motion.div
        style={{ height: "2px" }}
        animate={{
          backgroundColor: active ? "#F8F9FA4D" : "#f8f9fa",
        }}
        transition={{ duration: 1 }}
      />
      <BottomSection>
        <motion.h1 animate={{ color: active ? "#fff" : "#2daf80" }}>
          +0.17%
        </motion.h1>
      </BottomSection>
    </Wrapper>
  );
};

export default StockMain;
