import { useState, useContext } from "react";
import { AdminAuthContext } from "../../context/AdminAuthContext";
import { useNavigate } from "react-router";

const API_URL = 'https://csapat-07-default-rtdb.europe-west1.firebasedatabase.app/'

const AdminLoginComp = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const email = "admin@admin.com";
    const password = "123456";
    const { admin, setAdmin } = useContext(AdminAuthContext);
    const navigate = useNavigate();

    function login(e) {
        e.preventDefault();
        if (formData.email == email && formData.password == password) {
            setAdmin(true);
            navigate('/admin')
        } else {
            console.error("Ennek a felhasználónak nincsenek admini jogosultságai.");
        }
    }

    return (
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
    )
}

export default AdminLoginComp;