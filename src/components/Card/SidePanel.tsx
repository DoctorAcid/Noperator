import React from 'react'
import styled from 'styled-components'
import { PrimaryButton, SecondaryButton } from '../Buttons/Buttons'
import ColumnContainer from '../ColumnContainer/ColumnContainer'
import { HDivLine, VDivLine } from '../Divider/Divider'
import IconContainer from '../IconContainer/IconContainer'
import RowContainer from '../RowContainer/RowContainer'
import AdaniImg from '../../images/stocks/adani.png'
import UniImg from '../../images/stocks/unilever.png'
import AirImg from '../../images/stocks/airtel.png'
import HeroImg from '../../images/stocks/hero.png'
import TataImg from '../../images/stocks/tata.png'
import { StockIcons } from '../StockIcons/StockIcons'

const Wrapper = styled.div`

    display: flex;
    flex-direction: column;
    gap: 16px;
`

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    background-color: #FFFFFF;
    border-radius: 16px;
    padding-bottom: 24px;
    box-shadow: 8px 8px 40px 0px #0000000D;
`

const H1 = styled.h1`
    color: #0B98E8;
`

const ColoredCont = styled.div`
    display: flex;
    flex: 1;
    background-color: #0B98E80D;
    border-radius: 8px;
    margin: 0 24px;
