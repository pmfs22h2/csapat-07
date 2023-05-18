import { Link } from 'react-router-dom';
import Cart from '../../components/user/Cart';
import cartService from '../../service/cartService';

const Cartpage = () => {
  return (
    <div>
      <Cart/>
    </div>
  )
}

export default Cartpage;