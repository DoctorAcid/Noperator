import React from 'react'
import styled from 'styled-components'
import { ThirdyButton } from '../../components/Buttons/Buttons'
import ColumnContainer from '../../components/ColumnContainer/ColumnContainer'
import IconContainer from '../../components/IconContainer/IconContainer'
import RowContainer from '../../components/RowContainer/RowContainer'

const Wrapper = styled.div`
    flex: 39%;
    flex-direction: column;
    background-color: #FFFFFF;
    border-radius: 16px;
`

const ContentWrap = styled(ColumnContainer)`
    padding: 12px 0;
`

const RecantActivity = () => {
  return (
    <Wrapper>
        <RowContainer padding='24px' justify='sb'>
            <h3>Pick up where you left</h3>
            <ThirdyButton size='sm' width='80px'>View all</ThirdyButton>
        </RowContainer>
        <RowContainer padding='4px 24px' justify='sb' style={{backgroundColor: '#F8F9FA'}}>
            <p>Strategy</p>
            <p>Compeltion</p>
        </RowContainer>

        <ContentWrap>
            <RowContainer justify='sb' padding='12px 24px'>
                <RowContainer gap='md'>
                    <IconContainer>
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="32" cy="32" r="27" stroke="#E95671" stroke-width="2"/>
                            <circle cx="32" cy="32" r="23" fill="#E95671" fill-opacity="0.3"/>
                            <path d="M22 38L28 32L32 36L42 26M42 26H37M42 26V31.1429" stroke="#E95671" stroke-width="4" stroke-linecap="round"/>
                        </svg>
                    </IconContainer>
                    <span className='name_tag'>adani ent</span>
                </RowContainer>
                <h2>25%</h2>
            </RowContainer>

            <RowContainer justify='sb' padding='12px 24px'>
                <RowContainer gap='md'>
                    <IconContainer>
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="32" cy="32" r="27" stroke="#A10BE8" stroke-width="2"/>
                            <circle cx="32" cy="32" r="23" fill="#A10BE8" fill-opacity="0.3"/>
                            <path d="M32 19L34.9187 27.9828H44.3637L36.7225 33.5344L39.6412 42.5172L32 36.9656L24.3588 42.5172L27.2775 33.5344L19.6363 27.9828H29.0813L32 19Z" fill="#A10BE8"/>
                        </svg>
                    </IconContainer>
                    <span className='name_tag'>adani ent</span>
                </RowContainer>
                <h2>25%</h2>
            </RowContainer>

            <RowContainer justify='sb' padding='12px 24px'>
                <RowContainer gap='md'>
                    <IconContainer>
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="32" cy="32" r="27" stroke="#2DAF80" stroke-width="2"/>
                            <circle cx="32" cy="32" r="23" fill="#2DAF80" fill-opacity="0.3"/>
                            <path d="M27.5136 25.2182C25.7813 25.2481 22.5356 25.9082 19.9794 28.4644C21.0161 28.7123 23.0688 29.4246 24.4783 30.5564C24.898 28.8644 25.862 27.0673 27.5136 25.2182Z" fill="#2DAF80"/>
                            <path d="M38.7818 36.4866C38.7519 38.2189 38.0918 41.4646 35.5356 44.0208C35.2877 42.9841 34.5754 40.9314 33.4436 39.5218C35.1356 39.1022 36.9327 38.1382 38.7818 36.4866Z" fill="#2DAF80"/>
                            <path d="M19.979 44.0208C21.1488 44.2652 23.9973 44.2452 26.033 42.2095C28.0688 40.1737 27.0864 38.3277 26.3407 37.6591C25.6722 36.9135 23.8261 35.9311 21.7904 37.9668C19.7547 40.0026 19.7346 42.851 19.979 44.0208Z" fill="#2DAF80"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M29.7282 25.7867C34.9306 20.5842 41.4244 19.7473 44.021 19.9792C44.2528 22.5757 43.4159 29.0695 38.2135 34.2719C33.011 39.4744 29.0791 37.7495 27.7634 36.2367C26.2506 34.9211 24.5258 30.9891 29.7282 25.7867ZM34.8286 29.1715C36.0001 30.3431 37.8996 30.3431 39.0712 29.1715C40.2428 28 40.2428 26.1005 39.0712 24.9289C37.8996 23.7573 36.0001 23.7573 34.8286 24.9289C33.657 26.1005 33.657 28 34.8286 29.1715Z" fill="#2DAF80"/>
                        </svg>
                    </IconContainer>
                    <span className='name_tag'>adani ent</span>
                </RowContainer>
                <h2>25%</h2>
            </RowContainer>
        </ContentWrap>
    </Wrapper>
  )
}

export default RecantActivity