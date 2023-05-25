import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import '../../styles/userprofile.css';

const UserProfile = () => {
    const { userData } = useContext(AuthContext);

    return (
        <>
        <h2 className="userprofile-h2">Felhasználói adatlap</h2>
        <div className="user-profile">
                <h3>Név:</h3>
                <p>{userData.name}</p>
                <h3>E-mail:</h3>
                <p>{userData.email}</p>
        </div>
        </>
    )
}

export default UserProfile;