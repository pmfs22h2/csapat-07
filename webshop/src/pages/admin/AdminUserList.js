import { useEffect, useState, useContext } from "react";
import userService from "../../service/userService";
import UserList from "../../components/admin/UserList";
import { AuthContext } from "../../context/AuthContext";
import AdminLogin from "./AdminLogin";
import { useNavigate } from "react-router-dom";


const AdminUserList = () => {

    const [webshopUsers, setWebshopUsers] = useState();
    const { userData, setUserData } = useContext(AuthContext);

    useEffect(() => {
        userService.read()
            .then(users => setWebshopUsers(users))
            console.log(webshopUsers)

    }, [])

    const navigate = useNavigate()

    return (
        <> {userData && userData.isAdmin ?
            <>
            <p>Admin felhasználók lista</p>
            <UserList users={webshopUsers}/>
            </>
            :
            navigate("/admin/belepes")
        }
        </>
    )
}

export default AdminUserList;