import { Link } from 'react-router-dom';
import '../../styles/navigation.css';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { FaUserAlt, FaShoppingBag, FaHeart } from "react-icons/fa";

const Navigation = () => {
    const { userData, setUserData } = useContext(AuthContext);

    return (
        <div className='header-container'>
            <div className='navbar'>
                <Link to='/'>Kezdőoldal</Link>
                <Link to='/termekek'>Termékek</Link>
                {!userData || userData.isAdmin ? <Link to='/admin'>Admin</Link> : <></>}
                <Link to='/kosar'>Kosár</Link>
                {!userData ? <Link to='/regisztracio'>Regisztráció</Link> : <></>}
                {!userData ? <Link to='/belepes'>Bejelentkezés</Link> : <></>}
                {!userData ? <Link to='/admin/belepes'>Admin Bejelentkezés</Link> : <></>}
            </div>
            <div className='user-login'>
                {userData ? `Bejelentkezve, mint: ${userData.name}` : "Még nem vagy bejelentkezve"}
                {userData ? <button onClick={() => setUserData(null)}>Kijelentkezés</button> : <></>}</div>
            <div className='nav-icons'>
                <Link to="#"><FaUserAlt /></Link>
                <Link to="#"><FaHeart /></Link>
                <Link to="#"><FaShoppingBag /></Link>
            </div>
        </div>
    )
}

export default Navigation;