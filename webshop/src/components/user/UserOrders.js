import { useContext, useEffect, useState } from "react";
import orderService from "../../service/orderService";
import '../../styles/ordertable.css';
import { AuthContext } from "../../context/AuthContext";




function UserOrders () {

    const [orderList, setOrderList] = useState ([]);
    const {userData, setUserData} = useContext(AuthContext);
    

    useEffect(() => {
        orderService.getOrders()
        .then(list => setOrderList(Object.values(list).filter(order => order.uid==userData.uid)))
    },[]);

    console.log(orderList);
    console.log(userData);

    return (
        <div>
           
            <h2>Felhasználó megrendelései</h2>
            <table className="ordertable">
             <thead>
                    <tr>
                        <th>Megrendelés #</th>
                        <th>Vásárló id</th>
                        <th>Termékek</th>
                        <th>Mennyiség</th>
                        <th>Összeg</th>
                    </tr>
            </thead>
                    { userData ? (orderList ? orderList.map ((order) =>                        
      <>
      <tr>
      <td>{order.id}</td>
      <td>{order.uid}</td>
      <tbody>
      {Object.values(order.products).map((order, idx) => {
        <tr key={idx}>
            <td>{order.title}</td>
            <td>{order.amount}</td>
            <td>{order.price}</td>
        </tr>
      }
      )}
      </tbody>
      <td>{Object.keys(order.products)}</td>
      <td>{Object.values(order.products)}</td> 
      </tr>
     

      </>
       ) 
        : "még nem rendeltél semmit."
      )
      : "Bejelentkezés szükséges."
                    }
                      
            </table>
    </div>
  
    )
    
}

export default UserOrders;