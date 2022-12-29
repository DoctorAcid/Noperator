import React from 'react'
import styled from 'styled-components'
import RowContainer from '../RowContainer/RowContainer'

interface Props {
    color: 'r' | 'y' | 'g'
    width: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10'
}

const Bar = styled.div<{
    width?: string
    color?: 'y' | 'g' | 'r'
}>`
    height: 4px;
    border-radius: 2px;
    width: ${({width}) => (width === '1' && '10%') || (width === '2' && '20%') || (width === '3' && '30%') || (width === '4' && '40%') || (width === '5' && '50%') || (width === '6' && '60%') || (width === '7' && '70%') || (width === '8' && '80%') || (width === '9' && '90%') || (width === '10' && '100%')};
    background-color: ${({color}) => (color === 'y' && '#FFC849') || (color === 'g' && '#2DAF80') || (color === 'r' && '#E95671')};
`

const P = styled.p<{
    color?: 'y' | 'g' | 'r'
}>`
    width: 20px;
    text-align: right;
    color: ${({color}) => (color === 'y' && '#FFC849') || (color === 'g' && '#2DAF80') || (color === 'r' && '#E95671')};
`

const LBar = ({width, color}: Props) => {
  return (
    <RowContainer gap='sm' justify='fe'>
        <Bar width={width} color={color}/>
        <P color={color}>{width}</P>
    </RowContainer>
  )
}

export default LBar