import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { userLoginAuth, getNameFromDatabase } from "../../service/auth-service";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import UserProfile from "./UserProfile";

const LoginComp = () => {

    const { userData, setUserData } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    function login(e) {
        e.preventDefault();
        userLoginAuth(formData.email, formData.password)
            .then(authResp => {
                if (authResp.registered) {
                    setUserData({ email: authResp.email });
                    getNameFromDatabase(authResp.localId)
                    .then(data => setUserData({
                        email: formData.email,
                        password: formData.password,
                        name: data.name,
                        uid: data.uid
                    }))
                } else {
                    console.error(authResp.error.message);
                }
            })
    }

    return (
        <> {userData ? <UserProfile />
            :
            <>
                <h1> Bejelenkezés </h1>

                <form>
                    <p>
                        <label htmlFor="email"> E-mail: </label>
                        <input type="email" value={formData.email} required onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    </p>
                    <p>
                        <label htmlFor="password"> Jelszó: </label>
                        <input type="password" value={formData.password} required minLength={6} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                    </p>
                    <p>Még nincs fiókod? <Link to="/regisztracio">Regisztrálj!</Link></p>
                    <p><button type="submit" onClick={login}>Belépés</button></p>
                </form>
            </>
        }
        </>
    )
}

export default LoginComp;