import AdminProduct from "./AdminProduct"
import '../../styles/admintable.css';
import SearchComponent from "../../components/user/SearchComponent";

export default function AdminProductList(props) {
    return (
        <>
        <div className="admin-background">
        <table className= "admintable">
            <thead>
            <tr>
                <th>Terméknév</th>
                <th>Termék ár</th>
                <th>Termék kategória</th>
                <th></th>
            </tr>
            </thead>
           
        <tbody>
        {props.products?.map(product => <AdminProduct key={crypto.randomUUID()} product={product} category={props.categories[product.categoryID]}/> )}
        
        </tbody>
        </table>
        </div>
        </>
    )
}