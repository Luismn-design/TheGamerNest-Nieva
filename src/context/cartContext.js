import * as React from 'react';
import { useState, useEffect } from 'react';


export const CartContext = React.createContext([]);

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        console.log(cart)
    }
    , [cart])

    const addToCart = (item, count) => {
        if(isInCart(item)){
            console.log('already in cart');
        }else{
            setCart([...cart, {...item, count}])
        }
        
    }

    
    const removeFromCart = (item) => {
        setCart(cart.filter(cartItem => cartItem.id !== item.id))
    }

    const clearCart = () => {
        setCart([])
    }
    
    const isInCart = (item) => {
        return cart.find(cartItem => cartItem.id === item.id)
    }



    return(
        <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
    );
};