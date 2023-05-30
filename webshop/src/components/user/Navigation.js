import { Link } from 'react-router-dom';
import '../../styles/navigation.css';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { FaUserAlt, FaShoppingBag, FaHeart } from "react-icons/fa";
import CartTotal from "./CartTotal";
import { AdminAuthContext } from '../../context/AdminAuthContext';
import logo1uj from '../../styles/pics/logo1uj.png';

const Navigation = () => {
    const { userData, setUserData } = useContext(AuthContext);
    const { admin, setAdmin } = useContext(AdminAuthContext);

    return (
        <div className='header-container'>
            <Link to='/'> <img className="logo1uj" src={logo1uj} alt="logo1uj" style={{ width: '150px'}}/></Link>
            <div className='navbar'>
                {admin && <Link to='/admin' className="nav-link">Admin</Link>}
                <Link to="/about" className="nav-link">Rólunk</Link>
                <Link to='/termekek' className="nav-link">Termékek</Link>
                <Link to='/varazslo' className="nav-link">Termék varázsló</Link>
                <Link to='/kapcsolat' className="nav-link">Kapcsolat</Link>
                {/* <Link to='/kosar'>Kosár</Link> */}
                {/* {!userData ? <Link to='/regisztracio'>Regisztráció</Link> : <></>} */}
                {/* {!userData ? <Link to='/belepes'>Bejelentkezés</Link> : <></>} */}
                {/* {!admin ? <Link to='/admin-belepes' className="nav-link">Admin Bejelentkezés</Link> : <></>} */}
                {userData && <Link to='/megrendeleseim' className="nav-link">Megrendelések</Link>}
            </div>
            <div className="nav-link" >
                {userData && `Bejelentkezve, mint: ${userData.name}`}
                {(userData || admin) && <button className="logout" onClick={() => { setUserData(null); setAdmin(false) }}>Kijelentkezés</button>}
            </div>
            <div className='nav-icons'>
                {!userData ? <Link to="/belepes"><FaUserAlt /></Link> : <></>}
                {!admin ? <Link to="/admin-belepes" className="nav-link"><FaHeart /></Link> :<></> }
                <Link to="/kosar" style={{textDecoration: 'none'}}><FaShoppingBag />
                {userData && 
                <CartTotal />
                }                
                </Link>
            </div>
        </div>
    )
}

export default Navigation;