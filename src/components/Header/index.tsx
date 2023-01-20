import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ColumnContainer from "../ColumnContainer/ColumnContainer";
import NotificationButton from "../Buttons/NotificationButton";
import RowContainer from "../RowContainer/RowContainer";
import avatarImg from "../../images/7309681.jpg";
import BackButton from "../Buttons/BackButton";
import { useLocation } from "react-router-dom";

interface Props {
  title?: string;
  description?: string;
  backButton?: boolean;
}

const ImageContainer = styled.div`
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  clip-path: circle(50% at center);
  background: #0b98e80d;
`;

const RequestButton = styled.button`
  border: none;
  background-color: #0b98e8;
  color: #ffffff;
  padding: 2px 12px;
  border-radius: 8px;
  font-weight: 700;
  transition: all ease-in 0.3s;
  &:hover {
    background-color: #0b7dbd;
    transition: all ease-out 0.3s;
  }
`;

const ThinText = styled.h1`
  font-weight: 200;
`;

const Header = ({ title, description, backButton }: Props) => {
  const location = useLocation();
  const [url, setUrl] = useState("/");
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  return (
    <RowContainer justify="sb">
      {url === "/" ? (
        <RowContainer gap="md" width="fit-content">
          <ImageContainer>
            <img width={64} src={avatarImg} alt="avatar" />
          </ImageContainer>
          <ColumnContainer align="fs">
            <RowContainer gap="sm">
              <ThinText>Hello</ThinText>
              <h1>Mudith</h1>
              <h1>👋</h1>
            </RowContainer>
            <RowContainer gap="sm">
              <RequestButton>Request</RequestButton>
              <p> a free demo</p>
            </RowContainer>
          </ColumnContainer>
        </RowContainer>
      ) : (
        <RowContainer gap="lg" width="max-content">
          {backButton ? <BackButton /> : null}
          <ColumnContainer>
            <h1>{title}</h1>
            <p>{description}</p>
          </ColumnContainer>
        </RowContainer>
      )}

      <RowContainer gap="lg" width="max-content">
        <NotificationButton notification={2} />
        {url !== "/" ? (
          <ImageContainer>
            <img width={48} src={avatarImg} alt="avatar" />
          </ImageContainer>
        ) : null}
      </RowContainer>
    </RowContainer>
  );
};

export default Header;