`

const SidePanel = () => {
  return (
    <Wrapper>
        <CardWrapper>
            <RowContainer padding='24px 24px 0 24px' justify='sb'>
                <RowContainer width='fit-content' gap='sm'>
                    <PrimaryButton size='md' width='fit-content'>Positions</PrimaryButton>
                    <SecondaryButton size='md' width='fit-content'>Holdings</SecondaryButton>
                </RowContainer>
            </RowContainer>
            <HDivLine />
            <RowContainer gap='md' padding='0 24px'>
                <IconContainer size='lg'>
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-inside-1_279_1565" fill="white">
                        <path d="M57 32C57 36.9445 55.5338 41.778 52.7867 45.8893C50.0397 50.0005 46.1352 53.2048 41.5671 55.097C36.9989 56.9892 31.9723 57.4843 27.1227 56.5196C22.2732 55.555 17.8186 53.174 14.3223 49.6777C10.826 46.1814 8.445 41.7268 7.48037 36.8773C6.51574 32.0277 7.01082 27.0011 8.90301 22.4329C10.7952 17.8648 13.9995 13.9603 18.1107 11.2133C22.222 8.46622 27.0555 7 32 7V32H57Z"/>
                        </mask>
                        <path d="M57 32C57 36.9445 55.5338 41.778 52.7867 45.8893C50.0397 50.0005 46.1352 53.2048 41.5671 55.097C36.9989 56.9892 31.9723 57.4843 27.1227 56.5196C22.2732 55.555 17.8186 53.174 14.3223 49.6777C10.826 46.1814 8.445 41.7268 7.48037 36.8773C6.51574 32.0277 7.01082 27.0011 8.90301 22.4329C10.7952 17.8648 13.9995 13.9603 18.1107 11.2133C22.222 8.46622 27.0555 7 32 7V32H57Z" stroke="#0B98E8" stroke-width="4" mask="url(#path-1-inside-1_279_1565)"/>
                        <mask id="path-2-inside-2_279_1565" fill="white">
                        <path d="M35 4C38.283 4 41.5339 4.64664 44.5671 5.90301C47.6002 7.15938 50.3562 9.00087 52.6777 11.3223C54.9991 13.6438 56.8406 16.3998 58.097 19.4329C59.3534 22.4661 60 25.717 60 29L35 29V4Z"/>
                        </mask>
                        <path d="M35 4C38.283 4 41.5339 4.64664 44.5671 5.90301C47.6002 7.15938 50.3562 9.00087 52.6777 11.3223C54.9991 13.6438 56.8406 16.3998 58.097 19.4329C59.3534 22.4661 60 25.717 60 29L35 29V4Z" stroke="#0B98E8" stroke-width="4" mask="url(#path-2-inside-2_279_1565)"/>
                        <path d="M35 9C37.6264 9 40.2272 9.51732 42.6537 10.5224C45.0802 11.5275 47.285 13.0007 49.1421 14.8579C50.9993 16.715 52.4725 18.9198 53.4776 21.3463C54.4827 23.7728 55 26.3736 55 29L35 29L35 9Z" fill="#0B98E8" fill-opacity="0.3"/>
                        <path d="M52 32C52 35.9556 50.827 39.8224 48.6294 43.1114C46.4318 46.4004 43.3082 48.9638 39.6537 50.4776C35.9991 51.9913 31.9778 52.3874 28.0982 51.6157C24.2186 50.844 20.6549 48.9392 17.8579 46.1421C15.0608 43.3451 13.156 39.7814 12.3843 35.9018C11.6126 32.0222 12.0087 28.0009 13.5224 24.3463C15.0362 20.6918 17.5996 17.5682 20.8886 15.3706C24.1776 13.173 28.0444 12 32 12V32H52Z" fill="#0B98E8" fill-opacity="0.3"/>
                    </svg>
                </IconContainer>
                <ColumnContainer>
                    <p>Available Balance</p>
                    <H1>₹6274.60</H1>
                </ColumnContainer>
            </RowContainer>
            <ColoredCont>
                <ColumnContainer padding='sm'>
                    <p>Margin</p>
                    <h2>₹0.00</h2>
                </ColumnContainer>
                <VDivLine />
                <ColumnContainer padding='sm'>
                    <p>Account</p>
                    <h2>₹6274.60</h2>
                </ColumnContainer>
            </ColoredCont>
        </CardWrapper>
        <CardWrapper>
            <RowContainer gap='md' padding='24px 24px 0 24px'>
                <IconContainer size='lg'>
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21V45L32 55L52 45V21L32 9L12 21Z" fill="#A10BE8" fill-opacity="0.3"/>
                        <path d="M32 4L8 18.7925V47.3208M32 4L56 18.7925V47.3208M32 4V35.6981M8 47.3208L32 35.6981M8 47.3208L32 60L56 47.3208M32 35.6981L56 47.3208" stroke="#A10BE8" stroke-width="2"/>
                    </svg>
                </IconContainer>
                <ColumnContainer>
                    <p>Open Orders</p>
                    <h2>10</h2>
                </ColumnContainer>
            </RowContainer>
            <HDivLine />
            <RowContainer justify='sb' padding='0 24px'>
                <RowContainer gap='sm'>
                    <StockIcons>
                        <img src={AdaniImg} />
                    </StockIcons>
                    <StockIcons>
                        <img src={UniImg} />
                    </StockIcons>
                    <StockIcons>
                        <img src={AirImg} />
                    </StockIcons>
                    <StockIcons>
                        <img src={HeroImg} />
                    </StockIcons>
                    <StockIcons>
                        <img src={TataImg} />
                    </StockIcons>
                </RowContainer>
                <PrimaryButton width='fit-content' size='sm'><span>4</span><span>more</span></PrimaryButton>
            </RowContainer>
        </CardWrapper>
        <CardWrapper>
            <RowContainer gap='md' padding='24px 24px 0 24px'>
                <IconContainer size='lg'>
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="32" cy="32" r="27" stroke="#2DAF80" stroke-width="2"/>
                        <circle cx="32" cy="32" r="23" fill="#2DAF80" fill-opacity="0.3"/>
                        <path d="M23 31L30 38L42 26" stroke="#2DAF80" stroke-width="4" stroke-linecap="round"/>
                    </svg>
                </IconContainer>
                <ColumnContainer>
                    <p>Completed Orders</p>
                    <h2>3</h2>
                </ColumnContainer>
            </RowContainer>
            <HDivLine />
            <RowContainer justify='sb' padding='0 24px'>
                <RowContainer gap='sm'>
                    <StockIcons>
                        <img src={AdaniImg} />
                    </StockIcons>
                    <StockIcons>
                        <img src={UniImg} />
                    </StockIcons>
                    <StockIcons>
                        <img src={AirImg} />
                    </StockIcons>
                    <StockIcons>
                        <img src={HeroImg} />
                    </StockIcons>
                    <StockIcons>
                        <img src={TataImg} />
                    </StockIcons>
                </RowContainer>
                <PrimaryButton width='fit-content' size='sm'><span>4</span><span>more</span></PrimaryButton>
            </RowContainer>
        </CardWrapper>
    </Wrapper>
  )
}

export default SidePanel