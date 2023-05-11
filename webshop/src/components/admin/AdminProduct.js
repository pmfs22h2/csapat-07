import { Link } from "react-router-dom"
import '../../styles/admin.css';


export default function AdminProduct(props) {
    return (
        <tr>
            <td>{props.product.title}</td>
            <td>{props.product.price}</td>
            <button><Link to={`/termekek/${props.product.id}/torles`} className="button">Delete</Link></button>
            <button><Link to={`/admin/termekek/${props.product.id}/modositas`} className="button">Szerkesztes</Link></button>
        </tr>
    )
}



