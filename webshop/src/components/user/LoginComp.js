import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { userLoginAuth } from "../../service/auth-service";

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

export default LoginComp;