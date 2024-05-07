import {CartContainer} from './styles';
import {ShoppingCart} from "phosphor-react";
import {defaultTheme} from "../../styles/themes/default.ts";
import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {CartContext} from "../../contexts/CartContext.tsx";

export function Cart() {
    const {cart} = useContext(CartContext);

    return (
        <CartContainer>
            <NavLink to={'/checkout'} className='link'>
                {cart.length > 0 && (<div className='amount-order'>{cart.length}</div>)}
                <ShoppingCart
                    size={22}
                    weight="fill"
                    color={defaultTheme['yellow-dark']}
                />
            </NavLink>
        </CartContainer>
    );
}
