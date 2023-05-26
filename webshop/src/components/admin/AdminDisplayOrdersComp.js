import { useEffect, useState } from "react";
import orderService from "../../service/orderService";
import { Link } from 'react-router-dom';
import userService from "../../service/userService";
import '../../styles/admin.css';
import { useContext } from "react";
import { SearchValue } from "../../context/searchValueContext";
import SearchComponent from "../user/SearchComponent";
import sortOrdersFromNew from "../../utils/sortOrdersFromNew";
import sortOrdersFromOld from "../../utils/sortOrdersFromOld";

const AdminDisplayOrdersComp = () => {

    const [orders, setOrders] = useState([]);
    const [users, setUsers] = useState([]);
    const [from, setFrom] = useState(0);
    const [to, setTo] = useState(9);
    const [displayedOrders, setDisplayedOrders] = useState([]);
    const [selectValue, setSelectValue] = useState("order");
    const [searchValue, setSearchValue] = useContext(SearchValue);
    const [sortedItems, setSortedItems] = useState([]);

    useEffect(() => {
        listOrders();
        userService.read().then(user => setUsers(user))
    }, [])

    function listOrders() {
        orderService.getOrders()
            .then(order => {
                let manipulatedOrders = Object.values(order);
                setOrders(manipulatedOrders);
                setSortedItems(manipulatedOrders)
                const manOrdersLenght = manipulatedOrders.length;

                if (manOrdersLenght < to) {
                    setTo(manOrdersLenght);
                    setDisplayedOrders(manipulatedOrders);
                } else {
                    setDisplayedOrders(manipulatedOrders.slice(from, to));
                }
            })
        // .then(() => userService.read(user => setUsers(user)))
    }

    useEffect(() => {
        // rendezés
        // if (selectValue === "name-desc") {
        //     const prod = sortUsersFromA(searchedProducts)
        //     setSortedItems(sortUsersFromA(searchedProducts))
        //     sliceprod(prod)

        // } else if (selectValue === "name-asc") {
        //     const prod = sortUsersFromA(searchedProducts)
        //     setSortedItems(sortUsersFromA(searchedProducts))
        //     sliceprod(prod)

         if (selectValue === "date-desc") {
            const prod = sortOrdersFromOld(orders)
            setSortedItems(sortOrdersFromOld(orders))
            sliceprod(prod)
         }
        else if (selectValue === "date-asc") {
            const prod = sortOrdersFromNew(orders)
            setSortedItems(sortOrdersFromNew(orders))
            sliceprod(prod)

        } else {
            setSortedItems(orders)
            sliceprod(orders)
        }        

    }, [selectValue, searchValue])

    function prevPage() {
        let decreasedFrom = from - 9;
        let decreasedTo = to % 9 === 0 ? to - 9 : to - (to % 9);

        setFrom(decreasedFrom);
        setTo(decreasedTo);
        setDisplayedOrders(sortedItems.slice(decreasedFrom, decreasedTo));
    }

    function nextPage() {
        let increasedFrom = from + 9;
        let increasedTo = sortedItems.length >= to + 9 ? to + 9 : sortedItems.length;

        setFrom(increasedFrom);
        setTo(increasedTo);
        setDisplayedOrders(sortedItems.slice(increasedFrom, increasedTo));
    }

    function sliceprod(array) {
        let increasedFrom = 0;
        let increasedTo = 9;
        setFrom(increasedFrom);
        if(array.length < 9) setTo(array.length)
        else setTo(increasedTo);
        setDisplayedOrders(array.slice(increasedFrom, increasedTo));
    }


    console.log(users, 'users');

    return (
        <div>
            <h2 className="admin-h2">Vásárlók megrendelései</h2>
            <div className="top-bar">
                <div className="select-option">
                    <select value={selectValue} id="ordered-list" onChange={(e) => setSelectValue(e.target.value)} >
                        <option value="order">Rendezés</option>
                        {/* <option value="name-asc">Név szerint növekvő</option>
                        <option value="name-desc">Név szerint csökkenő</option> */}
                        <option value="date-asc">Dátum szerint növekvő</option>
                        <option value="date-desc">Dátum szerint csökkenő</option>
                    </select>
                </div>
                {/* <div className="searchbar">
                    <SearchComponent orders={orders} />
                </div> */}
            </div>
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
                    {displayedOrders.map(order => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.timestamp}</td>
                            <td>{order.uid}</td>
                            <td>{users[order.uid]?.name}</td>
                            <td>
                                <Link to={`/admin/megrendelesek/${order.id}`}>Adatlap</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination-buttons">
                <button onClick={prevPage} className={from === 0 ? "disabled" : ""} disabled={from === 0}>Vissza</button>
                <button onClick={nextPage} className={to === sortedItems.length ? "disabled" : ""} disabled={to === sortedItems.length}>Előre</button>
            </div>
        </div>
    );
}

export default AdminDisplayOrdersComp;