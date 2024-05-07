import {Actions, ProductContainer} from "./styles.ts";
import {defaultTheme} from "../../styles/themes/default.ts";
import {ShoppingCart} from "phosphor-react";
import {Counter} from "../Counter";
import {useContext} from "react";
import {CartContext} from "../../contexts/CartContext.tsx";

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
    const {cart, handleAddToCart} = useContext(CartContext);

    function formatPrice(price: number) {
        return new Intl.NumberFormat('pt-BR', {style: 'decimal', minimumFractionDigits: 2}).format(price);
    }

    function hasAmount(id: number) {
        return cart.find(item => item.id === id)?.amount ?? 0;
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
                    <div className="tag" key={tag}>{tag}</div>
                ))}
            </div>
            <h3>{product.name}</h3>
            <p className='resume'>{product.description} </p>

            <Actions>
                <div className='price'>
                    R$
                    <b>{formatPrice(product.price)}</b>
                </div>

                <Counter
                    type='bold'
                    productAmount={hasAmount(product.id)}
                    productId={product.id}
                />

                <button
                    className='cart-add'
                    onClick={() => handleAddToCart(
                        {
                            id: product.id,
                            name: product.name,
                            description: product.description,
                            price: product.price,
                            tags: product.tags,
                            image: product.image,
                            amount: 1
                        }
                    )}
                >
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
