import React, {createContext, useReducer, useState} from "react";

interface CartItemType {
    id: number;
    name: string;
    description: string;
    price: number;
    tags: string[];
    image: string,
    amount?: number;
}

export interface CartContextType {
    cart: CartItemType[];
    handleAddToCart: (clickedItem: CartItemType) => void;
    handleRemoveFromCart: (id: number) => void;
    handleAddAmount: (id: number) => void;
    handleRemoveAmount: (id: number) => void;
}

export const CartContext = createContext<CartContextType>({} as CartContextType);

export function CartContextProvider({children}: { children: React.ReactNode }) {
    const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
    );
    const storedState = JSON.parse(storedStateAsJSON);

    console.log(storedState);

    const [cart, dispatch] = useReducer((state: CartItemType[], action: any) => {

        if (action.type === 'ADD_TO_CART') {
            const {clickedItem} = action.payload;
            if (state.some(item => item.id === clickedItem.id)) {
                return state.map(item => item.id === clickedItem.id
                    ? {...item, amount: item.amount! + 1}
                    : item
                )
            } else {
                return [...state, {...clickedItem}]
            }
        }

        if (action.type === 'REMOVE_FROM_CART') {
            return state.filter(item => item.id !== action.payload.id)
        }

        if (action.type === 'ADD_AMOUNT') {
            return state.map(item => item.id === action.payload.id
                ? {...item, amount: item.amount! + 1}
                : item
            )
        }

        if (action.type === 'REMOVE_AMOUNT') {
            return state.map(item => item.id === action.payload.id
                ? {...item, amount: item.amount! - 1}
                : item
            )
        }

        return state
    }, []);

    function handleAddToCart(clickedItem: CartItemType) {
        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                clickedItem
            },
        });
    }

    function handleRemoveFromCart(id: number) {
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: {
                id
            },
        });
    }

    function handleAddAmount(id: number) {
        dispatch({
            type: 'ADD_AMOUNT',
            payload: {
                id
            },
        });
    }

    function handleRemoveAmount(id: number) {
        dispatch({
            type: 'REMOVE_AMOUNT',
            payload: {
                id
            },
        });
    }

    return (
        <CartContext.Provider value={{
            cart,
            handleAddToCart,
            handleRemoveFromCart,
            handleAddAmount,
            handleRemoveAmount
        }}>
            {children}
        </CartContext.Provider>
    )
}

