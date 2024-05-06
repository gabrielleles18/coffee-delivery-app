import {CheckoutContainer, SidebarContainer, SidebarSubtotal} from "./styles.ts";
import {Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash} from "phosphor-react";
import {defaultTheme} from "../../styles/themes/default.ts";
import {Form} from "../../components/Form";
import {TitleDetails} from "../../components/TitleDetails";
import {Button} from "../../components/Button";
import {Counter} from "../../components/Counter";

export function Checkout() {
    let totalPriceProducts = 0;
    let deliveryPrice = 3.50;

    const productsInCart = [{
        id: 1,
        name: 'Mocaccino',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        price: 5.00,
        tags: ['coado', 'forte'],
        image: 'http://localhost:5173/expresso.svg',
        quantity: 2
    }, {
        id: 2,
        name: 'Café do dia',
        description: 'Café fresquinho coado na hora',
        price: 1.00,
        tags: ['coado', 'forte'],
        image: 'http://localhost:5173/havaiano.svg',
        quantity: 2
    }];


    function formatPrice(price: number) {
        return new Intl.NumberFormat('pt-BR', {style: 'decimal', minimumFractionDigits: 2}).format(price);
    }

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
                            typeCustom='bold'
                        />
                        <Button
                            icon={<Money size={18} color={defaultTheme.purple}/>}
                            title='Dinheiro'
                            typeCustom='bold'
                        />
                    </div>
                </div>
            </div>
            <SidebarContainer>
                <h3>Cafés selecionados</h3>

                <div className='checkout-prod card-base'>
                    {productsInCart.map((product, index) => {
                        const price = product.quantity * product.price;
                        totalPriceProducts = totalPriceProducts + price;

                        return (
                            <>
                                {index > 0 && <hr/>}
                                <div className='prod' key={product.id}>
                                    <img src={product.image} alt={product.name} className='img'/>
                                    <div className='info'>
                                        <h4>{product.name}</h4>
                                        <div className='action'>
                                            <Counter type='slim'/>
                                            <Button
                                                title={'Remover'}
                                                typeCustom='slim'
                                                icon={
                                                    <Trash
                                                        size={16}
                                                        color={defaultTheme['purple']}
                                                    />
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className='price'>
                                        R$ {formatPrice(price)}
                                    </div>
                                </div>
                            </>
                        )
                    })}

                    <SidebarSubtotal className='amount-products'>
                        <div className='row'>
                            <span>Total de itens</span>
                            <span>R$ {formatPrice(totalPriceProducts)}</span>
                        </div>
                        <div className='row'>
                            <span>Entrega</span>
                            <span>R$ {formatPrice(deliveryPrice)}</span>
                        </div>

                        <div className='row'>
                            <span><b>Total</b></span>
                            <span><b>R$ {formatPrice(totalPriceProducts + deliveryPrice)}</b></span>
                        </div>

                        <button type='submit'>confirmar pedido</button>
                    </SidebarSubtotal>
                </div>
            </SidebarContainer>
        </CheckoutContainer>
    );
}
