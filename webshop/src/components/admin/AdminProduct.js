import { Link } from "react-router-dom"
import '../../styles/admintable.css';

export default function AdminProduct(props) {
    return (
        <tr>
            <td>{props.product.title}</td>
            <td>{props.product.price}</td>
            <button className ="admin-button"><Link className="admin-link" to={`/termekek/${props.product.id}/torles`} >Törlés</Link></button>
            <button className="admin-button"><Link className="admin-link" to={`/admin/termekek/${props.product.id}/modositas`} >Szerkesztes</Link></button>
        </tr>
    )
}