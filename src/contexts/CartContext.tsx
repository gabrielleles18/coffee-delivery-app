import React, {createContext, useState} from "react";

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

    const [cart, setCart] = useState<CartItemType[]>(storedState ?? []);

    function handleAddToCart(clickedItem: CartItemType) {
        setCart(prev => {
            if (prev.some(item => item.id === clickedItem.id)) {
                return prev.map(item => item.id === clickedItem.id
                    ? {...item, amount: item.amount! + 1}
                    : item
                )
            } else {
                return [...prev, {...clickedItem}]
            }
        })
    }

    function handleRemoveFromCart(id: number) {
        setCart(prev => {
            return prev.filter(item => item.id !== id)
        })
    }

    function handleAddAmount(id: number) {
        setCart(prev => {
            return prev.map(item => item.id === id
                ? {...item, amount: item.amount! + 1}
                : item
            )
        })
    }

    function handleRemoveAmount(id: number) {
        setCart(prev => {
            return prev.map(item => item.id === id
                ? {...item, amount: item.amount! - 1}
                : item
            )
        })
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

