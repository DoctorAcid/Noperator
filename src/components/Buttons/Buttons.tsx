import styled from "styled-components";

const Base = styled.button<{
  width?: string;
  size?: "sm" | "md" | "lg";
  altDisabledStyle?: boolean;
}>`
  width: ${({ width }) => (width ? width : "max-content")};
  padding: ${({ size }) =>
    (size === "sm" && "4px 12px") ||
    (size === "md" && "16px") ||
    (size === "lg" && "24px")};
  display: flex;
  gap: ${({ size }) =>
    (size === "sm" && "4px") ||
    (size === "md" && "8px") ||
    (size === "lg" && "12px")};
  justify-content: center;
  align-items: center;
  font-size: ${({ size }) =>
    (size === "sm" && "14px") ||
    (size === "md" && "16px") ||
    (size === "lg" && "24px")};
  border: none;
  border-radius: ${({ size }) =>
    (size === "sm" && "8px") ||
    (size === "md" && "8px") ||
    (size === "lg" && "16px")};
  cursor: pointer;
  min-width: ${({ size, width }) =>
    (width ? width : "") ||
    (size === "sm" && "96px") ||
    (size === "md" && "116px") ||
    (size === "lg" && "100%")};
  font-weight: 700;
  will-change: transform;
  transition: transform 450ms ease;
  transform: perspective(1px) translateZ(0);
  &:hover {
    transform: scale(1.02);
  }
`;

export const PrimaryButton = styled(Base)`
  background-color: #0b98e80d;
  color: #0b98e8;
  transition: all ease 0.3s;

  &:hover {
    background-color: #0b98e8;
    color: #ffffff;
  }

  &:disabled {
    cursor: auto;
    background-color: #ffffff;
  }
`;

export const SecondaryButton = styled(Base)`
  background-color: #ffffff;
  color: #adb5bd;
  transition: all ease 0.3s;
  &:hover {
    background-color: #0b98e80d;
    color: #0b98e8;
  }
`;

export const ThirdyButton = styled(Base)`
  color: #adb5bd;
  background-color: transparent;
  transition: all ease 0.3s;
  &:hover {
    color: #0b98e8;
  }
`;

export const OutlineButton = styled(Base)<{
  color: string;
  padding?: string;
  borderRadius?: string;
}>`
  width: max-content;
  border: 2px solid ${({ color }) => (color ? color : "")};
  color: ${({ color }) => (color ? color : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "")};
  background-color: transparent;
  text-transform: capitalize;
`;
