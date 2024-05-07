import {ButtonContainer} from "./styles.ts";
import React, {ReactNode} from "react";

interface ButtonFullProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: string | ReactNode;
}

export function ButtonFull({children, ...rest}: ButtonFullProps) {

    return (
        <ButtonContainer {...rest}>
            {children}
        </ButtonContainer>
    );
}
