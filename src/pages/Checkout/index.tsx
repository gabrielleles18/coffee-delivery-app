import {CheckoutContainer, SidebarContainer} from "./styles.ts";
import {Bank, CreditCard, CurrencyDollar, MapPinLine, Money} from "phosphor-react";
import {defaultTheme} from "../../styles/themes/default.ts";
import {Form} from "../../components/Form";
import {TitleDetails} from "../../components/TitleDetails";
import {Button} from "../../components/Button";
import {Counter} from "../../components/Counter";

export function Checkout() {
    const products = [{
        id: 1,
        name: 'Mocaccino',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        price: 5.90,
        tags: ['coado', 'forte'],
        image: 'https://source.unsplash.com/random/300x300?coffee'
    }, {
        id: 2,
        name: 'Café do dia',
        description: 'Café fresquinho coado na hora',
        price: 0.60,
        tags: ['coado', 'forte'],
        image: 'https://source.unsplash.com/random/300x300?coffee'
    }];

    return (
        <CheckoutContainer>
            <div className='complement'>
                <h3>Complete seu pedido</h3>

                <div className='address card-base'>

                    <TitleDetails
                        title='Endereço de entrega'
                        description='Informe o endereço onde deseja receber seu pedido'
                        icon={
                            <MapPinLine
                                size={22}
                                color={defaultTheme['yellow-dark']}
                            />
                        }
                    />

                    <Form/>
                </div>

                <div className='payment card-base'>
                    <TitleDetails
                        title='Pagamento'
                        description='O pagamento é feito na entrega. Escolha a forma que deseja pagar'
                        icon={
                            <CurrencyDollar
                                size={22}
                                color={defaultTheme['purple']}
                            />
                        }
                    />

                    <div className='buttons'>
                        <Button
                            icon={<CreditCard size={18} color={defaultTheme.purple}/>}
                            title='Cartão de crédito'
                            typeCustom='bold'
                        />
                        <Button
                            icon={<Bank size={18} color={defaultTheme.purple}/>}
                            title='cartão de débito'
                        />
                        <Button
                            icon={<Money size={18} color={defaultTheme.purple}/>}
                            title='Dinheiro'
                        />
                    </div>
                </div>
            </div>
            <SidebarContainer>
                <h3>Cafés selecionados</h3>

                <div className='checkout-prod card-base'>
                    {products.map((product, index) => {
                        return (
                            <>
                                {index > 0 && <hr/>}
                                <div className='prod' key={product.id}>
                                    <img src={product.image} alt={product.name} className='img'/>
                                    <div className='info'>
                                        <h4>{product.name}</h4>
                                        <div className='action'>
                                            <Counter/>
                                            <Button title={'Remover'}/>
                                        </div>
                                    </div>
                                    <div className='price'>
                                        R$ {product.price}
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </SidebarContainer>
        </CheckoutContainer>
    );
}
