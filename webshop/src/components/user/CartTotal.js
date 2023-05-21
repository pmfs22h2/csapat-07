import { useState, useContext } from 'react';
import { CartContext } from "../../context/cartContext";

export const sumCart = (cart) => {
    let sum = 0;
    if (cart && cart.length > 0) {
        for (const item of cart) {
            sum += item.price * item.amount;
        }
    }
    
    return sum;
}

export default function CartTotal() {
    const { cart, setCart } = useContext(CartContext);
    return (<>{sumCart(cart)}</>)
}