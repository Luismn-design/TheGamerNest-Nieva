import * as React from 'react';
import { useState, useEffect } from 'react';

export const CartContext = React.createContext([]);

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

    const [buyOrder, setBuyOrder] = useState([]);


    useEffect(() => {
        setBuyOrder({buyer:{name:'phone', phone:'phone', email:'email'}, buyProducts:cart.map(item => {
            return {
                id: item.id,
                name: item.name,
                price: item.price
            }
        }), totalPrice, date: new Date()});
    }, [cart, totalPrice]);



    const addToCart = (item, count) => {
        if(isInCart(item)){
            console.log('already in cart');
        }else{
            setCart([...cart, {...item, count}]);
            setTotalPrice (totalPrice + item.price * count);
            setTotalQuantity(totalQuantity + count);
        };
    };
    
    const removeFromCart = (item) => {
        setCart(cart.filter(cartItem => cartItem.id !== item.id));
        setTotalPrice(cart.filter(cartItem => cartItem.id !== item.id).reduce((acc, curr) => acc + curr.price * curr.count, 0))
        setTotalQuantity(cart.filter(cartItem => cartItem.id !== item.id).reduce((acc, curr) => acc + curr.count, 0))
    }

    const clearCart = () => {
        setCart([])
        setTotalPrice(0)
        setTotalQuantity(0)
    }
    
    const isInCart = (item) => {
        return cart.find(cartItem => cartItem.id === item.id)
    }



    return(
        <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart, isInCart, totalQuantity, totalPrice, buyOrder}}>
            {children}
        </CartContext.Provider>
    );
};