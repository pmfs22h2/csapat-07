import { Link } from 'react-router-dom';
import '../../styles/navigation.css';

const AdminNavigation = () => {
    return (
        <div className='navbar'>
            <Link to='/admin'>Admin</Link>
            <Link to='/admin/termekek'>Termék lista</Link>
            <Link to='/admin/termek-felvitel'>Termékfelvitel</Link>
        </div>
    )
}

export default AdminNavigation;