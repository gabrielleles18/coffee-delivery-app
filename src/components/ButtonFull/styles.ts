import styled from "styled-components";
import {ButtonHTMLAttributes, ReactNode} from "react";

interface ButtonContainerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: string | ReactNode;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100%;
    min-height: 46px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
    background-color: ${({theme}) => theme['yellow']};
    margin-top: 2.4rem;

    text-transform: uppercase;
    color: ${({theme}) => theme['white']};
    cursor: pointer;
`;
