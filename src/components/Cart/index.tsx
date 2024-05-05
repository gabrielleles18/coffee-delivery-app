import {CartContainer} from './styles';
import {ShoppingCart} from "phosphor-react";
import {defaultTheme} from "../../styles/themes/default.ts";

export function Cart() {
    const amountOrder = 0;

    return (
        <CartContainer>
            {amountOrder > 0 && (<div className='amount-order'>{amountOrder}</div>)}
            <ShoppingCart
                size={22}
                weight="fill"
                color={defaultTheme['yellow-dark']}
            />
        </CartContainer>
    );
}
