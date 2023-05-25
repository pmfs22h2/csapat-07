import '../../styles/products.css';

export default function Products(props) {
    return (
        <>
            <div className="product" style={{backgroundImage: `url(https://images.pexels.com/photos/4938502/pexels-photo-4938502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`}}>
                <h4>Termék neve:</h4>
                <p>{props.product.title}</p>
                <p>Ár: {props.product.price}</p>
            </div>
        </>
    )
}