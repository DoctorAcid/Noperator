import React, { useEffect, useState } from 'react'
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
import { useLocation } from 'react-router-dom'

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

const DeployCard = styled(CardWrapper)`
    gap: 0;
    padding-bottom: 12px;
`

const Clickable = styled(RowContainer)`
    transition: all ease-in .3s;
    cursor: pointer;
    &:hover {
        background-color: #F8F9FA;
        transition: all ease-out .3s;
    }
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
    const location = useLocation()
    const [url, setUrl] = useState('/')
    useEffect(() => {
      setUrl(location.pathname)
    }, [location])
    
  return (
    <Wrapper>
        {url === '/' ? (
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
        ) : (
            <DeployCard style={{display: (url != '/' ? 'flex' : 'none')}}>
                <RowContainer padding='24px' justify='sb'>
                    <h3>Deployed</h3>
                </RowContainer>
                <HDivLine />
                <Clickable gap='md' padding='12px 24px'>
                    <IconContainer size='lg'>
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M28.4803 39.4855C27.6063 39.8098 26.5916 39.667 25.9636 38.9779L10.8855 22.4328C10.1329 21.6069 10.2021 20.3266 11.112 19.6779C15.0048 16.9023 22.728 13 32 13C41.2721 13 48.9952 16.9023 52.8881 19.6779C53.7979 20.3266 53.8672 21.6069 53.1145 22.4328L38.0364 38.9779C37.4085 39.667 36.3937 39.8098 35.5197 39.4855C34.4235 39.0787 33.2377 38.8565 32 38.8565C30.7623 38.8565 29.5765 39.0787 28.4803 39.4855Z" fill="#2DAF80" fill-opacity="0.3"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.41638 19.1552C12.7327 12.6321 22.1794 9 31.9999 9C41.8204 9 51.267 12.6321 58.5834 19.1552C60.4903 20.8553 60.4057 23.7197 58.7262 25.4174C56.9863 27.176 54.2717 27.0879 52.5472 25.5779C46.8586 20.597 39.5686 17.8325 31.9999 17.8325C24.4312 17.8325 17.1411 20.5971 11.4526 25.5779C9.72811 27.0879 7.01345 27.176 5.27358 25.4174C3.59407 23.7198 3.50951 20.8553 5.41638 19.1552ZM12.2087 25.9718C17.7171 21.2618 24.7235 18.6471 31.9999 18.6471C39.2762 18.6471 46.2827 21.2618 51.791 25.9718C53.7642 27.6591 53.6493 30.549 51.9814 32.2349C50.2359 33.9992 47.5512 33.8793 45.8313 32.4577C41.9431 29.2437 37.0606 27.4683 31.9999 27.4683C26.9392 27.4683 22.0567 29.2437 18.1685 32.4577C16.4485 33.8794 13.7639 33.9992 12.0183 32.2349C10.3504 30.549 10.2355 27.6591 12.2087 25.9718ZM19.0509 32.7812C22.7315 29.8897 27.283 28.2941 31.9999 28.2941C36.7168 28.2941 41.2682 29.8897 44.9489 32.7812C47.0603 34.4399 46.8815 37.3899 45.2356 39.0534C43.4765 40.8316 40.847 40.6437 39.1461 39.4183C37.0713 37.9237 34.5762 37.1069 31.9999 37.1069C29.4236 37.1069 26.9284 37.9237 24.8537 39.4183C23.1527 40.6437 20.5233 40.8316 18.7641 39.0534C17.1183 37.3899 16.9395 34.4399 19.0509 32.7812ZM38.7719 47.1765C38.7719 50.9247 35.7602 54 31.9999 54C28.2396 54 25.2278 50.9247 25.2278 47.1765C25.2278 43.4282 28.2396 40.3529 31.9999 40.3529C35.7602 40.3529 38.7719 43.4282 38.7719 47.1765ZM6.74735 20.648C5.75725 21.5308 5.76183 23.0672 6.69536 24.0108C7.62889 24.9544 9.13719 24.9469 10.1351 24.0732C16.1852 18.7757 23.9424 15.8325 31.9999 15.8325C40.0573 15.8325 47.8146 18.7757 53.8647 24.0732C54.8626 24.9469 56.3709 24.9544 57.3044 24.0108C58.2379 23.0672 58.2425 21.5308 57.2524 20.648C50.2995 14.449 41.3256 11 31.9999 11C22.6742 11 13.7003 14.449 6.74735 20.648ZM13.5085 27.4919C12.5029 28.3517 12.5088 29.8869 13.4401 30.8283C14.3715 31.7697 15.8746 31.7589 16.8943 30.9161C21.1377 27.4085 26.4698 25.4683 31.9999 25.4683C37.5299 25.4683 42.8621 27.4085 47.1055 30.9161C48.1251 31.7589 49.6283 31.7697 50.5596 30.8283C51.491 29.8869 51.4969 28.3517 50.4913 27.4919C45.342 23.0889 38.7955 20.6471 31.9999 20.6471C25.2043 20.6471 18.6578 23.0889 13.5085 27.4919ZM20.1859 37.6468C19.2562 36.7071 19.2482 35.1695 20.2864 34.3539C23.6182 31.7365 27.7355 30.2941 31.9999 30.2941C36.2643 30.2941 40.3816 31.7365 43.7134 34.3539C44.7515 35.1695 44.7436 36.7071 43.8139 37.6468C42.8841 38.5866 41.3859 38.567 40.3151 37.7956C37.9035 36.0582 35.0002 35.1069 31.9999 35.1069C28.9995 35.1069 26.0962 36.0582 23.6846 37.7956C22.6139 38.567 21.1156 38.5866 20.1859 37.6468ZM31.9999 52C34.6354 52 36.7719 49.8404 36.7719 47.1765C36.7719 44.5125 34.6354 42.3529 31.9999 42.3529C29.3644 42.3529 27.2278 44.5125 27.2278 47.1765C27.2278 49.8404 29.3644 52 31.9999 52Z" fill="#2DAF80"/>
                            <circle cx="32" cy="47" r="2" fill="#2DAF80" fill-opacity="0.3"/>
                        </svg>
                    </IconContainer>
                    <ColumnContainer>
                        <h3>Live Trade</h3>
                        <p>16 Deployed</p>
                    </ColumnContainer>
                </Clickable>

                <Clickable gap='md' padding='12px 24px'>
                    <IconContainer size='lg'>
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M39.294 8.59986L38.5799 9.29993L39.294 8.59986ZM49.4281 18.9367L50.1422 18.2366L49.4281 18.9367ZM13 10V54H15V10H13ZM16 57H48V55H16V57ZM51 54V20.3369H49V54H51ZM50.1422 18.2366L40.0081 7.89979L38.5799 9.29993L48.7141 19.6368L50.1422 18.2366ZM37.8658 7H16V9H37.8658V7ZM40.0081 7.89979C39.4438 7.32428 38.6718 7 37.8658 7V9C38.1345 9 38.3918 9.10809 38.5799 9.29993L40.0081 7.89979ZM51 20.3369C51 19.5515 50.692 18.7974 50.1422 18.2366L48.7141 19.6368C48.8973 19.8237 49 20.0751 49 20.3369H51ZM48 57C49.6569 57 51 55.6569 51 54H49C49 54.5523 48.5523 55 48 55V57ZM13 54C13 55.6569 14.3431 57 16 57V55C15.4477 55 15 54.5523 15 54H13ZM15 10C15 9.44772 15.4477 9 16 9V7C14.3431 7 13 8.34315 13 10H15Z" fill="#FFC849"/>
                            <path d="M18 51V13C18 12.4477 18.4477 12 19 12H36.5858C36.851 12 37.1054 12.1054 37.2929 12.2929L45.7071 20.7071C45.8946 20.8946 46 21.149 46 21.4142V51C46 51.5523 45.5523 52 45 52H19C18.4477 52 18 51.5523 18 51Z" fill="#FFC849" fill-opacity="0.3"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21 35C21 33.8954 21.8954 33 23 33H32C33.1046 33 34 33.8954 34 35C34 36.1046 33.1046 37 32 37H23C21.8954 37 21 36.1046 21 35ZM21 41C21 39.8954 21.8954 39 23 39H41C42.1046 39 43 39.8954 43 41C43 42.1046 42.1046 43 41 43H23C21.8954 43 21 42.1046 21 41ZM23 45C21.8954 45 21 45.8954 21 47C21 48.1046 21.8954 49 23 49H41C42.1046 49 43 48.1046 43 47C43 45.8954 42.1046 45 41 45H23Z" fill="#FFC849"/>
                        </svg>
                    </IconContainer>
                    <ColumnContainer>
                        <h3>Paper Trade</h3>
                        <p>Not Deployed</p>
                    </ColumnContainer>
                </Clickable>

                <Clickable gap='md' padding='12px 24px'>
                    <IconContainer size='lg'>
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="11" y="11" width="42" height="42" rx="3" stroke="#0B98E8" stroke-width="2"/>
                            <rect x="15" y="15" width="34" height="34" rx="1" fill="#0B98E8" fill-opacity="0.3"/>
                            <path d="M19 33C19 33.5523 19.4477 34 20 34C20.5523 34 21 33.5523 21 33H19ZM19 11V33H21V11H19Z" fill="#0B98E8"/>
                            <path d="M25 28C25 28.5523 25.4477 29 26 29C26.5523 29 27 28.5523 27 28H25ZM25 11V28H27V11H25Z" fill="#0B98E8"/>
                            <path d="M31 39C31 39.5523 31.4477 40 32 40C32.5523 40 33 39.5523 33 39H31ZM31 11V39H33V11H31Z" fill="#0B98E8"/>
                            <path d="M58 32H6" stroke="#0B98E8" stroke-width="4" stroke-linecap="round"/>
                            <path d="M37 33C37 33.5523 37.4477 34 38 34C38.5523 34 39 33.5523 39 33H37ZM37 11V33H39V11H37Z" fill="#0B98E8"/>
                            <path d="M43 22C43 22.5523 43.4477 23 44 23C44.5523 23 45 22.5523 45 22H43ZM43 11V22H45V11H43Z" fill="#0B98E8"/>
                        </svg>
                    </IconContainer>
                    <ColumnContainer>
                        <h3>Scanner</h3>
                        <p>Not Live</p>
                    </ColumnContainer>
                </Clickable>
            </DeployCard>
        )}

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