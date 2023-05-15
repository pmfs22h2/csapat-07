import { Link } from 'react-router-dom';
import '../../styles/navigation.css';

const Navigation = () => {
    return (
        <div className='navbar'>
            <Link to='/'>Kezdőoldal</Link>
            <Link to='/termekek'>Termékek</Link>
            <Link to='/admin'>Admin</Link>
            <Link to='/kosar'>Kosár</Link>
            <Link to='/regisztracio'>Regisztráció</Link>
            <Link to='/belepes'>Bejelentkezés</Link>
        </div>
    )
}

export default Navigation;