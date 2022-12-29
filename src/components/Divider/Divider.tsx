import React from 'react'
import styled from 'styled-components'

export const HDivLine = styled.div`
    width: 100%;
    height: 2px;
    background-color: #F8F9FA;
`

export const VDivLine = styled.div<{
    height?: string
}>`
    width: 4px;
    height: ${({height}) => (height ? height : '80px')};
    background-color: #0B98E833;
`