import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";

const BackWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 64px;
  height: 64px;
  border-radius: 16px;
  background-color: #FFFFFF;
  transition: all ease-in .3s;
  cursor: pointer;

  &:hover {
    background-color: #0B98E8;
    transition: all ease-out .3s;
  }

  &:hover svg path {
    fill: #FFFFFF;
    transition: all ease-out .3s;
  }

  &:hover span{
    background-color: #FFFFFF;
    color: #0B98E8;
    transition: all ease-out .3s;
  }

  & span{
    position: absolute;
    top: 8px;
    right: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
    border-radius: 8px;
    background-color: #0B98E8;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: 700;
    transition: all ease-in .3s;
`;

const BackButton = () => {
  const location = useLocation();
  const [url, setUrl] = useState("");

  const history = useHistory();

  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  return (
    <BackWrap
      onClick={() => history.goBack()}
      style={{ display: url === "/stratrgySingle" ? "flex" : "none" }}
    >
      <svg
        width="13"
        height="24"
        viewBox="0 0 13 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.2496 0.438336C13.1121 1.12836 13.252 2.38694 12.562 3.24946L5.56146 12.0001L12.562 20.7507C13.252 21.6132 13.1121 22.8718 12.2496 23.5618C11.3871 24.2518 10.1285 24.112 9.43848 23.2495L0.438965 12.0001L9.43848 0.750683C10.1285 -0.11184 11.3871 -0.251683 12.2496 0.438336Z"
          fill="#0B98E8"
        />
      </svg>
    </BackWrap>
  );
};

export default BackButton;
