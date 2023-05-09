import Product from './Product'
import '../styles/products.css';

export default function ProductList(props) {
    return (
        <div className="all-products">
            {props.products.map(product => <Product key={crypto.randomUUID()} product={product} /> )}
        </div>
    )
}