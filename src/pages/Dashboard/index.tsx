import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import RowContainer from '../../components/RowContainer/RowContainer'
import ColumnContainer from '../../components/ColumnContainer/ColumnContainer'
import avatarImg from '../../images/7309681.jpg'
import IconContainer from '../../components/IconContainer/IconContainer'
import Table from '../../components/Table/Table'
import SidePanel from '../../components/Card/SidePanel'
import RecantActivity from './RecantActivity'
import Title from '../../components/Title/Title'
import Deploy from './Deploy'
import Strategies from '../../components/Card/Strategies'
import { SecondaryButton } from '../../components/Buttons/Buttons'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 32px;
  align-items: centers;
  justify-content: flex-start;
  padding: 32px;
  overflow-y: auto;
`

const ContentWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 16px;
`

const ImageContainer = styled.div`
  display:flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  clip-path: circle(50% at center);
  background: #0B98E80D;
`

const RequestButton = styled.button`
  border: none;
  background-color: #0B98E8;
  color: #FFFFFF;
  padding: 2px 12px;
  border-radius: 8px;
  font-weight: 700;
  transition: all ease-in .3s;
  &:hover {
    background-color: #0B7DBD;
    transition: all ease-out .3s;
  }
`

const Notification = styled.div`
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
    width: 16px;
    height: 16px;
    border-radius: 8px;
    background-color: #0B98E8;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: 700;
    transition: all ease-in .3s;
`

const ThinText = styled.h1`
  font-weight: 200;
`

const Shader = styled.div`
    position: absolute;
    right: 0;
    width: 104px;
    z-index: 1;
    background: linear-gradient(270deg, #F3F8FA 33.33%, rgba(243, 248, 250, 0) 100%);
`

const RArrow = styled(SecondaryButton)`
    position: absolute;
    right: 0;
    width: 56px;
    height: 56px;
    border-radius: 16px;
    z-index: 2;
    transform: translateY(180%);
    &:hover {
      transform: translateY(180%);
    }

    &:hover svg path{
      fill: #0B98E8;
    }

    &:active{
      background-color: #0B98E8;
    }

    &:active svg path {
      fill: #FFF;
    }
`

const ScrollWrap = styled.div`
    position: relative;
    width: 100%;
`

const HorizontalScroll = styled.div`
    position: absolute;
    display: flex;
    gap: 16px;
    overflow-x: hidden;
    width: 100%;
`

