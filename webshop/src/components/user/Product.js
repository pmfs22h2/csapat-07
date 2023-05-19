import '../../styles/products.css';
import cartService from '../../service/cartService';
import { useContext } from 'react';
// import { CartContext } from '../../context/cartContext';
import { AuthContext } from '../../context/AuthContext';

export default function Products(props) {

    const { userData } = useContext(AuthContext)
    // const { cart, setCart } = useContext(CartContext);

    return (
        <>
            <div className="product">
                <div className='product-img'>
                    <img src={props.product.img} alt='' />
                </div>
                <div className='product-details'>
                    <div className='product-title'>{props.product.title}</div>
                    <div className='product-price'>{props.product.price} HUF</div>
                    <button className="cart-button" onClick={() => cartService.addToCart(props.product.id, userData.uid)}>Kosárba</button>
                </div>
            </div>
        </>
    )
}