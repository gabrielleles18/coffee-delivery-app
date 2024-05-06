import React, {createContext, useState} from "react";

interface CartItemType {
    id: number;
    name: string;
    description: string;
    price: number;
    tags: object[];
    image: string
}

export interface CartContextType {
    cart: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
}

export const CartContext = createContext<CartContextType>({} as CartContextType);

export function CartContextProvider({children}: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartItemType[]>([]);
    const [addToCart, setToAddCart] = useState<CartItemType[]>([]);
    const [removeFromCart, setRemoveFromCart] = useState<number>(0);



    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

