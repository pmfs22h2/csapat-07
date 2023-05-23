import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/cartContext";

const Logout = () => {
    
    const {setUserData } = useContext(AuthContext);
    const {setCart} = useContext(CartContext)

    function logout() {
        setUserData(null);
        setCart([])
    }
    
    return (
        <button onClick={logout}>Kijelentkezés</button>
    )
}

export default Logout;