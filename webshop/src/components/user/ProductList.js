import Product from './Product'
import '../../styles/products.css';

export default function ProductList({ products, searchValue }) {
    return (
        <>
            {searchValue !== "" ? <h1>Találatok:</h1> : <></>}
            <div className="all-products">
                {products.map(product => product.title.includes(searchValue) ? <Product key={crypto.randomUUID()} product={product} /> : <></>)}
            </div>
        </>
    )
}