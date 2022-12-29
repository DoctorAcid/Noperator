import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { PrimaryButton, SecondaryButton, ThirdyButton  } from '../Buttons/Buttons'
import RowContainer from '../RowContainer/RowContainer'
import ColumnContainer from '../ColumnContainer/ColumnContainer'
import './table.css'
import IconContainer from '../IconContainer/IconContainer'
import AdaniImg from '../../images/stocks/adani.png'
import UniImg from '../../images/stocks/unilever.png'
import AirImg from '../../images/stocks/airtel.png'
import HeroImg from '../../images/stocks/hero.png'
import TataImg from '../../images/stocks/tata.png'


const TableBody = styled.div`
    position: relative;
    background-color: #FFFFFF;
    width: 100%;
    border-radius: 16px;
`

const StockImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    clip-path: circle(50% at center);
`


const Table = () => {
    const [height, setHeight] = useState('')
    const ref = useRef<HTMLDivElement>(null)
    const topSection = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const height = getTableHeight() + 'px'
        setHeight(height)
    })

    function getTableHeight() {
        if (ref.current && topSection.current) {
            const top = topSection.current.offsetHeight;
            const height = ref.current.offsetHeight;
            return String(height + top)
        }
    }
    
  return (
    <TableBody style={{height: (height ? height : '')}}>
        <RowContainer ref={topSection} padding='24px' justify='sb'>
            <RowContainer width='fit-content' gap='sm'>
                <PrimaryButton size='md' width='fit-content'>Positions</PrimaryButton>
                <SecondaryButton size='md' width='fit-content'>Holdings</SecondaryButton>
            </RowContainer>
            <ThirdyButton size='sm' width='80px'>View all</ThirdyButton>
        </RowContainer>
        <div ref={ref} className='table_responsive'>
            <table>
                <thead style={{backgroundColor: '#F8F9FA', padding: '0 24px'}}>
                    <tr>
                        <th scope='col'>
                            <span >Instrument</span>
                        </th>
                        <th scope='col'>Qty</th>
                        <th scope='col'>LTP</th>
                        <th scope='col'>LTP%</th>
                        <th scope='col'>P&L</th>
                    </tr>
                </thead>
                <tbody className='first_child'>
                    <tr>
                        <th scope='col'>
                            <RowContainer gap='sm'>
                                <StockImg>
                                    <img src={AdaniImg} />
                                </StockImg>
                                <span className="name_tag">ADANIPORTS22NOV800PE</span>
                            </RowContainer>
                        </th>
                        <th scope='col'>10,000</th>
                        <th scope='col'>₹24.25</th>
                        <th scope='col'>64.29%</th>
                        <th scope='col'>+₹12,404,687.50</th>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <th scope='col'>
                            <RowContainer gap='sm'>
                                <StockImg>
                                    <img src={TataImg} />
                                </StockImg>
                                <span>TATAMOTORS22NOV564AE</span>
                            </RowContainer>
                        </th>
                        <th scope='col'>10,000</th>
                        <th scope='col'>₹24.25</th>
                        <th scope='col'>64.29%</th>
                        <th scope='col'>+₹12,404,687.50</th>
                    </tr>
                </tbody>
                
                <tbody>
                    <tr>
                        <th scope='col'>
                            <RowContainer gap='sm'>
                                <StockImg>
                                    <img src={HeroImg} />
                                </StockImg>
                                <span>HEROMOTORS22SEP212SG</span>
                            </RowContainer>
                        </th>
                        <th scope='col'>10,000</th>
                        <th scope='col'>₹24.25</th>
                        <th scope='col'>64.29%</th>
                        <th scope='col'>+₹12,404,687.50</th>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <th scope='col'>
                            <RowContainer gap='sm'>
                                <StockImg>
                                    <img src={UniImg} />
                                </StockImg>
                                <span>UNILIVER22AUG80036ED</span>
                            </RowContainer>
                        </th>
                        <th scope='col'>10,000</th>
                        <th scope='col'>₹24.25</th>
                        <th scope='col'>64.29%</th>
                        <th scope='col'>+₹12,404,687.50</th>
                    </tr>
                </tbody>

                <tbody>
                    <tr>
                        <th scope='col'>
                            <RowContainer gap='sm'>
                                <StockImg>
                                    <img src={AirImg} />
                                </StockImg>
                                <span>BHRATIAIRTEL22NOV505SP</span>
                            </RowContainer>
                        </th>
                        <th scope='col'>10,000</th>
                        <th scope='col'>₹24.25</th>
                        <th scope='col'>64.29%</th>
                        <th scope='col'>+₹12,404,687.50</th>
                    </tr>
                </tbody>
            </table>
        </div>
    </TableBody>
  )
}

export default Table