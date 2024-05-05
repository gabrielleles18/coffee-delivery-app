import {Actions, ProductContainer} from "./styles.ts";
import {defaultTheme} from "../../styles/themes/default.ts";
import {Minus, Plus, ShoppingCart} from "phosphor-react";
import caffe from "../../assets/arabe.svg";
import {useState} from "react";

export function Product() {
    const [counterProduct, setCounterProduct] = useState(0);

    function increment() {
        setCounterProduct(counterProduct + 1);
    }

    function decrement() {
        if (counterProduct > 0) {
            setCounterProduct(counterProduct - 1);
        }
    }

    return (
        <ProductContainer>
            <img
                className='product-image'
                src={caffe}
                alt=""
            />
            <div className="tags">
                <div className="tag">Tradicional</div>
                <div className="tag">com leite</div>
            </div>
            <h3>Capuccino</h3>
            <p className='resume'>
                Uma dose de café expresso com o dobro de leite e espuma cremosa
            </p>

            <Actions>
                <div className='price'>
                    R$
                    <b>5,00</b>
                </div>
                <div className="counter">
                    <button type="button" onClick={decrement}>
                        <Minus size={14} />
                    </button>
                    <span>{counterProduct}</span>
                    <button type="button" onClick={increment}>
                        <Plus size={14} />
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
