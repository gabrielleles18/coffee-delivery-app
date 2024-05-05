import {Actions, ProductContainer} from "./styles.ts";
import {defaultTheme} from "../../styles/themes/default.ts";
import {Minus, Plus, ShoppingCart} from "phosphor-react";
import caffe from "../../assets/arabe.svg";
import {useState} from "react";

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
    const [counterProduct, setCounterProduct] = useState(0);

    function increment() {
        setCounterProduct(counterProduct + 1);
    }

    function decrement() {
        if (counterProduct > 0) {
            setCounterProduct(counterProduct - 1);
        }
    }

    function formatPrice(price: number) {
        return new Intl.NumberFormat('pt-BR', {style: 'decimal', minimumFractionDigits: 2}).format(price);
    }

    return (
        <ProductContainer>
            <img
                className='product-image'
                src={caffe}
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
                <div className="counter">
                    <button type="button" onClick={decrement}>
                        <Minus size={14}/>
                    </button>
                    <span>{counterProduct}</span>
                    <button type="button" onClick={increment}>
                        <Plus size={14}/>
                    </button>
                </div>

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
