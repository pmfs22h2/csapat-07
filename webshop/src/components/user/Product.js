import '../../styles/products.css';
import cartService from '../../service/cartService';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';

export default function Products(props) {

    const { cart, setCart } = useContext(CartContext);

    const addToCart = () => {
        const product = { [props.product.id]: 1 }
        cartService.create(product, "dVkOeNm798RFb9re9XCIpuYVk2T2")
        console.log(props.product)
    }

    return (
        <>
            <div className="product" style={{ backgroundImage: `url(https://images.pexels.com/photos/4938502/pexels-photo-4938502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)` }}>
                <h4>Termék neve:</h4>
                <p>{props.product.title}</p>
                <p>Ár: {props.product.price}</p>
                <button className="cart-button" onClick={addToCart}>Kosárba</button>
            </div>
        </>
    )
}