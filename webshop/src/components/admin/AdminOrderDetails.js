import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/admin.css';
import { useState } from "react";

export default function AdminOrderDetails() {

  const [displayedOrders, setDisplayedOrders] = useState([]);
  const [users, setUsers] = useState([]);

  return (
    <>
      <h2 className="admin-h2">Megrendelés részletei</h2>
      <table className="ordertable">
        <thead>
          <tr>
            <th>Megrendelt termék</th>
            <th>Termék mennyisége</th>
            <th>Részösszeg</th>
            {/* <th>Vásárló neve</th>
            <th>Részletek</th> */}
          </tr>
        </thead>
        <tbody>
          {displayedOrders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.timestamp}</td>
              <td>{order.uid}</td>
              {/* <td>{users[order.uid]?.name}</td>
              <td>
                <Link to={`/admin/megrendelesek/${order.id}/adatlap`}>Adatlap</Link>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
      <Link className="admin-back-btn" to='/admin/megrendelesek'>Vissza</Link>
    </>
  )
}
