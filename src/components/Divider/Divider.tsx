import styled from "styled-components";

export const HDivLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: #f8f9fa;
`;

export const GrayVDivLine = styled.div<{
  height: string;
}>`
  display: flex;
  height: ${({ height }) => (height ? height : "100%")};
  width: 2px;
  background-color: #f8f9fa;
`;

export const VDivLine = styled.div<{
  height?: string;
}>`
  width: 4px;
  height: ${({ height }) => (height ? height : "80px")};
  background-color: #0b98e833;
`;
