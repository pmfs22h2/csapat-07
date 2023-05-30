import { Link } from "react-router-dom"
import '../../styles/admintable.css';
import '../../styles/admin.css';

export default function AdminProduct(props) {
    // console.log(props)
    return (
        <tr>
            <td>{props.product.title}</td>
            <td>{props.product.price} HUF</td>
            <td>{props.category?.name}</td>
            <button className ="admin-button"><Link className="admin-link" to={`/termekek/${props.product.id}/torles`} >Törlés</Link></button>
            <button className="admin-button"><Link className="admin-link" to={`/admin/termekek/${props.product.id}/modositas`} >Szerkesztés</Link></button>
        </tr>
    )
}