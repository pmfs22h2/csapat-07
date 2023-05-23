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

    // function addItemToCart() {
    //     cartService.addToCart(props.product.id, userData.uid);
    //     setIsAddedToCart(true);
    // }
    
    function addToCartClick() {
        
        if (userData === null) {
            alert("Nem vagy bejelentkezve!");
            return;
        }

        setIsAddedToCart(true);
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
            <div className="product">
                <div className='product-img'>
                    <img src={props.product.img} alt='' />
                </div>
                <div className='product-details'>
                    <div className='product-title'>{props.product.title}</div>
                    <div className='product-price'>{props.product.price} HUF</div>
                    <button className="cart-button" onClick={addToCartClick}>Kosárba</button>
                    {/* Innen hiányzik még a feltételes megjelenítés, ha nincs bejelentkezve és úgy akar a kosárba tenni! */}
                    {isAddedToCart && <div className='added-success'>A termék bekerült a kosárba!</div>}
                </div>
            </div>
        </>
    )
}