import { Link } from 'react-router-dom';
import '../../styles/navigation.css';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { FaUserAlt, FaShoppingBag, FaHeart } from "react-icons/fa";
import { AdminAuthContext } from '../../context/AdminAuthContext';

const Navigation = () => {
    const { userData, setUserData } = useContext(AuthContext);
    const { admin, setAdmin } = useContext(AdminAuthContext);

    return (
        <div className='header-container'>
            <div className='navbar'>
                <Link to='/'>Kezdőoldal</Link>
                <Link to='/termekek'>Termékek</Link>
                {admin && <Link to='/admin'>Admin</Link>}
                <Link to='/kosar'>Kosár</Link>
                {!userData ? <Link to='/regisztracio'>Regisztráció</Link> : <></>}
                {!userData ? <Link to='/belepes'>Bejelentkezés</Link> : <></>}
                {!admin ? <Link to='/admin-belepes'>Admin Bejelentkezés</Link> : <></>}
                <Link to='/megrendeleseim'>Megrendelések</Link>
            </div>
            <div className='user-login'>
                {userData ? `Bejelentkezve, mint: ${userData.name}` : "Még nem vagy bejelentkezve"}
                {(userData || admin) && <button onClick={() => { setUserData(null); setAdmin(false) }}>Kijelentkezés</button>}
            </div>
            <div className='nav-icons'>
                <Link to="#"><FaUserAlt /></Link>
                <Link to="#"><FaHeart /></Link>
                <Link to="/kosar"><FaShoppingBag /></Link>
            </div>
        </div>
    )
}

export default Navigation;