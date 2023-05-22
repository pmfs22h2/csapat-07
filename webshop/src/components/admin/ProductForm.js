import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import productService from "../../service/productService";

export default function ProductForm({ id, product }) {

    const formProduct = product ? product : { id: null, title: "", price: null, category: "" };

    useEffect(() => {
        setFormData(() => formProduct)
    }, [product])

    const [formData, setFormData] = useState(formProduct);
    const [selectValue, setSelectValue] = useState("order");

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
            <p>Termék kategóriája: {product.category} </p>
            <p>Termék új neve: <input type="text" onChange={(e) => setFormData({ ...formData, title: e.target.value })} value={formData.title} placeholder='Termék új neve' /></p>
            <p>Termék új ára: <input type="text" onChange={(e) => setFormData({ ...formData, price: e.target.value })} value={formData.price} placeholder='Termék új ára' /></p>
            <p>Termék új kategóriája: 
            <select value={selectValue} id="ordered-list" onChange={(e) => setFormData({ ...formData, category: e.target.value })} >
                {getCategories(id)}
                <option value="order">Kategóriák</option>
                <option value="name-asc">Név szerint növekvő</option>
                <option value="name-desc">Név szerint csökkenő</option>
                <option value="price-asc">Ár szerint növekvő</option>
                <option value="price-desc">Ár szerint csökkenő</option>
            </select >
            </p>
            <button onClick={(e) => clickUpdateProduct(e)} className="button">Mentés</button>
        </>
    )
}



