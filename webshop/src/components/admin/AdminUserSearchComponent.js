import { useState } from "react"
import '../../styles/adminsortsearch.css';

const AdminUserSearchComponent = (props) => {

    const [filteredUsers, setFilteredUsers] = useState(null);

    const [searchValue, setSearchValue] = useState('');

    const searchedUser = (e) => {
        setSearchValue(e.target.value);
        // console.log(searchValue);
    }

    // const filter = () => {
    //     const filteredUsersArray = props.users?.filter(user => user.name.toLowerCase().includes(searchValue));
    //     //HIBAÜZENET: props.users.filter is not a function
    //     // const filteredUsersArray = props.users.find(function(filteredUsersArray) {return filteredUsersArray.user.name.toLowerCase().includes(searchValue)});
    //     setFilteredUsers(filteredUsersArray);
    //     // console.log(filteredUsers);
    //     // console.log(props.users)
    // }

    const filter = () => {
        const filteredUsersArray = (Object.values(props.users)).filter(user => (user.name?.toLowerCase()).includes(searchValue.toLowerCase()) );
        // const filteredUsersArray = (Object.entries(props.users))?.filter(user => user.name.toLowerCase().includes(searchValue));
        setFilteredUsers(filteredUsersArray);
    }

    const deleteSearchUsers = () => {
        setFilteredUsers(null);
        setSearchValue('');
    }

    return (
        <div>
            <div className="search">
                Keresés: <input type="text" onChange={searchedUser} value={searchValue} />
                <button className="admin-search-button" onClick={filter}>Keresés</button>
                <button className="admin-delete-button" onClick={deleteSearchUsers}>Törlés</button>
            </div>

            <div>
                {
                    filteredUsers && (
                        filteredUsers?.length !== 0
                            ?
                            <><h1>Találatok:</h1> {filteredUsers?.map(users => <div key={users.uid}>{users.name}</div>)}</>
                            :
                            "Nincs ilyen felhasználó!"
                    )
                }
            </div>
        </div>
    )
}

export default AdminUserSearchComponent;