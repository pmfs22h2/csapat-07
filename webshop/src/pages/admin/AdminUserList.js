import { useEffect, useState } from "react";
import userService from "../../service/userService";
import UserList from "../../components/admin/UserList";

const AdminUserList = () => {

    const [webshopUsers, setWebshopUsers] = useState();

    useEffect(() => {
        userService.read()
            .then(users => setWebshopUsers(users))
            console.log(webshopUsers)

    }, [])

    return (
        <>
            <p>Admin felhasználók lista</p>
            <UserList users={webshopUsers}/>
        </>
    )
}

export default AdminUserList;