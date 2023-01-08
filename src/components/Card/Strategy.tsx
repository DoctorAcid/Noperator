import React from "react";
import styled from "styled-components";
import ColumnContainer from "../ColumnContainer/ColumnContainer";
import { HDivLine } from "../Divider/Divider";
import RowContainer from "../RowContainer/RowContainer";

interface Props {
  title: string;
  stocks: number;
  date: string;
  percentage?: number;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 244px;
  background-color: #ffffff;
  border-radius: 16px;
  cursor: pointer;
  border: 1px solid white;
  transition: all ease-in 0.3s;
  &:hover {
    transform: scale(1.02);
    box-shadow: 8px 8px 40px 0px #0000000d;
  }
`;

const P = styled.p`
  color: #6c757d;
  text-transform: capitalize;
`;

const H2 = styled.h2`
  font-family: roboto;
  color: #2daf80;
`;

const PercentageCont = styled(RowContainer)`
  padding: 8px 16px;
  border-radius: 8px;
  background-color: #2daf800d;
  color: #2daf80;
  width: max-content;
`;

const Strategy = ({ title, stocks, date, percentage }: Props) => {
  return (
    <Wrapper>
      {percentage ? (
        <RowContainer padding="12px 12px 0 12px">
          <PercentageCont>
            <H2>{percentage}%</H2>
          </PercentageCont>
        </RowContainer>
      ) : null}
      <ColumnContainer padding="24px">
        <svg
          width="198"
          height="85"
          viewBox="0 0 198 85"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 78.3803L6.76471 83L14.8353 73.7606L18.2941 78.3803L26.3647 61.0563L29.8235 66.831L39.0471 69.1408L43.6588 78.3803L51.7294 50.662L56.3412 58.7465L60.9529 49.507L64.4118 51.8169L67.8706 43.7324L73.6353 47.1972L84.0118 31.0282L88.6235 37.9577L92.0824 33.338L95.5412 44.8873L103.612 47.1972L105.918 39.1127L109.376 49.507L112.835 34.493L120.906 27.5634L124.365 39.1127L128.976 34.493L132.435 43.7324L135.894 37.9577L139.353 52.9718L142.812 50.662L158.953 72.6056L164.718 56.4366L173.941 51.8169L179.706 36.8028L183.165 42.5775L187.776 25.2535L197 1"
            stroke="#2DAF80"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </ColumnContainer>
      <HDivLine />
      <ColumnContainer padding="24px" gap="md">
        <ColumnContainer gap="4px">
          <P>{title}</P>
          <p>{stocks} stocks</p>
        </ColumnContainer>
        <p>{date}</p>
      </ColumnContainer>
    </Wrapper>
  );
};

export default Strategy;
