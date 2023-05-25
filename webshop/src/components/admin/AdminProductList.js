import AdminProduct from "./AdminProduct"
import '../../styles/admintable.css';
import SearchComponent from "../../components/user/SearchComponent";

export default function AdminProductList(props) {
    return (
        <>
        <table className= "admintable">
            <thead>
            <tr>
                <th>Terméknév</th>
                <th>Termék ár</th>
            </tr>
            </thead>
           
        <tbody>
        {props.products?.map(product => <AdminProduct key={crypto.randomUUID()} product={product} /> )}
        
        </tbody>
        </table>
        </>
    )
}