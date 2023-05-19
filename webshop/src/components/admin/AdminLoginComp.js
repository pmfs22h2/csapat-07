import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { userLoginAuth, getNameFromDatabase } from "../../service/auth-service";
import Admin from "../../pages/admin/Admin";
import { CartContext } from "../../context/cartContext";
import AdminNavigation from "./AdminNavigation";

const API_URL = 'https://csapat-07-default-rtdb.europe-west1.firebasedatabase.app/'

const AdminLoginComp = () => {

    const { userData, setUserData } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const email = "admin@admin.com";
    const password = "123456";

    function login(e) {
        e.preventDefault();
        console.log(formData.email == email, formData.password == password)
        console.log(formData.email, email)
        if (formData.email == email && formData.password == password) {
            setUserData({
                email: email,
                password: password,
                name: "Admin",
                uid: "",
                isAdmin: true,
            })
        } else {
            console.error("Notadmin :(((");
        }
    }

    return (
        <> {userData && userData.isAdmin ? <AdminNavigation />
            :
            <>
                <h1> Admin Bejelenkezés </h1>

                <form>
                    <p>
                        <label htmlFor="email"> E-mail: </label>
                        <input type="email" value={formData.email} required onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    </p>
                    <p>
                        <label htmlFor="password"> Jelszó: </label>
                        <input type="password" value={formData.password} required minLength={6} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                    </p>
                    <p><button type="submit" onClick={login}>Belépés</button></p>
                </form>
            </>
        }
        </>
    )
}

export default AdminLoginComp;