import React from 'react'
import styled from 'styled-components'
import { PrimaryButton, SecondaryButton, ThirdyButton } from '../Buttons/Buttons'
import RowContainer from '../RowContainer/RowContainer'

interface Props {
    
}

const CardTop = () => {
    return (
        <RowContainer padding='24px' justify='sb'>
            <h3></h3>
            <RowContainer width='fit-content' gap='sm'>
                <PrimaryButton size='md' width='fit-content'>Positions</PrimaryButton>
                <SecondaryButton size='md' width='fit-content'>Holdings</SecondaryButton>
            </RowContainer>
            <ThirdyButton size='sm' width='80px'>View all</ThirdyButton>
        </RowContainer>
    )
}

export default CardTop