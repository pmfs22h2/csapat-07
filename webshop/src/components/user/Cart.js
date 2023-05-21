import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { AuthContext } from "../../context/AuthContext";

function Cart () {
  const { cart, setCart } = useContext(CartContext);
  const { userData } = useContext(AuthContext)

  console.log('cart', cart);

  return(
    
      userData ? (
        cart ? cart.map(p => <div>
          {/* {p.productId} -  */}{p.title} - {p.amount} - {p.price} - {p.amount * p.price}
        </div>) 
        : "Nincs termék a kosaradban."
      )
     : 
        "Jelentkezz be a kosár megtekintéséhez!" 
  )

  }

export default Cart;
