import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import productService from "../../service/productService";
import '../../styles/admineditproduct.css';

export default function ProductForm({id, product}) {

    const formProduct = product ? product : { id: null, title: "", price: null};

    useEffect(() => {
        setFormData(() =>formProduct)
    }, [product])   
    
    const [formData, setFormData] = useState(formProduct)

    const navigate = useNavigate()

    function clickUpdateProduct(e) {
        e.preventDefault()
        console.log(formData);
        productService.update(id, formData)
        .then(() => navigate('/admin/termekek'))
    }

    return (
        <>
        <div className="admin-edit-product">
            <div className="original-data">
            <p>Termék azonosítója: {id} </p>
            <p>Termék neve: {product.title} </p>
            <p>Termék ára: {product.price} </p>
            </div>
            <div className="new-input">
            <p>Termék új neve: <input type="text" onChange={(e) => setFormData({...formData,title:e.target.value})} value={formData.title} placeholder='Termék új neve' /></p>
            <p>Termék új ára: <input type="text" onChange={(e) => setFormData({...formData,price:e.target.value})} value={formData.price} placeholder='Termék új ára' /></p>
            </div>
            <button className="admin-save-button" onClick={(e) => clickUpdateProduct(e)}>Mentés</button>
            <button className="admin-cancel-button" onClick={() => navigate('/admin/termekek')}>Mégsem</button>
            </div>
        </>
    )
}



