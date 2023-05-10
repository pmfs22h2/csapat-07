import productService from "../../service/productService";
import {useNavigate, useParams} from "react-router-dom";
import '../../styles/admin.css';

const EditProduct = () => {
    const {id}=useParams()
    console.log(id);
    const navigate = useNavigate()
     function productEdit(id) {
       {productService
           .update(id, (json) => {
            navigate('/admin/termekek','PUT', json);
           })}
     }
     
/*
     const EditProduct = () => {
        const {id}=useParams()
        console.log(id);
        const navigate = useNavigate()
        const productEdit = {
          name: 'Termek UJ neve ',
          description: 'Termek UJ leiras',
          price: ''
        }
        productService
        .update(id)
        .then(json => console.log('UPDATE',json))
      
   */  
      
 
      return (
         <div className="App">
          <p>Szeretnéd menteni?</p>
          <button onClick={()=>productEdit(id)} className="button">Mentés</button>
          <button onClick={() => navigate('/admin/termekek')} className="button">Mégsem</button>
         </div>
       );
      }
 
     export default EditProduct;