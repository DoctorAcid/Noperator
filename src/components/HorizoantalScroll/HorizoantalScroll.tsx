import { truncate } from 'fs'
import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { flattenDiagnosticMessageText } from 'typescript'
import { SecondaryButton } from '../Buttons/Buttons'
import RowContainer from '../RowContainer/RowContainer'

interface Props {
    children: React.ReactElement
}

const RShader = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    right: 0;
    width: 80px;
    z-index: 1;
    background: linear-gradient(270deg, #F3F8FA 33.33%, rgba(243, 248, 250, 0) 100%);
`

const LShader = styled(RShader)`
    left: 0;
    justify-content: flex-start;
    background: linear-gradient(90deg, #F3F8FA 33.33%, rgba(243, 248, 250, 0) 100%);
`

const Arrow = styled(SecondaryButton)`
    z-index: 2;
    width: 56px;
    height: 56px;
    border-radius: 16px;


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

const HorizontalWrap = styled.div`
    position: absolute;
    display: flex;
    gap: 16px;
    overflow-x: hidden;
    width: 100%;
`

const ArrowButtons = styled(RowContainer)`
    position: absolute;
    right: 0;
    gap: 8px;
    width: max-content;
    z-index: 2;
    transform: translateY(180%);
`

const HorizoantalScroll = ({children}: Props) => {
    const [height, setHeight] = useState('')
    const [isScroll, setIsScroll] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const ref = useRef<HTMLDivElement>(null)
    const element = ref.current
  
    useEffect(() => {
      checkScroll()
      const height = String(getHeight()) + 'px'
      setHeight(height)
    })

    function getHeight() {
      if (ref.current) {
        const height = ref.current.offsetHeight;
        return height
      }
    }

    function checkScroll() {
      if (element) {
        const {clientWidth, scrollWidth} = element
        if (element.scrollLeft > 0) {
          setScrolled(true)
        }
        if (element.scrollLeft === 0) {
          setScrolled(false)
        }
        if (scrollWidth > clientWidth) {
          setIsScroll(true)
        }
        if ((element.scrollWidth - element.clientWidth) === element.scrollLeft){
          setIsScroll(false)
        }
      }
    }

    if (element) {
      element.addEventListener('scroll', () => {
        const scrollWidth = element.scrollWidth - element.clientWidth
        const { scrollLeft } = element
        if (scrollLeft > 0) {
          setScrolled(true)
        }
        if (scrollLeft === 0) {
          setScrolled(false)
        }
        if (scrollLeft === scrollWidth){
          setIsScroll(false)
        }
        if (scrollLeft < scrollWidth) {
          setIsScroll(true)
        }
      })
    }
  
    const scrollR = () => {
        const current = ref.current
      if (current) {
        let scrollAmount = 0
        const sliderTimer = setInterval(() => {
            current.scrollLeft += 260
            scrollAmount += Math.abs(260)
            if (scrollAmount >= 100) {
                clearInterval(sliderTimer)
            }
        }, 25)
      }
    }

    
    const scrollL = () => {
        const current = ref.current
      if (current) {
        let scrollAmount = 0
        const sliderTimer = setInterval(() => {
            current.scrollLeft -= 260
            scrollAmount += Math.abs(-260)
            if (scrollAmount >= 100) {
                clearInterval(sliderTimer)
            }
        }, 25)
      }
    }
  return (
    <ScrollWrap style={{height: (height ? height : '')}}>
        <RShader style={{height : (height ? height : ''), display: (isScroll ? 'flex' : 'none')}} >
          <Arrow onClick={() => scrollR()}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M9.72848 20.7863C9.01811 20.36 8.78777 19.4386 9.21399 18.7283L13.2509 12L9.21399 5.27176C8.78777 4.56139 9.01811 3.64 9.72848 3.21378C10.4389 2.78756 11.3602 3.0179 11.7865 3.72827L16.7495 12L11.7865 20.2718C11.3602 20.9821 10.4389 21.2125 9.72848 20.7863Z" fill="#495057"/>
              </svg>
          </Arrow>
        </RShader>
        <LShader style={{height : (height ? height : ''), display: (scrolled ? 'flex' : 'none')}}>
          <Arrow onClick={() => scrollL()}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2715 3.21374C14.9819 3.63997 15.2122 4.56136 14.786 5.27173L10.7491 12L14.786 18.7282C15.2122 19.4386 14.9819 20.36 14.2715 20.7862C13.5611 21.2124 12.6398 20.9821 12.2135 20.2717L7.25049 12L12.2135 3.72824C12.6398 3.01787 13.5611 2.78752 14.2715 3.21374Z" fill="#495057"/>
            </svg>
          </Arrow>
        </LShader>
        <HorizontalWrap ref={ref}>
            {children}
        </HorizontalWrap>
    </ScrollWrap>
  )
}

export default HorizoantalScroll