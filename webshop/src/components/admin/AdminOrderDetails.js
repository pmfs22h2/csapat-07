import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../../styles/admin.css';
import { useState } from "react";
import orderService from '../../service/orderService';
import userService from '../../service/userService';
import getCartList from '../../utils/getCartList';

export default function AdminOrderDetails() {

// url-ből lekérjük a rendelés id-t
  const { orderId } = useParams();
  console.log(orderId, 'orderId');
// a megrendelés
  const [order, setOrder] = useState({});
  console.log(order, 'order');
// a megrendeléshez tartozó termékek
  const [products, setProducts] = useState();
  console.log(products, 'products');
// a megrendelő neve
  const [userName, setUserName] = useState("");
  console.log(userName);

  useEffect(() => {
    // megrendelés id alapján lekéri az adott megrendelést
    orderService.getOrder(orderId)
      .then(orderdata => {
          // eltárolja az adott megrendelés adatait
          setOrder(orderdata);
          // lekéri a megrendelésben levő termékek adatait
          const orders = getCartList(orderdata.products).then(productsdata => setProducts(productsdata))
          // lekéri az adott megrendelő adatait és eltárolja a nevét
          userService.readUser(orderdata.uid)
            .then(user => setUserName(user.name))         
      })
  }, [orderId])



  return (
    <>
      <h2 className="admin-h2">Megrendelés részletei</h2>
      <table className="ordertable">
        <thead>
          <tr>
            <th>időpont</th>
            <th>megrendelés id</th>
            <th>felhasználó id</th>
            <th>felhasználó név</th>
          </tr>
        </thead>
        <tbody>
          
          <tr>
            <td>{order.timestamp}</td>
            <td>{order.id}</td>
            <td>{order.uid}</td>
            <td>{userName}</td>
          </tr>
        </tbody>
      </table>

      <table className="ordertable">
        <thead>
          <tr>
            <th>Megrendelt termék</th>
            <th>Megrendelt termék id</th>
            <th>Termék mennyisége</th>
            <th>Termék ára</th>
            <th>Részösszeg</th>   
          </tr>
        </thead>
        <tbody>
          {
            products?.map(p => (
              <tr>
                <td>{p.title}</td>
                <td>{p.productId}</td>
                <td>{p.amount}</td>
                <td>{p.price}</td>
                <td>{p.price * p.amount}</td>
              </tr>
            ))
          }
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>végösszeg</td>
            <td>{(products?.map(p => p.price * p.amount).reduce((sum, n) => n !== NaN ? sum + n : sum + 0, 0))}</td>
          </tr>
        </tbody>
      </table>
      <Link className="admin-back-btn" to='/admin/megrendelesek'>Vissza</Link>
    </>
  )
}
