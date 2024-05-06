import {Actions, ProductContainer} from "./styles.ts";
import {defaultTheme} from "../../styles/themes/default.ts";
import {ShoppingCart} from "phosphor-react";
import {Counter} from "../Counter";

interface ProductProps {
    product: {
        id: number;
        name: string;
        description: string;
        price: number;
        tags: string[];
        image: string;
    }
}

export function Product({product}: ProductProps) {

    function formatPrice(price: number) {
        return new Intl.NumberFormat('pt-BR', {style: 'decimal', minimumFractionDigits: 2}).format(price);
    }

    return (
        <ProductContainer>
            <img
                className='product-image'
                src={product.image}
                alt=""
            />
            <div className="tags">
                {product.tags.map(tag => (
                    <div className="tag">{tag}</div>
                ))}
            </div>
            <h3>{product.name}</h3>
            <p className='resume'>{product.description} </p>

            <Actions>
                <div className='price'>
                    R$
                    <b>{formatPrice(product.price)}</b>
                </div>

                <Counter type='bold'/>

                <button className='cart-add'>
                    <ShoppingCart
                        size={20}
                        weight="fill"
                        color={defaultTheme['white']}
                    />
                </button>
            </Actions>
        </ProductContainer>
    )
}
