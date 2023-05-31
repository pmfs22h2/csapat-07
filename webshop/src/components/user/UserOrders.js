import { useContext, useEffect, useState } from "react";
import orderService from "../../service/orderService";
import '../../styles/ordertable.css';
import { AuthContext } from "../../context/AuthContext";
import productService from "../../service/productService";

function UserOrders() {

    const [orderList, setOrderList] = useState([]);
    const { userData, setUserData } = useContext(AuthContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        orderService.getOrders()
            .then(list => {
                let filteredOrderList = Object.values(list).filter(order => order.uid == userData.uid);
                setOrderList(filteredOrderList);
                console.log("orderList");
                console.log(filteredOrderList.length);
                console.log(filteredOrderList);
            });
    }, []);

    useEffect(() => {
        productService.read()
            .then(products2 => {
                setProducts(products2);
                console.log("products");
                console.log(products2);
                console.log(products2.length);
            }
            );
    }, []);

    return (
        <div>
            <h2 className="order-h2">Felhasználó megrendelései</h2>
            <table className="ordertable">
                <thead>
                    <tr>
                        <th>Megrendelés #</th>
                        <th>Megrendelés ideje</th>
                        <th>Mennyiség</th>
                        <th>Összeg</th>
                    </tr>
                </thead>
                {userData ? (orderList ? orderList.map((order) =>
                    <>
                        <tr>
                            <td>{order.id}</td>
                            <td>{order.timestamp}</td>
                            <td>{Object.values(order.products).reduce((sum, n) => sum + n, 0)}</td>
                            <td>{Object.keys(order.products).map(id => id in products ? (products[id].price * order.products[id]) : 0).reduce((sum, n) => sum + Number(n), 0)} HUF</td>
                        </tr>
                    </>
                )
                    : <div className="order-info">Még nem rendeltél semmit.</div>
                )
                    : <div className="order-info">Bejelentkezés szükséges</div>
                }

            </table>
        </div>

    )

}

export default UserOrders;