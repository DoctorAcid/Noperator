import styled from "styled-components";

const RowContainer = styled.div<{
  width?: string;
  padding?: "sm" | "md" | "lg" | string;
  gap?: "sm" | "md" | "lg";
  justify?: "sb" | "fe" | "c";
  align?: "sb" | "fs" | "fe";
}>`
  display: flex;
  align-items: ${({ align }) =>
    (align === "sb" && "space-between") ||
    (align === "fs" && "flex-start") ||
    (align === "fe" && "flex-end") ||
    (align ? align : "center")};
  //border: 2px solid red;
  gap: ${({ gap }) =>
    (gap === "sm" && "8px") ||
    (gap === "md" && "16px") ||
    (gap === "lg" && "24px")};
  width: ${({ width }) => (width ? width : "100%")};
  padding: ${({ padding }) =>
    (padding === "sm" && "16px") ||
    (padding === "md" && "24px") ||
    (padding === "lg" && "32px") ||
    (padding ? padding : "")};
  justify-content: ${({ justify }) =>
    (justify === "sb" && "space-between") ||
    (justify === "fe" && "flex-end") ||
    (justify === "c" && "center") ||
    (justify ? justify : "flex-start")};
`;

export default RowContainer;
