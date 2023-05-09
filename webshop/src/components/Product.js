import '../styles/products.css';

export default function Products(props) {
    return (
        <div className="product-card">
            <div>
                <h4>Termék neve: {props.product.title}</h4>
                <p>Ár: {props.product.price}</p>
            </div>
        </div>
    )
}