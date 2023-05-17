import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const Logout = () => {
    
    const {setUserData } = useContext(AuthContext);

    function logout() {
        setUserData(null);
    }
    
    return (
        <button onClick={logout}>Kijelentkezés</button>
    )
}

export default Logout;