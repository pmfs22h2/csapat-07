import { Link } from 'react-router-dom';
import '../../styles/navigation.css';
import { useContext } from 'react';
import { AdminAuthContext } from '../../context/AdminAuthContext';

const AdminNavigation = () => {

    const { setAdmin } = useContext(AdminAuthContext)

    return (
        <>
            <div className='header-container'>
                <div className='navbar'>
                    <Link to='/admin'>Admin</Link>
                    <Link to='/admin/termekek'>Termék lista</Link>
                    <Link to='/admin/termek-felvitel'>Termékfelvitel</Link>
                    <Link to='/admin/vasarlok'>Felhasználók lista</Link>
                    <Link to='/'><button onClick={() => setAdmin(false)}>Vissza</button></Link>
                </div>
                <Link to='/'>Vissza</Link>
                <Link to='/admin/vasarlok'>Felhasználók lista</Link>
            </div >
        </>
    )
}

export default AdminNavigation;