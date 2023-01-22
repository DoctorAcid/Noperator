import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface Props {
  content: Array<any>;
}

interface ToggleProps {
  id: number;
  element: any;
  active: boolean;
}

const Wrapper = styled(motion.div)`
  display: flex;
  gap: 8px;
  width: max-content;
`;

const ContentWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 12px 24px;
  border-radius: 8px;
  background-color: #fff;
  font-weight: 600;
  color: #0b98e8;
  cursor: pointer;
`;

const LargeToggleButton = ({ content }: Props) => {
  const [toggleItems, setToggleItems] = useState<ToggleProps[]>([]);

  const newArray: ToggleProps[] = [];

  useEffect(() => {
    content.map((items, index) => {
      if (index === 0) {
        newArray.push({ id: index, element: items, active: true });
      }
      if (index > 0) {
        newArray.push({ id: index, element: items, active: false });
      }
      return setToggleItems(newArray);
    });
  }, [content]);

  const setActive = (index: number) => {
    setToggleItems(
      toggleItems.map((items) => {
        if (items.id === index) {
          return { ...items, active: true };
        }
        return { ...items, active: false };
      })
    );
  };

  return (
    <Wrapper>
      {toggleItems.map((items) => {
        if (items) {
          return (
            <ContentWrapper
              onClick={() => setActive(items.id)}
              animate={{
                backgroundColor: items.active ? "#0b98e8" : "#fff",
                color: items.active ? "#fff" : "#0b98e8",
              }}
              whileHover={{
                backgroundColor: items.active ? "#0b98e8" : "#F3FAFE",
              }}
              key={items.id}
            >
              {items.element}
            </ContentWrapper>
          );
        }
        return items;
      })}
    </Wrapper>
  );
};

export default LargeToggleButton;
