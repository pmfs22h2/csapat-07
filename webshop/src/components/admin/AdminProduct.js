import { Link } from "react-router-dom"


export default function AdminProduct(props) {
    return (
        <tr>
            <td>{props.product.title}</td>
            <td>{props.product.price}</td>
            <button><Link to={`/termekek/${props.product.id}/torles`}>Delete</Link></button>
        </tr>
    )
}