const Dashboard = () => {
  const [height, setHeight] = useState(0)
  const [isScroll, setIsScroll] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const height = Number(getHeight())
    setHeight(height)
    const scrollBehavior = Boolean(checkScroll())
    setIsScroll(scrollBehavior)
  })

  function getHeight() {
    if (ref.current) {
      const height = ref.current.offsetHeight;
      return height
    }
  }
  
  function checkScroll() {
    if (ref.current) {
      const {clientWidth, scrollWidth} = ref.current
      if (scrollWidth > clientWidth) {
        return true
      }
    }
  }

  const scroll = () => {
    console.log('clicked')
    let scrollAmount = 0
    const current = ref.current
    if (current) {
      const slideTimer = setInterval(() => {
        current.scrollLeft += -20
        scrollAmount += Math.abs(-20)
        if (scrollAmount >= 100) {
          clearInterval(slideTimer)
        }
      }, 10)
    }
  }

  const current = ref.current

  return (
    <Wrapper>
      <RowContainer justify='sb' align='fs'>
        <RowContainer gap='md' width='fit-content'>
          <ImageContainer>
            <img width={64} src={avatarImg} alt='avatar'/>
          </ImageContainer>
          <ColumnContainer align='fs'>
            <RowContainer gap='sm'>
              <ThinText>Hello</ThinText>
              <h1>Mudith</h1>
              <h1>👋</h1>
            </RowContainer>
            <RowContainer gap='sm'>
              <RequestButton>Request</RequestButton>
              <p> a free demo</p>
            </RowContainer>
          </ColumnContainer>
        </RowContainer>
        <Notification>
          <IconContainer size='md'>
            <svg width="26" height="31" viewBox="0 0 26 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 4C14.1046 4 15 3.10457 15 2C15 0.895431 14.1046 0 13 0C11.8954 0 11 0.895431 11 2C11 3.10457 11.8954 4 13 4Z" fill="#ADB5BD"/>
              <path d="M4 15C4 10.0294 8.02944 6 13 6C17.9706 6 22 10.0294 22 15V22C22 24.2091 23.7909 26 26 26H0C2.20914 26 4 24.2091 4 22V15Z" fill="#ADB5BD"/>
              <path d="M10 28C10 28.7956 10.3161 29.5587 10.8787 30.1213C11.4413 30.6839 12.2044 31 13 31C13.7956 31 14.5587 30.6839 15.1213 30.1213C15.6839 29.5587 16 28.7957 16 28H10Z" fill="#ADB5BD"/>
            </svg>
          </IconContainer>
          <span>2</span>
        </Notification>
      </RowContainer>
      <RowContainer gap='md' align='fs' style={{position: 'relative'}}>
        <ColumnContainer gap='32px'>
          <ColumnContainer gap='md'>
            <Table />
            <ContentWrap>
              <RecantActivity />
              <Deploy />
            </ContentWrap>
          </ColumnContainer>
          <Title titleName='Discover Strategies'/>
          <ScrollWrap style={{height: (height ? (String(height) + 'px') : '')}}>
            <Shader style={{height : (height ? (String(height) + 'px') : ''), display: (isScroll ? 'flex' : 'none')}} />
            <RArrow onClick={() => {scroll()}}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.72848 20.7863C9.01811 20.36 8.78777 19.4386 9.21399 18.7283L13.2509 12L9.21399 5.27176C8.78777 4.56139 9.01811 3.64 9.72848 3.21378C10.4389 2.78756 11.3602 3.0179 11.7865 3.72827L16.7495 12L11.7865 20.2718C11.3602 20.9821 10.4389 21.2125 9.72848 20.7863Z" fill="#495057"/>
              </svg>
            </RArrow>
            <HorizontalScroll ref={ref}>
              <Strategies title='Bolling band and RSI' stocks={22} date='10 Nov 2022'/>
              <Strategies title='We have Nothing' stocks={10} date='12 Dec 2022'/>
              <Strategies title='We have Nothing' stocks={10} date='12 Dec 2022'/>
              <Strategies title='We have Nothing' stocks={10} date='12 Dec 2022'/>
              <Strategies title='We have Nothing' stocks={10} date='12 Dec 2022'/>              
            </HorizontalScroll>
          </ScrollWrap>
          <Title titleName='Discover Scanners'/>
          <ScrollWrap style={{height: (height ? (String(height) + 'px') : '')}}>
            <Shader style={{height : (height ? (String(height) + 'px') : ''), display: (isScroll ? 'flex' : 'none')}} />
            <HorizontalScroll ref={ref}>
              <Strategies title='Bolling band and RSI' stocks={22} date='10 Nov 2022'/>
              <Strategies title='We have Nothing' stocks={10} date='12 Dec 2022'/>
              <Strategies title='We have Nothing' stocks={10} date='12 Dec 2022'/>
              <Strategies title='We have Nothing' stocks={10} date='12 Dec 2022'/>
              <Strategies title='We have Nothing' stocks={10} date='12 Dec 2022'/>              
            </HorizontalScroll>
          </ScrollWrap>
          <Title titleName='All Stocks'/>
          <ScrollWrap style={{height: (height ? (String(height) + 'px') : '')}}>
            <Shader style={{height : (height ? (String(height) + 'px') : ''), display: (isScroll ? 'flex' : 'none')}} />
            <HorizontalScroll ref={ref}>
              <Strategies title='Bolling band and RSI' stocks={22} date='10 Nov 2022'/>
              <Strategies title='We have Nothing' stocks={10} date='12 Dec 2022'/>
              <Strategies title='We have Nothing' stocks={10} date='12 Dec 2022'/>
              <Strategies title='We have Nothing' stocks={10} date='12 Dec 2022'/>
              <Strategies title='We have Nothing' stocks={10} date='12 Dec 2022'/>              
            </HorizontalScroll>
          </ScrollWrap>
        </ColumnContainer>
        <ColumnContainer width='20%' style={{minWidth: '374px'}}>
          <SidePanel/>
        </ColumnContainer>
      </RowContainer>
    </Wrapper>
  )
}

export default Dashboard