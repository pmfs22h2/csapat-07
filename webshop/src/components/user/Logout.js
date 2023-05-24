import { useContext } from "react";
import { AdminAuthContext } from "../../context/AdminAuthContext";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/cartContext";

const Logout = () => {

    const { setUserData } = useContext(AuthContext);
    const { setAdmin } = useContext(AdminAuthContext);
    const { setCart } = useContext(CartContext);

    function logout() {
        setUserData(null);
        setCart([]);
        setAdmin(false);
        setCart([])
    }

    return (
        <button onClick={logout}>Kijelentkezés</button>
    )
}

export default Logout;