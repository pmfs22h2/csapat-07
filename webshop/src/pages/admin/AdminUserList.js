import { useEffect, useState } from "react";
import UserList from "../../components/admin/UserList";
import AdminUserSearchComponent from "../../components/admin/AdminUserSearchComponent";
import sortUsersFromA from "../../utils/sortUsersFromA";
import sortUsersFromB from "../../utils/sortUsersFromB";
import userService from "../../service/userService";
import SearchComponent from "../../components/user/SearchComponent";
import { SearchValue } from "../../context/searchValueContext";
import { useContext } from "react";

const AdminUserList = () => {

    const [webshopUsers, setWebshopUsers] = useState([]);
    const [from, setFrom] = useState(0);
    const [to, setTo] = useState(9);
    const [displayedUsers, setdisplayedUsers] = useState([]);
    const [selectValue, setSelectValue] = useState("order");
    const [sortedItems, setSortedItems] = useState([]);
    const [searchValue, setSearchValue] = useContext(SearchValue);

    useEffect(() => {
        listUsers();
    }, [])

    function listUsers() {
        userService.read()
            .then(users => {
                let manipulatedUsers = Object.values(users);
                setWebshopUsers(manipulatedUsers);
                setSortedItems(manipulatedUsers)
                const manUsLength = manipulatedUsers.length;

                 if (manUsLength < to) {
                    setTo(manUsLength);
                    setdisplayedUsers(manipulatedUsers);
                 } else {
                    setTo(9)
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
        if(array.length < 9) setTo(array.length)
        else setTo(increasedTo);
        setdisplayedUsers(array.slice(increasedFrom, increasedTo));
    }

    useEffect(() => {
        //keresés
        let searchedUser = webshopUsers.filter(u => u.name.toLowerCase().includes(searchValue))

        if (selectValue === "name-desc") {
            const prod = sortUsersFromB(searchedUser)
            setSortedItems(sortUsersFromB(searchedUser))
            sliceprod(prod)

        } else if (selectValue === "name-asc") {
            const prod = sortUsersFromA(searchedUser)
            setSortedItems(sortUsersFromA(searchedUser))
            sliceprod(prod)

        } else {
            // setTo(9)
            setSortedItems(searchedUser)
            sliceprod(searchedUser)
        }
    }, [selectValue, searchValue]);

    return (
        <>
        <h2 className="admin-h2">Felhasználók lista</h2>
        <div className="select-option">
            <select value={selectValue} id="ordered-list" onChange={(e) => setSelectValue(e.target.value)} >
                <option value="order">Rendezés</option>
                <option value="name-asc">Név szerint növekvő</option>
                <option value="name-desc">Név szerint csökkenő</option>
            </select>
            </div>
            {/* <UserList users={webshopUsers} /> */}
            {/* <AdminUserSearchComponent users={displayedUsers} /> */}
            <div className="searchbar">
                    <SearchComponent users={webshopUsers} />
                </div>
            <UserList users={displayedUsers} searchValue={searchValue}/>
            <div className="pagination-buttons">
                <button onClick={prevPage} className={from === 0 ? "disabled" : ""} disabled={from === 0}>Vissza</button>
                <button onClick={nextPage} className={to === sortedItems.length ? "disabled" : ""} disabled={to === sortedItems.length}>Előre</button>
            </div>
        </>
    )
}

export default AdminUserList;