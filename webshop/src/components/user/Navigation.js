import { Link } from 'react-router-dom';
import '../../styles/navigation.css';

const Navigation = () => {
    return (
        <div className='navbar'>
            <Link className="link" to='/'>Kezdőoldal</Link>
            <Link className="link" to='/termekek'>Termékek</Link>
            <Link className="link" to='/admin'>Admin</Link>
        </div>
    )
}

export default Navigation;