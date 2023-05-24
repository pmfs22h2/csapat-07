import productService from "../../service/productService";
import {useNavigate, useParams} from "react-router-dom";
import '../../styles/adminsortsearch.css';
import '../../styles/admindelete.css';





 const DeleteProduct = () => {
   const {id}=useParams()
   console.log(id);
   const navigate = useNavigate()
    function productDelete(id) {
      {productService
          .del(id, (json) => {
           navigate('/admin/termekek','DELETE', json);
          })}
    }
    
     

     return (
        <div className="admin-del-btn">
         <p>Biztosan törölni szeretnéd?</p>
         <button className="admin-delete-button"onClick={()=>productDelete(id)}>Törlés</button>
         <button className="admin-cancel-button" onClick={() => navigate('/admin/termekek')}>Mégsem</button>
        </div>
      );
    }

    export default DeleteProduct;