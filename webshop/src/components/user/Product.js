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
    const { cart, setCart } = useContext(CartContext);

    const addedToCartSuccess = () => {
        toast.success('Sikeresen a kosárba tetted a terméket!', {
            position: toast.POSITION.TOP_CENTER
        });
    }

    function addToCartClick() {

        if (userData === null) {
            toast.error('Jelentkezz be a vásárláshoz!', {
                position: toast.POSITION.BOTTOM_CENTER
            });
            return;
        }

        setIsAddedToCart(true);
        addedToCartSuccess();
        let addToCartProduct;

        cartService.getCart(userData.uid)   // lekéri firebase-ről a cart-t 
            .then(cartlist => {
                if(!cartlist || !(props.product.id in cartlist)) {   // ha a kosár üres vagy a termék nincs benne a kosárban..
                    addToCartProduct = {[props.product.id] : 1}
                } else if(props.product.id in cartlist)  {         // ha a termék benne van a kosárban, megnöveli a mennyiséget eggyel
                    addToCartProduct = {[props.product.id] : cartlist[props.product.id] + 1}                
                }
            })
            .then(() => cartService.changeItem(addToCartProduct, userData.uid)    // módosítja a firebase kosár tartalmát  
            .then(() => cartService.getCart(userData.uid))                          // lekéri a módosított kosarat
            .then((cartlist) => {
                const modifiedcart = getCartList(cartlist).then(modifiedcart => setCart(modifiedcart));
            })       )                // átadja a módosított kosár tartalmát a kosár context-nek
            
    }

    console.log(cart, "addtocart");
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
                </div>
                <div>
                    <ToastContainer />
                </div>
            </div>
        </>
    )
}