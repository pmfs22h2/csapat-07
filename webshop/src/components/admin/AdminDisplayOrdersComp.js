import { useEffect, useState } from "react";
import orderService from "../../service/orderService";

const AdminDisplayOrdersComp = () => {

    const [orders, setOrders] = useState([]);

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
            <h2>Vásárlók megrendelései</h2>
            <table className="ordertable">
                <thead>
                    <tr>
                        <th>Megrendelés #</th>
                        <th>Megrendelés ideje</th>
                        <th>Vásárló #</th>
                        <th>Vásárló neve</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.timestamp}</td>
                            <td>{order.uid}</td>
                            <td>sample customer's name</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminDisplayOrdersComp;