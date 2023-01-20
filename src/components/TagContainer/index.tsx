import styled from "styled-components";
import RowContainer from "../RowContainer/RowContainer";

export const Tag = styled(RowContainer)<{
  bg?: string;
  color?: string;
  tt?: string;
}>`
  display: flex;
  width: max-content;
  padding: 4px 12px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  background-color: ${({ bg }) => (bg ? bg : "#F8F9FA")};
  color: ${({ color }) => (color ? color : "#6C757D")};
  text-transform: ${({ tt }) => (tt ? tt : "capitalize")};
`;
