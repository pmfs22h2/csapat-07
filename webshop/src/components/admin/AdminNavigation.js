import { Link } from 'react-router-dom';

const AdminNavigation = () => {
    return (
        <>
            <Link to='/admin'>Admin</Link>
            <Link to='/admin/termekek'>Termék lista</Link>
            <Link to='/admin/termek-felvitel'>Termékfelvitel</Link>
        </>
    )
}

export default AdminNavigation;