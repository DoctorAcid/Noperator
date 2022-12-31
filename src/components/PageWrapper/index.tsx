import React from 'react'
import styled from 'styled-components'
import ColumnContainer from '../ColumnContainer/ColumnContainer'
import RowContainer from '../RowContainer/RowContainer'

interface Props {
    header: React.ReactElement
    content: React.ReactElement
    sidepanel: React.ReactElement
}

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

const PageWrapper = ({header, content, sidepanel} : Props) => {
  return (
    <Wrapper>
        <RowContainer justify='sb' align='fs'>
            {header}
        </RowContainer>
        <RowContainer gap='md' align='fs'>
            <ColumnContainer gap='32px'>
                {content}
            </ColumnContainer>
            <ColumnContainer width='20%' style={{minWidth: '374px'}}>
                {sidepanel}
            </ColumnContainer>
        </RowContainer>
    </Wrapper>
  )
}

export default PageWrapper