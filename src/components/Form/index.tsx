import {FormContainer} from "./styles.ts";

export function Form(){
    return (
        <FormContainer>
            <input
                type='text'
                placeholder='CEP'
                className='cep-input'
            />

            <input
                type='text'
                placeholder='Rua'
                className='street-input'
            />

            <input
                type='text'
                placeholder='Número'
                className='number-input'
            />

            <input
                type='text'
                placeholder='Complemento'
                className='complement-input'
            />

            <input
                type='text'
                placeholder='Bairro'
                className='neighborhood-input'
            />

            <input
                type='text'
                placeholder='Cidade'
                className='city-input'
            />

            <input
                type='text'
                placeholder='UF'
                className='state-input'
            />

        </FormContainer>

    )
}
