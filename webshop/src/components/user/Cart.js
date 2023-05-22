import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { AuthContext } from "../../context/AuthContext";
import '../../styles/cart.css';
import orderService from '../../service/orderService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const { userData } = useContext(AuthContext)

  const sentOrderSuccess = () => {
    toast.success('Sikeres megrendelés!', {
      position: toast.POSITION.TOP_CENTER
    });
  }

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
    sentOrderSuccess();
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
      </table>
      {userData && cart ? <button className="order-button" onClick={sendOrderButton}>Megrendelés</button> : <></>}
      <ToastContainer />
    </div>
  )
}

export default Cart;