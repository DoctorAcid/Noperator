import styled from "styled-components";


const Base = styled.button<{
    width?: string
    size?: 'sm' | 'md' | 'lg'
    padding?: 'sm' | 'md' | 'lg'
    borderRadius?: 'sm' | 'md' | 'lg'
    fontSize?: 'sm' | 'md' | 'lg'
    altDisabledStyle?: boolean
}>`
    width: ${({width}) => (width ? width : '100%')};
    padding: ${({size}) => (size === 'sm' && '4px 12px') || (size === 'md' && '16px') || (size === 'lg' && '24px')};
    display: flex;
    gap: ${({size}) => (size === 'sm' && '4px') || (size === 'md' && '8px') || (size === 'lg' && '12px')};
    justify-content: center;
    align-items:center;
    font-size: ${({size}) => (size === 'sm' && '14px') || (size === 'md' && '16px') || (size === 'lg' && '24px')};
    border: none;
    border-radius: ${({size}) => (size === 'sm' && '8px') || (size === 'md' && '8px') || (size === 'lg' && '16px')};
    cursor: pointer;
    font-weight: 700;
    will-change: transform;
    transition: transform 450ms ease;
    transform: perspective(1px) translateZ(0);
    &:hover {
        transform: scale(0.98);
    }
`


export const PrimaryButton = styled(Base)`
    background-color: #0B98E80D;
    color: #0B98E8;
    transition: all ease .3s;

    &:hover {
        background-color: #0B98E8;
        color: #FFFFFF;
    }

    &:disabled {
        cursor: auto;
        background-color: #FFFFFF;
    }
`


export const SecondaryButton = styled(Base)`
    background-color: #FFFFFF;
    color: #ADB5BD;
    transition: all ease .3s;
    &:hover {
        background-color: #0B98E80D;
        color: #0B98E8;
    }
`

export const ThirdyButton = styled(Base)`
    color: #ADB5BD;
    background-color: transparent;
    transition: all ease .3s;
    &:hover {
        color: #0B98E8;
    }
`