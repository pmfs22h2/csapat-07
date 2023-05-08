import { Link } from 'react-router-dom';

const AdminNavigation = () => {
    return (
        <>
            <Link to='/admin'>Admin</Link>
            <Link to='/admin/termekek'>Admin termékek</Link>
        </>
    )
}

export default AdminNavigation;