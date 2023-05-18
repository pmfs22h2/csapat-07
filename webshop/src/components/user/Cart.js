import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { useState, useEffect } from "react";
import cartService from "../../service/cartService";



function Cart () {
  const { cart, setCart } = useContext(CartContext);

  console.log('cart', cart);

  return(
    <div>
    <h2>Felhasználó kosara</h2>
    {/* {cart?.map((item) => (
      <div>
        {item.name} - {item.price}
    </div>
  ))} */}
  </div>
  );
};





export default Cart;