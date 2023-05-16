import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { userLoginAuth } from "../../service/auth-service";

const Login = () => {

    const { userData, setUserData } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    function login() {
        userLoginAuth(formData.email, formData.password)
            .then(authResp => {
                if (authResp.registered) {
                    setUserData({ email: authResp.email });
                } else {
                    console.error(authResp.error.message);
                }
            })
    }

    function logout() {
        setUserData(null);
    }

    return (
        <> {userData ? <button onClick={logout}>Kijelentkezés</button>
            :
            <>
                <h1> Bejelenkezés </h1>
                <p>
                    <label htmlFor="email"> E-mail: </label>
                    <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </p>
                <p>
                    <label htmlFor="password"> Jelszó: </label>
                    <input type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                </p>
                <p><button onClick={login}>Belépés</button></p>
            </>
        }
        </>
    )
}

export default Login;