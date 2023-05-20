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
                        <th>Dátum</th>
                        <th>Termékek</th>
                        <th>Mennyiség</th>
                        <th>Összeg</th>
                    </tr>
                </thead>
            </table>
           
        </div>
    )
}

export default UserOrders;