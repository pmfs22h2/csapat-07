import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/cartContext";
import { userLoginAuth, getNameFromDatabase } from "../../service/auth-service";
import cartService from "../../service/cartService";
import getCartList from "../../utils/getCartList";
import UserProfile from "./UserProfile";
import "../../styles/login.css";

const LoginComp = () => {

    const { userData, setUserData } = useContext(AuthContext);
    const { setCart } = useContext(CartContext);
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
                        .then(data => {
                            setUserData({
                                email: formData.email,
                                password: formData.password,
                                name: data.name,
                                uid: data.uid
                            })
                        }
                        )
                        cartService.getCart(authResp.localId)
                        .then((cartlist) => {
                            const cart = getCartList(cartlist)?.then(cart => setCart(cart))
                        })
                } else {
                    console.error(authResp.error.message);
                }
            })
    }

    return (
        <> {userData ? <UserProfile />
            :
            <>
            <div className="login-form">
                <h1> Bejelentkezés </h1>

                <form>
                    <p className="log-text">
                       
                        <input type="email" 
                        value={formData.email} 
                        required onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                        />
                         <label htmlFor="email"> E-mail: </label>
                    </p>
                    <p className="log-text">
                        
                        <input type="password" 
                        value={formData.password} 
                        required minLength={6} onChange={(e) => setFormData({ ...formData, password: e.target.value })} 
                        />
                        <label htmlFor="password"> Jelszó: </label>
                    </p>
                    <p>Még nincs fiókod? <Link className="login-link" to="/regisztracio">Regisztrálj!</Link></p>
                    <p><button className="log-button" type="submit" onClick={login}>Belépés</button></p>
                </form>
                </div>
            </>
        }
        </>
    )
}

export default LoginComp;