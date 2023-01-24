import React from "react";
import HelpButton from "../Buttons/HelpButton";
import RowContainer from "../RowContainer/RowContainer";

interface Props {
  title: string;
}

const SmallTitle = ({ title }: Props) => {
  return (
    <RowContainer justify="sb">
      <h3>{title}</h3>
      <HelpButton />
    </RowContainer>
  );
};

export default SmallTitle;
