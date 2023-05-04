import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
            <Link to='/'>Home | </Link>
            <Link to='/admin'>Admin | </Link>
            <Link to='/products'>Products</Link>
        </>
    )
}

export default Navigation;