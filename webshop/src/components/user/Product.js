import '../../styles/products.css';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { CartContext } from '../../context/cartContext';
import getCartList from '../../utils/getCartList';
import cartService from '../../service/cartService';

export default function Products(props) {

    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const { userData } = useContext(AuthContext)
    const { setCart } = useContext(CartContext);

    function addItemToCart() {
        if (userData === null) {
            alert("Nem vagy bejelentkezve!");
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
                    {/* Innen hiányzik még a feltételes megjelenítés, ha nincs bejelentkezve és úgy akar a kosárba tenni! */}
                    {isAddedToCart && <div className='added-success'>A termék bekerült a kosárba!</div>}
                </div>
            </div>
        </>
    )
}