import { Link } from 'react-router-dom';
import '../../styles/navigation.css';
import {useContext} from 'react';
import { AuthContext } from "../../context/AuthContext";

const AdminNavigation = () => {
    const { userData, setUserData } = useContext(AuthContext);

    return (
        <> {userData && userData.isAdmin ?
            <>
                <div className='navbar'>
                    <Link to='/admin'>Admin</Link>
                    <Link to='/admin/termekek'>Termék lista</Link>
                    <Link to='/admin/termek-felvitel'>Termékfelvitel</Link>
                    <Link to='/admin/vasarlok'>Felhasználók lista</Link>
                    <Link to='/'>Vissza</Link>
                </div>
            </>
            :
            <>
                {
                // ne írjon ki semmit
                }
            </>
        }
        </>
    )
}

export default AdminNavigation;