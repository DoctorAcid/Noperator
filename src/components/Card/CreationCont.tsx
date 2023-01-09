import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #2daf800d;
  min-width: 244px;
  border-radius: 16px;
  padding: 24px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  text-align: center;
  cursor: pointer;
  transition: all ease-in 0.3s;

  &:hover {
    background-color: #2daf80;
  }

  &:hover svg path {
    fill: #fff;
  }

  &:hover H3 {
    color: #ffffff;
  }
`;

const H3 = styled.h3`
  color: #2daf80;
  text-transform: uppercase;
`;

const CreationCont = ({ title }: Props) => {
  return (
    <Container>
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M26 26H8C6.89543 26 6 26.8954 6 28V36C6 37.1046 6.89543 38 8 38H26V56C26 57.1046 26.8954 58 28 58H36C37.1046 58 38 57.1046 38 56V38H56C57.1046 38 58 37.1046 58 36V28C58 26.8954 57.1046 26 56 26H38V8C38 6.89543 37.1046 6 36 6H28C26.8954 6 26 6.89543 26 8V26ZM24 8C24 5.79086 25.7909 4 28 4H36C38.2091 4 40 5.79086 40 8V24H56C58.2091 24 60 25.7909 60 28V36C60 38.2091 58.2091 40 56 40H40V56C40 58.2091 38.2091 60 36 60H28C25.7909 60 24 58.2091 24 56V40H8C5.79086 40 4 38.2091 4 36V28C4 25.7909 5.79086 24 8 24H24V8Z"
          fill="#2DAF80"
        />
        <path
          d="M29 8C28.4477 8 28 8.44771 28 9V28H9C8.44772 28 8 28.4477 8 29V35C8 35.5523 8.44771 36 9 36H28V55C28 55.5523 28.4477 56 29 56H35C35.5523 56 36 55.5523 36 55V36H55C55.5523 36 56 35.5523 56 35V29C56 28.4477 55.5523 28 55 28H36V9C36 8.44772 35.5523 8 35 8H29Z"
          fill="#2DAF80"
          fill-opacity="0.3"
        />
      </svg>
      <H3>Create new {title}</H3>
    </Container>
  );
};

export default CreationCont;
