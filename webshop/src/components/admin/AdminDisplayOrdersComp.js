import { useEffect, useState } from "react";
import orderService from "../../service/orderService";
import { Link } from 'react-router-dom';
import userService from "../../service/userService";
import '../../styles/admin.css';

const AdminDisplayOrdersComp = () => {

    const [orders, setOrders] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.read()
            .then(usersdata => setUsers(usersdata))
    }, [orders])

    console.log(users);

    useEffect(() => {
        orderService.getOrders()
            .then(list => {
                const ordersList = Object.entries(list).map(([id, order]) => ({
                    id,
                    ...order
                }));
                setOrders(ordersList);
            })
    }, [])

    return (
        <div>
            <h2 className="admin-h2">Vásárlók megrendelései</h2>
            <table className="ordertable">
                <thead>
                    <tr>
                        <th>Megrendelés #</th>
                        <th>Megrendelés ideje</th>
                        <th>Vásárló #</th>
                        <th>Vásárló neve</th>
                        <th>Részletek</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.timestamp}</td>
                            <td>{order.uid}</td>
                            <td>{users[order.uid].name}</td>
                            <td>
                                <Link to={`/admin/megrendelesek/${order.id}`}>Adatlap</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminDisplayOrdersComp;