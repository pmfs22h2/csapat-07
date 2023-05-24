import { Link } from 'react-router-dom';
import '../../styles/navigation.css';
import { FaArrowLeft } from "react-icons/fa";
import { useContext } from 'react';
import { AdminAuthContext } from '../../context/AdminAuthContext';

const AdminNavigation = () => {

    const { setAdmin } = useContext(AdminAuthContext)

    return (
        <>
            <div className='header-container'>
                <div className='navbar'>
                    <Link to='/admin'>Admin</Link>
                    <Link to='/admin/termekek'>Terméklista</Link>
                    <Link to='/admin/termek-felvitel'>Termékfelvitel</Link>
                    <Link to='/admin/vasarlok'>Felhasználók lista</Link>
                    <Link to='/admin/megrendelesek'>Megrendelések</Link>
                    <Link to='/admin/kategoriak/uj-kategoria'>Kategória felvitel</Link>
                    <Link to='/'><button className="back-button" onClick={() => setAdmin(false)}><FaArrowLeft/>Vissza</button> </Link>
                </div>              
            </div>
        </>
    )
}

export default AdminNavigation;