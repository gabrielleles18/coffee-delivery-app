import {FormContainer} from "./styles.ts";
import {useFormContext} from "react-hook-form";

export function Form() {
    const {
        register,
        formState: {errors}
    } = useFormContext();

    return (
        <FormContainer>
            <div className='row row-cep'>
                <input
                    type='number'
                    placeholder='CEP'
                    className='cep-input'
                    {...register('cep', {required: true})}
                />
                {errors.cep && <span>This field is required</span>}
            </div>

            <div className='row row-street'>
                <input
                    type='text'
                    placeholder='Rua'
                    className='street-input'
                    {...register('street', {required: true})}
                />
                {errors.street && <span>This field is required</span>}
            </div>

            <div className='row row-number'>
                <input
                    type='text'
                    placeholder='Número'
                    className='number-input'
                    {...register('number', {required: true})}
                />
                {errors.number && <span>This field is required</span>}
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
                {errors.neighborhood && <span>This field is required</span>}
            </div>

            <div className='row row-city'>
                <input
                    type='text'
                    placeholder='Cidade'
                    className='city-input'
                    {...register('city', {required: true})}
                />
                {errors.city && <span>This field is required</span>}
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
