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
                {!userData ? <Link to='/admin'>Admin</Link> : <></>}
                <Link to='/kosar'>Kosár</Link>
                {!userData ? <Link to='/regisztracio'>Regisztráció</Link> : <></>}
                {!userData ? <Link to='/belepes'>Bejelentkezés</Link> : <></>}
            </div>
            <div className='user-login'>
                {userData ? `Bejelentkezve, mint: ${userData.name}` : "Még nem vagy bejelentkezve"}
                {userData ? <button onClick={() => setUserData(null)}>Kijelentkezés</button> : <></>}</div>
            <div className='nav-icons'>
                <FaUserAlt />
                <FaHeart />
                <FaShoppingBag />
            </div>
        </div>
    )
}

export default Navigation;