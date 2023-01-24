import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RowContainer from "../RowContainer/RowContainer";

interface Props {
  time: Array<string>;
}

interface TimeProps {
  id: number;
  value: string;
  active: boolean;
}

const MainWrap = styled(motion.div)`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Wrapper = styled(motion.div)`
  display: flex;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 20px 20px 60px 0px #0000000d;
`;

const Content = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;
  background-color: #fff;
  &:first-child {
    border-radius: 8px 0 0 8px;
  }

  &:last-child {
    border-radius: 0 8px 8px 0;
  }
`;

const DurationFilter = ({ time }: Props) => {
  const [selectedTime, setSelectedTime] = useState<TimeProps[]>([]);

  useEffect(() => {
    const newArray: TimeProps[] = [];

    time.map((items, index) => {
      if (index === 0) {
        newArray.push({ id: index, value: items, active: true });
      }
      if (index > 0) {
        newArray.push({ id: index, value: items, active: false });
      }

      return setSelectedTime(newArray);
    });
  }, [time]);

  const handleClick = (index: number) => {
    setSelectedTime(
      selectedTime.map((items) => {
        if (items.id === index) {
          return { ...items, active: true };
        }
        return { ...items, active: false };
      })
    );
  };

  return (
    <MainWrap>
      <Wrapper>
        {selectedTime.map((items, index) => {
          if (items) {
            return (
              <Content
                key={index}
                onClick={() => handleClick(items.id)}
                whileHover={{
                  backgroundColor: items.active ? "#0B98E8" : "#F3F8FA",
                }}
                animate={{
                  backgroundColor: items.active ? "#0B98E8" : "#fff",
                }}
              >
                <motion.p
                  animate={{ color: items.active ? "#fff" : "#adb5bd" }}
                >
                  {items.value}
                </motion.p>
              </Content>
            );
          }
          return items;
        })}
      </Wrapper>
    </MainWrap>
  );
};

export default DurationFilter;
