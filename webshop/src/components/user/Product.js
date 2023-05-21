import '../../styles/products.css';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { CartContext } from '../../context/cartContext';
import getCartList from '../../utils/getCartList';
import cartService from '../../service/cartService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Products(props) {

    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const { userData } = useContext(AuthContext)
    const { setCart } = useContext(CartContext);

    function addItemToCart() {
        if (userData === null) {
            toast.error('Jelentkezz be a vásárláshoz!', {
                position: toast.POSITION.BOTTOM_CENTER
            });
            return;
        }
        cartService.addToCart(props.product.id, userData.uid);
        setIsAddedToCart(true);
    }

    return (
        <>
            <div className="product">
                <div className='product-img'>
                    <img src={props.product.img} alt='' />
                </div>
                <div className='product-details'>
                    <div className='product-title'>{props.product.title}</div>
                    <div className='product-price'>{props.product.price} HUF</div>
                    <button className="cart-button" onClick={addItemToCart}>Kosárba</button>
                    {isAddedToCart && <div className='added-success'>A termék bekerült a kosárba!</div>}
                    <ToastContainer />
                </div>
            </div>
        </>
    )
}