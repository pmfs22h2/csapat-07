import productService from "../../service/productService";
import {useNavigate, useParams} from "react-router-dom";
import '../../styles/admin.css';
import ProductForm from "./ProductForm";
import { getProducts } from "../../service/productService";


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

  function getProductsbyID() {
    productService.getProducts()
    .then(productID => console.log(productID))
  }
/*
  const pathParameters = useParams();
    const id = pathParameters.productId;
    const products = getProducts();
    const edited = products.find(p => p.id == id);

    */

      return (
         <div className="App">
          <ProductForm product={getProducts}  />
          <button onClick={()=>productEdit(id)} className="button">Mentés</button>
          <button onClick={() => navigate('/admin/termekek')} className="button">Mégsem</button>
         </div>
       );
      }

     
  
 
     export default EditProduct;

     


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