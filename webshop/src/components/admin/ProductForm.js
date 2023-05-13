import { useEffect, useState } from "react";
import productService, { getProducts } from "../../service/productService";
import { useNavigate } from "react-router";
import { getProduct } from "../../service/productService";


export default function ProductForm({id, product}) {
   
    const formProduct = product? product : { id: null, title: "", price: null};
  


    const [formData, setFormData] = useState({
        id: product.id,
        title: product.title,
        price: product.price
    });

    const navigate = useNavigate()

    function clickUpdateProduct(e) {
        e.preventDefault()
        console.log(formData);
        productService.update(id, formData)
        .then(() => navigate('/admin/termekek'))
    }

    return (
        <>
            <p>Termék azonosítója: {id} </p>
            <p>Termék neve: {product.title} </p>
            <p>Termék ára: {product.price} </p>
            <p>Termék új neve: <input type="text" onChange={(e) => setFormData({...formData,title:e.target.value})} value={formData.title} placeholder='Termék új neve' /></p>
            <p>Termék új ára: <input type="text" onChange={(e) => setFormData({...formData,price:e.target.value})} value={formData.price} placeholder='Termék új ára' /></p>
            <button onClick={(e) => clickUpdateProduct(e)} className ="button">Mentés</button>
        </>
    )
}



