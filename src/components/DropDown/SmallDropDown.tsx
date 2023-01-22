import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ColumnContainer from "../ColumnContainer/ColumnContainer";
import IconContainer from "../IconContainer/IconContainer";

interface Props {
  dropDownContent: Array<string>;
}

interface DropDownProps {
  id: number;
  content: string;
  active: boolean;
}

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: 58px;
  overflow: hidden;
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #f8f9fa;
  cursor: pointer;
  &:hover {
    box-shadow: 8px 8px 40px 0px #0000000d;
    transform: scale(1.02);
  }
`;

const DropDownButton = styled(motion.div)`
  display: flex;
  gap: 12px;
  padding: 16px 20px 16px 24px;
  align-items: center;
  color: #0b98e8;
  font-weight: 700;
`;

const Span = styled(motion.p)`
  padding: 12px 24px;
  &:last-child {
    border-radius: 0 0 8px 8px;
  }
`;

const SmallDropDown = ({ dropDownContent }: Props) => {
  const [dropDown, setDropDown] = useState(false);
  const [DropDownContent, setDropDownContent] = useState<DropDownProps[]>([]);

  const newArray: DropDownProps[] = [];

  useEffect(() => {
    dropDownContent.map((items, index) => {
      if (index === 0) {
        newArray.push({ id: index, content: items, active: true });
      }
      if (index > 0) {
        newArray.push({ id: index, content: items, active: false });
      }
      return setDropDownContent(newArray);
    });
  }, []);

  const getDropDownContent = (index: number) => {
    setDropDownContent(
      DropDownContent.map((items) => {
        if (items.id === index) {
          return { ...items, active: true };
        }
        return { ...items, active: false };
      })
    );
    setDropDown(false);
  };

  return (
    <Wrapper
      animate={{
        height: dropDown ? "max-content" : "58px",
        scale: dropDown ? 1.02 : 1,
        boxShadow: dropDown ? "8px 8px 40px 0px #0000000d" : "0",
      }}
      whileHover={{
        scale: 1.02,
        boxShadow: "8px 8px 40px 0px #0000000d",
      }}
    >
      <DropDownButton onClick={() => setDropDown(!dropDown)}>
        {DropDownContent.map((items) => {
          if (items.active) {
            return items.content;
          }
          return "";
        })}
        <IconContainer
          animate={{ rotate: dropDown ? "-180deg" : "0" }}
          size="sm"
        >
          <svg
            width="18"
            height="8"
            viewBox="0 0 18 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.213987 0.728239C0.64021 0.0178685 1.5616 -0.212479 2.27197 0.213743L9.00023 4.2507L15.7285 0.213743C16.4389 -0.212479 17.3602 0.0178685 17.7865 0.728239C18.2127 1.43861 17.9823 2.36 17.272 2.78622L9.00023 7.74927L0.728483 2.78622C0.0181127 2.36 -0.212235 1.43861 0.213987 0.728239Z"
              fill="#0B98E8"
            />
          </svg>
        </IconContainer>
      </DropDownButton>
      <ColumnContainer>
        <>
          {DropDownContent.map((items) => {
            if (!items.active) {
              return (
                <Span
                  key={items.id}
                  onClick={() => getDropDownContent(items.id)}
                  whileHover={{ backgroundColor: "#0b98e8", color: "#fff" }}
                >
                  {items.content}
                </Span>
              );
            }
            return "";
          })}
        </>
      </ColumnContainer>
    </Wrapper>
  );
};

export default SmallDropDown;
