import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import '../../styles/userprofile.css';
import csaj from '../../styles/pics/csaj.jpeg';

const UserProfile = () => {
    const { userData } = useContext(AuthContext);

    return (
        <>
        <h2 className="userprofile-h2">Felhasználói adatlap</h2>
        <div className="user-h2">
        <h2>Szia {userData.name}!</h2>
        </div>
        <div className="hello">
        <p>Örülünk , hogy újra benéztél hozzánk! </p>
        <p>Kellemes böngészést kívánunk és jó vásárlást nálunk!</p>
        </div>
            <div className="user-data">  
            <img src={csaj} alt="kep5" style={{ width: '200px'}}/>
            <div className="user-data-box">
                <div className="small-box">
                <label>Név:</label>
                <p>{userData.name}</p>
                </div>
                <div className="small-box">
                <label>E-mail:</label>
                <p>{userData.email}</p>
                </div>
                <div className="small-box">
                <label>Cím:</label>
                <p>1036 Budapest, Csemete utca 10.</p>
                </div>
                <div className="small-box">
                <label>Tel:</label>
                <p>+36 20 446 9194</p>
                </div>
                <div className="small-box">
                <label>Tagsági azonosító:</label>
                <p>ABC123456789</p>
                </div>
            </div>
            </div>
        </>
    )
}

export default UserProfile;