import Product from './Product'

export default function ProductList(props) {
console.log(props.products)
        return (
            <>
                {props.products?.map(product => <Product key={crypto.randomUUID()} product={product} /> )}
            </>
        )
}