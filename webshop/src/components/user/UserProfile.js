import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const UserProfile = () => {
    const { userData } = useContext(AuthContext);

    return (
        <div>
            <h2>Felhasználói adatlap</h2>
            <p>Név: {userData.name}</p>
            <p>E-mail cím: {userData.email}</p>
        </div>
    )
}

export default UserProfile;