import {FormContainer} from "./styles.ts";
import {useFormContext} from "react-hook-form";
import {useEffect} from "react";

export function Form() {
    const {
        register,
        setValue,
        formState: {errors}
    } = useFormContext();

    useEffect(() => {
        const storedStateAsJSON = localStorage.getItem(
            '@coffee-delivery:address-state-1.0.0',
        )
        // @ts-ignore
        const storedState = JSON.parse(storedStateAsJSON);

        if  (!storedState) {
            return;
        }

        setValue('cep', storedState.cep);
        setValue('street', storedState.street);
        setValue('number', storedState.number);
        setValue('complement', storedState.complement);
        setValue('neighborhood', storedState.neighborhood);
        setValue('city', storedState.city);
        setValue('state', storedState.state);
    }, [setValue]);

    return (
        <FormContainer>
            <div className='row row-cep'>
                <input
                    type='number'
                    placeholder='CEP'
                    className='cep-input'
                    {...register('cep', {required: true})}
                />
                {errors.cep && <span>Informe o CPF</span>}
            </div>

            <div className='row row-street'>
                <input
                    type='text'
                    placeholder='Rua'
                    className='street-input'
                    {...register('street', {required: true})}
                />
                {errors.street && <span>Informe a Rua</span>}
            </div>

            <div className='row row-number'>
                <input
                    type='text'
                    placeholder='Número'
                    className='number-input'
                    {...register('number', {required: true})}
                />
                {errors.number && <span>Informe o número</span>}
            </div>

            <div className='row row-complement'>
                <input
                    type='text'
                    placeholder='Complemento'
                    className='complement-input'
                    {...register('complement')}
                />
            </div>

            <div className='row row-neighborhood'>
                <input
                    type='text'
                    placeholder='Bairro'
                    className='neighborhood-input'
                    {...register('neighborhood', {required: true})}
                />
                {errors.neighborhood && <span>Informe o bairro</span>}
            </div>

            <div className='row row-city'>
                <input
                    type='text'
                    placeholder='Cidade'
                    className='city-input'
                    {...register('city', {required: true})}
                />
                {errors.city && <span>Informe a cidade</span>}
            </div>

            <div className='row row-state'>
                <input
                    type='text'
                    placeholder='UF'
                    className='state-input'
                    {...register('state')}
                />
            </div>
        </FormContainer>

    )
}
