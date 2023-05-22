import { useEffect, useState } from "react";
import UserList from "../../components/admin/UserList";
import AdminUserSearchComponent from "../../components/admin/AdminUserSearchComponent";
import sortUsersFromA from "../../utils/sortUsersFromA";
import sortUsersFromB from "../../utils/sortUsersFromB";
import userService from "../../service/userService";

const AdminUserList = () => {

    const [webshopUsers, setWebshopUsers] = useState([]);
    const [from, setFrom] = useState(0);
    const [to, setTo] = useState(9);
    const [displayedUsers, setdisplayedUsers] = useState([]);
    const [selectValue, setSelectValue] = useState("order");
    const [sortedItems, setSortedItems] = useState();

    useEffect(() => {
        listUsers();
    }, [])

    // ez nem kell

    // useEffect(() => {
    //     userService.read()
    //         .then(users => setWebshopUsers(users))
    // }, [])

    function listUsers() {
        userService.read()
            .then(users => {
                // objec.values
                let manipulatedUsers = Object.values(users);
                setWebshopUsers(manipulatedUsers);
                setSortedItems(manipulatedUsers)
                const manUsLength = manipulatedUsers.length;

                 if (manUsLength < to) {
                    setTo(manUsLength);
                    setdisplayedUsers(manipulatedUsers);
                 } else {
                    setdisplayedUsers(manipulatedUsers.slice(from, to));
                 }
            })
    }

    function prevPage() {
        let decreasedFrom = from - 9;
        let decreasedTo = to % 9 === 0 ? to - 9 : to - (to % 9);

        setFrom(decreasedFrom);
        setTo(decreasedTo);
        setdisplayedUsers(sortedItems.slice(decreasedFrom, decreasedTo));
    }

    function nextPage() {
        let increasedFrom = from + 9;
        let increasedTo = sortedItems.length >= to + 9 ? to + 9 : sortedItems.length;

        setFrom(increasedFrom);
        setTo(increasedTo);
        setdisplayedUsers(sortedItems.slice(increasedFrom, increasedTo));
    }

    function sliceprod(array) {
        let increasedFrom = 0;
        let increasedTo = 9;
        setFrom(increasedFrom);
        setTo(increasedTo);
        setdisplayedUsers(array.slice(increasedFrom, increasedTo));
    }

    useEffect(() => {
        if (selectValue === "name-desc") {
            const prod = sortUsersFromB(webshopUsers)
            setSortedItems(sortUsersFromB(webshopUsers))
            sliceprod(prod)

        } else if (selectValue === "name-asc") {
            const prod = sortUsersFromA(webshopUsers)
            setSortedItems(sortUsersFromA(webshopUsers))
            sliceprod(prod)

        } else {
            setSortedItems(webshopUsers)
        }
    }, [selectValue]);


    return (
        <>
            <select value={selectValue} id="ordered-list" onChange={(e) => setSelectValue(e.target.value)} >
                <option value="order">Rendezés</option>
                <option value="name-asc">Név szerint növekvő</option>
                <option value="name-desc">Név szerint csökkenő</option>
            </select>
            <p>Admin felhasználók lista</p>
            <AdminUserSearchComponent users={displayedUsers} />
            <UserList users={displayedUsers} />
            <div className="pagination-buttons">
                <button onClick={prevPage} disabled={from === 0}>Vissza</button>
                <button onClick={nextPage} disabled={to === webshopUsers.length}>Előre</button>
            </div>
        </>
    )
}

export default AdminUserList;