import { Link } from 'react-router-dom';
import '../../styles/navigation.css';
import { FaArrowLeft } from "react-icons/fa";
import { useContext } from 'react';
import { AdminAuthContext } from '../../context/AdminAuthContext';
import logo1uj from '../../styles/pics/logo1uj.png';

const AdminNavigation = () => {

    const { setAdmin } = useContext(AdminAuthContext)

    return (
        <>
            <div className='header-container'>
            <img className="logo1uj" src={logo1uj} alt="logo1uj" style={{ width: '150px'}}/>
                <div className='navbar'>
                    <Link to='/admin' className="nav-link">Admin</Link>
                    <Link to='/admin/kategoriak' className="nav-link">Termék kategóriák</Link>
                    <Link to='/admin/kategoriak/uj-kategoria' className="nav-link">Kategória felvitel</Link>
                    <Link to='/admin/termekek' className="nav-link">Terméklista</Link>
                    <Link to='/admin/termek-felvitel' className="nav-link">Termékfelvitel</Link>
                    <Link to='/admin/megrendelesek' className="nav-link">Megrendelések</Link>
                    <Link to='/admin/vasarlok' className="nav-link">Felhasználók lista</Link>
                    <Link to='/'><button className="back-button" onClick={() => setAdmin(false)}><FaArrowLeft/>Vissza</button> </Link>
                </div>              
            </div>
        </>
    )
}

export default AdminNavigation;