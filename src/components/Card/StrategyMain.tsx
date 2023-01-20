import React from "react";
import styled from "styled-components";
import { ThirdyButton } from "../Buttons/Buttons";
import ColumnContainer from "../ColumnContainer/ColumnContainer";
import { FlexWrap } from "../FlexWrap";
import RowContainer from "../RowContainer/RowContainer";
import { StockIcons } from "../StockIcons/StockIcons";
import AdaniImg from "../../images/stocks/adani.png";
import UniImg from "../../images/stocks/unilever.png";
import AirImg from "../../images/stocks/airtel.png";
import HeroImg from "../../images/stocks/hero.png";
import TataImg from "../../images/stocks/tata.png";
import { Tag } from "../TagContainer";

const Wrapper = styled(FlexWrap)`
  background-color: #fff;
  border-radius: 16px;
  gap: 32px;
  padding: 24px;
  border: 1px solid white;
  cursor: pointer;
  transition: all ease-in 0.3s;
  &:hover {
    transform: scale(1.01);
    box-shadow: 8px 8px 40px 0px #0000000d;
  }
`;

const P = styled.p`
  color: #6c757d;
`;

const StrategyMain = () => {
  return (
    <Wrapper>
      <RowContainer width="fit-content">
        <svg
          width="198"
          height="85"
          viewBox="0 0 198 85"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 78.8803L6.76471 83.5L14.8353 74.2606L18.2941 78.8803L26.3647 61.5563L29.8235 67.331L39.0471 69.6408L43.6588 78.8803L51.7294 51.162L56.3412 59.2465L60.9529 50.007L64.4118 52.3169L67.8706 44.2324L73.6353 47.6972L84.0118 31.5282L88.6235 38.4577L92.0824 33.838L95.5412 45.3873L103.612 47.6972L105.918 39.6127L109.376 50.007L112.835 34.993L120.906 28.0634L124.365 39.6127L128.976 34.993L132.435 44.2324L135.894 38.4577L139.353 53.4718L142.812 51.162L158.953 73.1056L164.718 56.9366L173.941 52.3169L179.706 37.3028L183.165 43.0775L187.776 25.7535L197 1.5"
            stroke="#2DAF80"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </RowContainer>
      <ColumnContainer style={{ flex: "60%" }} gap="sm">
        <h2>Bollinger Band and RSI</h2>
        <p>22 Nov 2022</p>
        <P>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </P>
        <ThirdyButton width="fit-content">Read more</ThirdyButton>
        <RowContainer padding="16px 0 0 0" justify="sb">
          <RowContainer gap="sm">
            <StockIcons>
              <img src={AdaniImg} alt="" />
            </StockIcons>
            <StockIcons>
              <img src={UniImg} alt="" />
            </StockIcons>
            <StockIcons>
              <img src={AirImg} alt="" />
            </StockIcons>
            <StockIcons>
              <img src={HeroImg} alt="" />
            </StockIcons>
            <StockIcons>
              <img src={TataImg} alt="" />
            </StockIcons>
          </RowContainer>
          <Tag bg="#FFC8491A" color="#FFC849">
            6Stocks
          </Tag>
        </RowContainer>
      </ColumnContainer>
    </Wrapper>
  );
};

export default StrategyMain;
