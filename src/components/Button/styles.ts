import styled from "styled-components";
import {ButtonHTMLAttributes} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    typeCustom?: string;
}
export const ButtonContainer = styled.button<ButtonProps>`
    height: ${(props) => props.typeCustom === 'bold' ? '50px' : '32px'};
    background-color: ${({theme}) => theme['base-button']};
    border-radius: ${(props) => props.typeCustom === 'bold' ? '8px' : '6px'};
    padding: 0 15px;

    font-size: 12px;
    color: ${({theme}) => theme['base-text']};
    text-transform: uppercase;
    cursor: pointer;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
`;
