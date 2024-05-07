import {FormProvider, useForm} from "react-hook-form";
import React from "react";

interface FormCartContextProps {
    children: React.ReactNode;
}

interface NewFormDataProps{
    cep: string;
    street: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
}

export function FormCartContext({children}: FormCartContextProps) {
    const newForm = useForm<NewFormDataProps>();

    return (
        <FormProvider {...newForm}>
            {children}
        </FormProvider>
    )
}
