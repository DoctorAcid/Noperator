import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { ThirdyButton } from "../Buttons/Buttons";
import IconContainer from "../IconContainer/IconContainer";
import RowContainer from "../RowContainer/RowContainer";
import ColumnContainer from "./ColumnContainer";

interface Props {
  title: string;
  description: string;
}

const OverflowContainer = ({ title, description }: Props) => {
  const textContainer = useRef<HTMLDivElement>(null);

  const [readMore, setReadMore] = useState(false);
  const [toggleButton, setToggleButton] = useState(false);

  useEffect(() => {
    if (textContainer.current) {
      const height = textContainer.current.offsetHeight;
      if (height > 96) {
        setToggleButton(true);
        setReadMore(true);
      }
      if (height < 96) {
        setToggleButton(false);
      }
    }
  }, []);
  return (
    <ColumnContainer gap="sm" ref={textContainer}>
      <h3>{title}</h3>
      <motion.p
        style={{ overflow: "hidden" }}
        animate={{ height: readMore ? "58px" : "" }}
      >
        {description}
      </motion.p>
      {toggleButton ? (
        <ThirdyButton
          onClick={() => setReadMore(!readMore)}
          width="fit-content"
        >
          {readMore ? "Read More" : "Read Less"}
        </ThirdyButton>
      ) : null}
    </ColumnContainer>
  );
};

export default OverflowContainer;
