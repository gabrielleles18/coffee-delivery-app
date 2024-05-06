import {ButtonContainer} from './styles.ts';
import React from "react";

interface ButtonProps {
    title: string;
    icon?: React.ReactNode;
    typeCustom?: 'slim' | 'bold';
}

export function Button({title, icon, typeCustom = 'bold', ...props}: ButtonProps) {
    return (
        <ButtonContainer {...props}>
            {icon && icon}
            {title}
        </ButtonContainer>
    );
}
