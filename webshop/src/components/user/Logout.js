import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { AdminAuthContext } from "../../context/AdminAuthContext";

const Logout = () => {

    const { setUserData } = useContext(AuthContext);
    const { setAdmin } = useContext(AdminAuthContext);

    function logout() {
        setUserData(null);
        setAdmin(false);
    }

    return (
        <button onClick={logout}>Kijelentkezés</button>
    )
}

export default Logout;