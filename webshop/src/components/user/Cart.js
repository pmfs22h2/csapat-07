import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { AuthContext } from "../../context/AuthContext";
import CartTotal, { sumCart } from "./CartTotal";
import '../../styles/cart.css';
import orderService from '../../service/orderService';

function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const { userData } = useContext(AuthContext)

  console.log('cart', cart);

  function sendOrderButton() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const timestamp = `${year}-${month}-${day}`;
    const list = {}
    cart.forEach(p => list[p.productId] = p.amount)
    console.log(list);
    orderService.sendOrder(list, userData.uid, timestamp);
    orderService.deleteCart(userData.uid, cart);
    setCart(null);
  }
  return (
    <div>
      <table className="cart-order">
        <tr>
          <th>Terméknév</th>
          <th>Termék darabszám</th>
          <th>Termék ár</th>
          <th>Termék ár összesen</th>
        </tr>
        {userData ? (cart ? cart.map(p =>
          <>
            <tr>
              <td>{p.title}</td>
              <td>{p.amount}</td>
              <td>{p.price}</td>
              <td>{p.amount * p.price}</td>
            </tr>
          </>
        )
          : "Nincs termék a kosaradban."
        )
          :
          "Jelentkezz be a kosár megtekintéséhez!"}
        <>
          <h3>
            Végösszeg: {sumCart(cart)}
          </h3>
        </>
      </table>
      <button className="order-button" onClick={sendOrderButton}>Megrendelés</button>
      {/* {p.title} - {p.amount} - {p.price} - {p.amount * p.price} */}
    </div>
  )
}

export default Cart;
