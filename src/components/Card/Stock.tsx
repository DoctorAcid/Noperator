import React from "react";
import styled from "styled-components";
import ColumnContainer from "../ColumnContainer/ColumnContainer";
import RowContainer from "../RowContainer/RowContainer";
import HeroImg from "../../images/stocks/hero.png";
import { StockIcons } from "../StockIcons/StockIcons";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 244px;
  padding: 24px;
  gap: 24px;
  border-radius: 16px;
  background-color: #fff;
  border: 1px solid white;
  cursor: pointer;
  transition: all ease-in 0.3s;
  &:hover {
    transform: scale(1.02);
    box-shadow: 8px 8px 40px 0px #0000000d;
  }
`;

const P = styled.p`
  text-transform: uppercase;
`;

const H2 = styled.h2`
  color: #2daf80;
`;

const H3 = styled.h3`
  color: #2daf80;
`;

const Stock = () => {
  return (
    <Wrapper>
      <RowContainer gap="sm">
        <StockIcons>
          <img src={HeroImg} alt="" />
        </StockIcons>
        <ColumnContainer>
          <span className="name_tag">hero motors</span>
          <P>nse</P>
        </ColumnContainer>
      </RowContainer>
      <ColumnContainer>
        <H2>+25%</H2>
        <H3>₹1150.00</H3>
      </ColumnContainer>
    </Wrapper>
  );
};

export default Stock;
