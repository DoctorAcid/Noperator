import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  PrimaryButton,
  SecondaryButton,
  ThirdyButton,
} from "../Buttons/Buttons";
import RowContainer from "../RowContainer/RowContainer";
import "./table.css";
import AdaniImg from "../../images/stocks/adani.png";
import UniImg from "../../images/stocks/unilever.png";
import AirImg from "../../images/stocks/airtel.png";
import HeroImg from "../../images/stocks/hero.png";
import TataImg from "../../images/stocks/tata.png";
import { Tag } from "../TagContainer";

interface Props {
  title?: string;
  filter?: boolean;
}

const TableBody = styled.div`
  position: relative;
  background-color: #ffffff;
  width: 100%;
  border-radius: 16px;
`;

const StockImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: circle(50% at center);
`;

const H3 = styled.h3`
  text-transform: uppercase;
  width: fit-content;
  @media (max-width: 1200px) {
    width: min-content;
  }
`;

const Table = ({ title, filter }: Props) => {
  const [height, setHeight] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const topSection = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const height = getTableHeight() + "px";
    setHeight(height);
  }, []);

  function getTableHeight() {
    if (ref.current && topSection.current) {
      const top = topSection.current.offsetHeight;
      const height = ref.current.offsetHeight;
      return String(height + top);
    }
  }

  return (
    <TableBody style={{ height: height ? height : "" }}>
      <RowContainer ref={topSection} padding="24px" justify="sb">
        {title ? (
          <H3>{title}</H3>
        ) : (
          <RowContainer width="fit-content" gap="sm">
            <PrimaryButton size="md" width="fit-content">
              Positions
            </PrimaryButton>
            <SecondaryButton size="md" width="fit-content">
              Holdings
            </SecondaryButton>
          </RowContainer>
        )}
        {filter ? (
          <RowContainer justify="fe" width="max-content" gap="sm">
            <SecondaryButton size="md" width="80px">
              Filter
            </SecondaryButton>
            <ThirdyButton size="md">View all</ThirdyButton>
          </RowContainer>
        ) : (
          <ThirdyButton size="md" width="max-content">
            View all
          </ThirdyButton>
        )}
      </RowContainer>
      <div ref={ref} className="table_responsive">
        <table>
          <thead style={{ backgroundColor: "#F8F9FA", padding: "0 24px" }}>
            <tr>
              <th scope="col">
                <span>Instrument</span>
              </th>
              <th scope="col">Qty</th>
              <th scope="col">LTP</th>
              <th scope="col">LTP%</th>
              <th scope="col">P&L</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="col">
                <RowContainer gap="sm">
                  <StockImg>
                    <img src={AdaniImg} alt="" />
                  </StockImg>
                  <span className="name_tag">ADANIPORTS22NOV800PE</span>
                </RowContainer>
              </th>
              <th scope="col">10,000</th>
              <th scope="col">₹24.25</th>
              <th scope="col">
                <Tag bg="#0B98E80D" color="#0B98E8">
                  64.29%
                </Tag>
              </th>
              <th scope="col">+₹12,404,687.50</th>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <th scope="col">
                <RowContainer gap="sm">
                  <StockImg>
                    <img src={TataImg} alt="" />
                  </StockImg>
                  <span>TATAMOTORS22NOV564AE</span>
                </RowContainer>
              </th>
              <th scope="col">10,000</th>
              <th scope="col">₹24.25</th>
              <th scope="col">
                <Tag bg="#0B98E80D" color="#0B98E8">
                  64.29%
                </Tag>
              </th>
              <th scope="col">+₹12,404,687.50</th>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <th scope="col">
                <RowContainer gap="sm">
                  <StockImg>
                    <img src={HeroImg} alt="" />
                  </StockImg>
                  <span>HEROMOTORS22SEP212SG</span>
                </RowContainer>
              </th>
              <th scope="col">10,000</th>
              <th scope="col">₹24.25</th>
              <th scope="col">
                <Tag bg="#0B98E80D" color="#0B98E8">
                  64.29%
                </Tag>
              </th>
              <th scope="col">+₹12,404,687.50</th>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <th scope="col">
                <RowContainer gap="sm">
                  <StockImg>
                    <img src={UniImg} alt="" />
                  </StockImg>
                  <span>UNILIVER22AUG80036ED</span>
                </RowContainer>
              </th>
              <th scope="col">10,000</th>
              <th scope="col">₹24.25</th>
              <th scope="col">
                <Tag bg="#0B98E80D" color="#0B98E8">
                  64.29%
                </Tag>
              </th>
              <th scope="col">+₹12,404,687.50</th>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <th scope="col">
                <RowContainer gap="sm">
                  <StockImg>
                    <img src={AirImg} alt="" />
                  </StockImg>
                  <span>BHRATIAIRTEL22NOV505SP</span>
                </RowContainer>
              </th>
              <th scope="col">10,000</th>
              <th scope="col">₹24.25</th>
              <th scope="col">
                <Tag bg="#0B98E80D" color="#0B98E8">
                  64.29%
                </Tag>
              </th>
              <th scope="col">+₹12,404,687.50</th>
            </tr>
          </tbody>
        </table>
      </div>
    </TableBody>
  );
};

export default Table;
