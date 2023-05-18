import '../../styles/products.css';
import cartService from '../../service/cartService';
import { useContext } from 'react';
// import { CartContext } from '../../context/cartContext';
import { AuthContext } from '../../context/AuthContext';

export default function Products(props) {

    const { userData, setUserData } = useContext(AuthContext)
    // const { cart, setCart } = useContext(CartContext);

    return (
        <>
            <div className="product" style={{ backgroundImage: `url(https://images.pexels.com/photos/4938502/pexels-photo-4938502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)` }}>
                <h4>Termék neve:</h4>
                <p>{props.product.title}</p>
                <p>Ár: {props.product.price}</p>
                {userData ? <button className="cart-button" onClick={() => cartService.addToCart(props.product.id, userData.uid)}>Kosárba</button> : <></>}
            </div>
        </>
    )
}