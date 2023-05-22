import { useState, useContext, useEffect } from 'react';
import { CartContext } from "../../context/cartContext";
import sumCart from '../../utils/sumCart';

export default function CartTotal() {
    const { cart, setCart } = useContext(CartContext);
    const [sum, setSum] = useState(0);
    useEffect(() => {
        if (!cart) return
        setSum(sumCart(cart))}, [cart])
    console.log(sum)
    console.log(cart)
    return (<>{sum}</>)
}