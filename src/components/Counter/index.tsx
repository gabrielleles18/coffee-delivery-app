import {Minus, Plus} from "phosphor-react";
import {CounterContainer} from "./styles.ts";
import {useContext} from "react";
import {CartContext} from "../../contexts/CartContext.tsx";

interface CounterProps {
    type: 'slim' | 'bold';
    productId: number;
    productAmount: number;
}

export function Counter({type, productId, productAmount}: CounterProps) {
    const {handleAddAmount, handleRemoveAmount} = useContext(CartContext);

    return (
        <CounterContainer type={type}>
            <button
                disabled={productAmount == 0}
                type="button"
                onClick={() => {
                    if (productAmount > 0) {
                        handleRemoveAmount(productId);
                    }
                }}>
                <Minus size={14}/>
            </button>
            <span>{productAmount ?? 0}</span>
            <button type="button" onClick={() => handleAddAmount(productId)}>
                <Plus size={14}/>
            </button>
        </CounterContainer>
    );
}
