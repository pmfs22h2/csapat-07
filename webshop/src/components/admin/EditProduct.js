import productService from "../../service/productService";
import { useNavigate, useParams } from "react-router-dom";
import '../../styles/admin.css';
import ProductForm from "./ProductForm";
import { getProduct } from "../../service/productService";
import { useEffect, useState } from "react";


const EditProduct = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(getProduct(id));
  }, [])

  const navigate = useNavigate()

  function productEdit(id) {
    {
      productService
        .update(id, (json) => {
          navigate('/admin/termekek', 'PUT', json);
        })
    }
  }

  return (
    <div>
      <ProductForm product={product} id={id} />
      <button onClick={() => productEdit(id)} className="button">Mentés</button>
      <button onClick={() => navigate('/admin/termekek')} className="button">Mégsem</button>
    </div>
  );
}

export default EditProduct;