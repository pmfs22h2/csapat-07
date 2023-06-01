import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { AuthContext } from "../../context/AuthContext";
import sumCart from "../../utils/sumCart";
import '../../styles/cart.css';
import orderService from '../../service/orderService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import cartService from "../../service/cartService";
import getCartList from "../../utils/getCartList";

function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const { userData } = useContext(AuthContext)

  const sentOrderSuccess = () => {
    toast.success('Sikeres megrendelés!', {
      position: toast.POSITION.TOP_CENTER
    });
  }

  console.log(cart, "cart");

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
    setCart([]);
    sentOrderSuccess();
  }

  function decraiseAmount(productid) {
    let modifiedProduct;
    cartService.getCart(userData.uid)
      .then(cartlist => {
        if(cartlist[productid] > 1) modifiedProduct = {[productid]: cartlist[productid] - 1}
        else modifiedProduct = {[productid]: cartlist[productid]}
      })
      .then(() => cartService.changeItem(modifiedProduct, userData.uid))
      .then(() => cartService.getCart(userData.uid))
      .then(newcartlist => {
        const cart = getCartList(newcartlist).then(cart => setCart(cart))
      }
    )
  }

  function incraiseAmount(productid) {
    let modifiedProduct;
    cartService.getCart(userData.uid)
      .then(cartlist => {modifiedProduct = {[productid]: cartlist[productid] + 1}})
      .then(() => cartService.changeItem(modifiedProduct, userData.uid))
      .then(() => cartService.getCart(userData.uid))
      .then(newcartlist => {
        const cart = getCartList(newcartlist).then(cart => setCart(cart))
      }
    )
  }

  function deleteFromCart(productid) {
    console.log("delete");
    cartService.deleteProduct(userData.uid, productid)
    .then(() => cartService.getCart(userData.uid))
    .then(newcartlist => {
      const cart = getCartList(newcartlist).then(cart => setCart(cart))
    })
  }

  return (
    <div>
      <h2 className="cart-h2">Kosár</h2>
      <table className="cart-order">
        <tr>
          <th>Terméknév</th>
          <th>Termék darabszám</th>
          <th>Termék ár</th>
          <th>Termék ár összesen</th>
          <th></th>
        </tr>
        {userData ? (cart ? 
        
        <>{cart.map(p =>          
            <tr>
              <td>{p.title}</td>
              <td>
                <button disabled={p.amount <= 1} onClick={() => decraiseAmount(p.productId)} className={`cart-amount-button ${p.amount == 1 ? "disabled" : ""}`}>-</button>
                {p.amount}
                <button  onClick={() => incraiseAmount(p.productId)} className="cart-amount-button">+</button>
              </td>
              <td>{p.price} HUF</td>
              <td>{p.amount * p.price} HUF</td>

          <td><button onClick={() => deleteFromCart(p.productId)} className="cart-amount-button">x</button></td>

            </tr>     
        )     
        }   
          <tr className="cart-sum">
            <td></td>
            <td></td>
            <td>Végösszeg:</td>
            <td className="cart-sum">{sumCart(cart)} HUF</td>
          </tr>
        </>
        : <td colspan="4" className="cart-info">Nincs termék a kosaradban.</td>
        )     
        :
        <td colspan="4" className="cart-info">Jelentkezz be a kosár megtekintéséhez!</td>
      }
      </table>
      {userData && cart ? <button className="order-button" onClick={sendOrderButton}>Megrendelés</button> : <></>}
      <ToastContainer />
    </div>
  )
}

export default Cart;