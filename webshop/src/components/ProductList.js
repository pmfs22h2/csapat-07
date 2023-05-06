import Product from './Product'

export default function ProductList(props) {
    return (
        <>
            {props.products.map(product => <Product product={product} />)}
        </>
    )
}