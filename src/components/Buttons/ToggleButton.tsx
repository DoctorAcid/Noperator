import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface Props {
  switchButton: boolean;
  setSwitchButton: React.Dispatch<React.SetStateAction<boolean>>;
}

const Outter = styled(motion.div)`
  display: flex;
  align-items: center;
  width: 40px;
  height: 24px;
  border-radius: 12px;
  background-color: #fff;
  padding: 2px;
  cursor: pointer;
`;

const Inner = styled(motion.div)`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: #e9ecef;
`;

const ToggleButton = ({ switchButton, setSwitchButton }: Props) => {
  const [width, setWidth] = useState("20px");

  useEffect(() => {
    setWidth("40px");
    setTimeout(() => {
      setWidth("20px");
    }, 100);
    console.log("clicked");
  }, [switchButton]);

  return (
    <Outter
      onClick={() => setSwitchButton(!switchButton)}
      animate={{ justifyContent: switchButton ? "flex-end" : "flex-start" }}
      transition={{ delay: 0.1 }}
    >
      <Inner
        animate={{
          width: switchButton ? width : width,
          backgroundColor: switchButton ? "#0B98E8" : "#e9ecef",
        }}
      />
    </Outter>
  );
};

export default ToggleButton;
