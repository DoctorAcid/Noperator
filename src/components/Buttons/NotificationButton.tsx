import React from 'react'
import styled from 'styled-components'
import IconContainer from '../IconContainer/IconContainer'

interface Props {
  notification: number
}

const NotificationWrap =  styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
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
    min-width: 16px;
    height: 16px;
    border-radius: 8px;
    background-color: #0B98E8;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: 700;
    transition: all ease-in .3s;
`

const NotificationButton = ({notification} : Props) => {
  return (
    <NotificationWrap>
      <IconContainer size='md'>
        <svg width="26" height="31" viewBox="0 0 26 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 4C14.1046 4 15 3.10457 15 2C15 0.895431 14.1046 0 13 0C11.8954 0 11 0.895431 11 2C11 3.10457 11.8954 4 13 4Z" fill="#ADB5BD"/>
          <path d="M4 15C4 10.0294 8.02944 6 13 6C17.9706 6 22 10.0294 22 15V22C22 24.2091 23.7909 26 26 26H0C2.20914 26 4 24.2091 4 22V15Z" fill="#ADB5BD"/>
          <path d="M10 28C10 28.7956 10.3161 29.5587 10.8787 30.1213C11.4413 30.6839 12.2044 31 13 31C13.7956 31 14.5587 30.6839 15.1213 30.1213C15.6839 29.5587 16 28.7957 16 28H10Z" fill="#ADB5BD"/>
        </svg>
      </IconContainer>
      <span>{notification}</span>
    </NotificationWrap>
  )
}

export default NotificationButton