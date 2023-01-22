import { motion } from "framer-motion";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import ColumnContainer from "../ColumnContainer/ColumnContainer";

interface Props {
  title: string;
  elements: Array<any>;
  openStatus?: boolean;
}

const Wrapper = styled(motion.div)`
  overflow: hidden;
  border-top: 1px solid #f8f9fa;
`;

const DropDownSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 24px;
`;

const DropDown = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

const DropDownButton = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
`;

const LargeDropDown = ({ title, elements, openStatus }: Props) => {
  const wrap = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(openStatus ? openStatus : false);
  const [contentHeight, setContentHeight] = useState("100%");

  useLayoutEffect(() => {
    if (wrap.current) {
      const height = wrap.current.offsetHeight + 96;
      const fullHeight = String(height) + "px";
      setContentHeight(fullHeight);
    }
  });

  return (
    <Wrapper animate={{ height: open ? "100%" : "72px" }}>
      <DropDownSection>
        <DropDown onClick={() => setOpen(!open)}>
          <h3>{title}</h3>
          <DropDownButton animate={{ rotate: !open ? "-180deg" : "0deg" }}>
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
                d="M17.786 7.27176C17.3598 7.98213 16.4384 8.21248 15.728 7.78626L8.99977 3.7493L2.27152 7.78626C1.56115 8.21248 0.639755 7.98213 0.213535 7.27176C-0.212687 6.56139 0.0176601 5.64 0.728031 5.21378L8.99977 0.250731L17.2715 5.21378C17.9819 5.64 18.2122 6.56139 17.786 7.27176Z"
                fill="#6c757d"
              />
            </svg>
          </DropDownButton>
        </DropDown>
        <ColumnContainer ref={wrap} gap="md">
          {elements.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
        </ColumnContainer>
      </DropDownSection>
    </Wrapper>
  );
};

export default LargeDropDown;
