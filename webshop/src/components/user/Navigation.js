import { Link } from 'react-router-dom';
import '../../styles/navigation.css';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { FaUserAlt, FaShoppingBag, FaHeart } from "react-icons/fa";
import CartTotal from "./CartTotal";
import { AdminAuthContext } from '../../context/AdminAuthContext';

const Navigation = () => {
    const { userData, setUserData } = useContext(AuthContext);
    const { admin, setAdmin } = useContext(AdminAuthContext);

    return (
        <div className='header-container'>
            <div className='navbar'>
                {admin && <Link to='/admin' className="nav-link">Admin</Link>}
                <Link to='/' className="nav-link">Kezdőoldal</Link>
                <Link to='/termekek' className="nav-link">Termékek</Link>
                {/* <Link to='/kosar'>Kosár</Link> */}
                {/* {!userData ? <Link to='/regisztracio'>Regisztráció</Link> : <></>} */}
                {/* {!userData ? <Link to='/belepes'>Bejelentkezés</Link> : <></>} */}
                {!admin ? <Link to='/admin-belepes' className="nav-link">Admin Bejelentkezés</Link> : <></>}
                {userData && <Link to='/megrendeleseim' className="nav-link">Megrendelések</Link>}
            </div>
            <div className="nav-link" >
                {userData && `Bejelentkezve, mint: ${userData.name}`}
                {(userData || admin) && <button className="logout" onClick={() => { setUserData(null); setAdmin(false) }}>Kijelentkezés</button>}
            </div>
            <div className='nav-icons'>
                {!userData ? <Link to="/belepes"><FaUserAlt /></Link> : <></>}
                <Link to="#"><FaHeart /></Link>
                <Link to="/kosar" style={{textDecoration: 'none'}}><FaShoppingBag />
                {userData && 
                <div className='badge'>
                    <CartTotal />
                </div>
                }                
                </Link>
            </div>
        </div>
    )
}

export default Navigation;