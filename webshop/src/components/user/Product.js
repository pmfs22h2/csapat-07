import '../../styles/products.css';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { CartContext } from '../../context/cartContext';
import getCartList from '../../utils/getCartList';
import cartService from '../../service/cartService';

export default function Products(props) {

    const { userData } = useContext(AuthContext)
    const { setCart } = useContext(CartContext);

    function addToCartClick() {

        let addToCartProduct;

        cartService.getCart(userData.uid)   // lekéri firebase-ről a cart-t 
        .then(cartlist => {
            if(!cartlist || !(props.product.id in cartlist)) {   // ha a kosár üres vagy a termék nincs benne a kosárban..
                addToCartProduct = {[props.product.id] : 1}
            } else if(props.product.id in cartlist)  {         // ha a termék benne van a kosárban, megnöveli a mennyiséget eggyel
                addToCartProduct = {[props.product.id] : cartlist[props.product.id] + 1}                
            }
        })
        .then(() => cartService.changeItem(addToCartProduct, userData.uid))     // módosítja a firebase kosár tartalmát  
        .then(() => cartService.getCart(userData.uid))                          // lekéri a módosított kosarat
        .then((cartlist) => setCart(getCartList(cartlist)))         // átadja a módosított kosár tartalmát a kosár context-nek
            
    }

    return (
        <>
            <div className="product" style={{ backgroundImage: `url(https://images.pexels.com/photos/4938502/pexels-photo-4938502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)` }}>
                <h4>Termék neve:</h4>
                <p>{props.product.title}</p>
                <p>Ár: {props.product.price}</p>
                {userData ? <button className="cart-button" onClick={addToCartClick}>Kosárba</button> : <></>}
            </div>
        </>
    )
}