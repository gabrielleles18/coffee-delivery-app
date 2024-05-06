import {ButtonContainer} from './styles.ts';
import React from "react";

interface ButtonProps {
    title: string;
    typeCustom: 'slim' | 'bold';
    icon?: React.ReactNode;
}

export function Button({title, icon, ...props}: ButtonProps) {
    return (
        <ButtonContainer {...props}>
            {icon && icon}
            {title}
        </ButtonContainer>
    );
}
