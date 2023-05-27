import { useState, useContext, useEffect } from 'react';
import { CartContext } from "../../context/cartContext";
import sumCart from '../../utils/sumCart';

export default function CartTotal() {

    const { cart, setCart } = useContext(CartContext);
    const [sum, setSum] = useState(0);

    useEffect(() => {
        // if (!cart[0].price) return
        const sum = sumCart(cart)
        console.log(sum, "sum");
        setSum(sum)
    }, [cart]) 

    console.log(sum)
    console.log(cart, "cartcontext")
    // console.log(cart[0], "cartcontext - cart[0]")
    return (<span className="badge">{sum}</span>)
}