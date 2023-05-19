import '../../styles/admin.css';
import { useContext } from 'react';
import { AuthContext } from "../../context/AuthContext";

const Admin = () => {
    const { userData, setUserData } = useContext(AuthContext);

    return (
        <> {userData && userData.isAdmin ?
            <>
                <p>Admin kezdőoldal</p>
            </>
            :
            <>
                <p>Ez az oldal csak admini jogosultsággal tekinthető meg.</p>
            </>
        }
        </>
    )
}

export default Admin;