export default function Products(props) {
    return (
        <div>
            <h2>Termék neve: {props.product.title}</h2>
            <p>Ár: {props.product.price}</p>
        </div>
    )
}