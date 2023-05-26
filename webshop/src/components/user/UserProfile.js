import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import '../../styles/userprofile.css';
import kep5 from '../../styles/kep5.jpg';

const UserProfile = () => {
    const { userData } = useContext(AuthContext);

    return (
        <>
        <h2 className="userprofile-h2">Felhasználói adatlap</h2>
        <div className="hello">
        <h3>Szia Liviteszt2!</h3>
        <p>Örülünk , hogy újra benéztél hozzánk!</p>
        </div>
        <div className="user-profile">
            <div>
            <img src={kep5.jpg} alt="kep5" style={{ width: '200px', }}/>
            <img src='https://www.pexels.com/hu-hu/foto/no-lany-reggel-visszaverodes-4046314/' />
            </div>
            <div className="user-data">
                <h3>Név:</h3>
                <p>{userData.name}</p>
                </div>
                <div className="user-data">
                <h3>E-mail:</h3>
                <p>{userData.email}</p>
                </div>
                <div className="user-data">
                <h3>Cím:</h3>
                <p>1036 Budapest, Csemete utca 10.</p>
                </div>
                <div className="user-data">
                <h3>Tel:</h3>
                <p>+36 20 446 9194</p>
                <div className="user-data">
                <h3>Tagsági azonosítóm:</h3>
                <p>123456789</p>
                </div>
                </div>    
        </div>
        </>
    )
}

export default UserProfile;