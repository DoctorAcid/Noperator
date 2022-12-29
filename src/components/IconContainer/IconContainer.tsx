import styled from 'styled-components/macro';

const IconContainer = styled.div<{
    size?: 'sm' | 'md' | 'lg' | 'xl'
    borderRadius?: string
}>`
display: flex;
align-items: center;
justify-content: center;
border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : '')};
width: ${({ size }) => (size === 'sm' && '24px') || (size === 'md' && '40px') || (size === 'lg' && '64px') || (size === 'xl' && '96px')};
height: ${({ size }) => (size === 'sm' && '24px') || (size === 'md' && '40px') || (size === 'lg' && '64px') || (size === 'xl' && '96px')};
`

export default IconContainer