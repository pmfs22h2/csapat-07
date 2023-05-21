import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { AuthContext } from "../../context/AuthContext";
import CartTotal, { sumCart } from "./CartTotal";

function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const { userData } = useContext(AuthContext)

  console.log('cart', cart);

  return (

    userData ? (
      cart ? <>{cart.map(p => <div>
        {p.title} - {p.amount} - {p.price} - {p.amount * p.price}
      </div>)}
        <h3>
          Végösszeg: {sumCart(cart)}
        </h3>
      </>

        : "Nincs termék a kosarában."
    )
      :
      "Jelentkezzen be a kosár megtekintéséhez!"
  )

  // if (!userData) {

  //   return ("Jelentkezzen be a kosár megtekintéséhez!");

  // } else if (!cart) {

  //   return ("Nincs termék a kosarában.");

  // } else {

  //   return (
  //     <>
  //       {cart.map(p => <div>
  //         {p.title} - {p.amount} - {p.price} - {p.amount * p.price}
  //       </div>)}
  //       Végösszeg: <CartTotal />
  //     </>

  //   );

  // }

}

export default Cart;
