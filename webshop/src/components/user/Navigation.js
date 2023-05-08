import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
            <Link to='/'>Kezdőoldal | </Link>
            <Link to='/termekek'>Termékek | </Link>
            <Link to='/admin'>Admin</Link>
        </>
    )
}

export default Navigation;