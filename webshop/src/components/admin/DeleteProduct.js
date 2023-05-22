import productService from "../../service/productService";
import {useNavigate, useParams} from "react-router-dom";

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
        <div className="App">
         <button onClick={()=>productDelete(id)}>Delete</button>
         <p>Biztosan törölni szeretnéd?</p>
         <button onClick={() => navigate('/admin/termekek')} className="button">Mégsem</button>
        </div>
      );
    }

    export default DeleteProduct;