import productService from "../../service/productService";
import { useNavigate, useParams } from "react-router-dom";
import '../../styles/admin.css';
import ProductForm from "./ProductForm";
import { getProduct } from "../../service/productService";
import { useEffect, useState } from "react";


const EditProduct = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({});
  const [editedProduct, setEditedProduct] = useState();

  useEffect(() => {
    getProduct(id).then(data => setProduct(data))
    
  }, [id])

  const navigate = useNavigate()

 

  return (
    <div>
      <ProductForm product={product} id={id} />
      <button onClick={() => navigate('/admin/termekek')} className="button">Mégsem</button>
    </div>
  );
}

export default EditProduct;