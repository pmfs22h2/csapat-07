import Product from './Product'
import '../../styles/products.css';

export default function ProductList({ searchValue , displayedProducts}) {


    return (
        <>
            {searchValue !== "" ? <h1>Találatok:</h1> : <></>}
            <div className="all-products">
                {displayedProducts.length==0 && "nincs ilyen termék"}
                {/* {products.map(product => product.title.includes(searchValue) ? <Product key={crypto.randomUUID()} product={product} /> : <></>)} */}
                {displayedProducts.map(p => <Product key={crypto.randomUUID()} product={p} />)}
            </div>
        </>
    )
}