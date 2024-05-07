import {ButtonContainer} from './styles.ts';
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    title: string;
    typeCustom?: 'bold' | 'slim';
    icon?: React.ReactNode;
}

export function Button({title, icon, ...rest}: ButtonProps) {
    return (
        <ButtonContainer {...rest}>
            {icon && icon}
            {title}
        </ButtonContainer>
    );
}
