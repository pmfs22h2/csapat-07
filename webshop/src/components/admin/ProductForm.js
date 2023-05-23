import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import productService from "../../service/productService";
import readCategories from "../../service/category-service";

export default function ProductForm({ id, product }) {

    const formProduct = product ? product : { id: null, title: "", price: null, categoryID: "" };
    const [categoryData, setCategoryData] = useState({});

    useEffect(() => {
        readCategories()
            .then(json => setCategoryData(json))
    }, []);
    

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
            .then(() => {
                navigate('/admin/termekek')
            })
    }

    function updateCategory(e) {
        setFormData({
            ...formData,
            categoryID: e.target.value
        })
    }

    return (
        <>
            <p>Termék azonosítója: {id} </p>
            <p>Termék neve: {product.title} </p>
            <p>Termék ára: {product.price} </p>
            <p>Termék kategóriája: {product.categoryID} </p>
            <p>Termék új neve: <input type="text" onChange={(e) => setFormData({ ...formData, title: e.target.value })} value={formData.title} placeholder='Termék új neve' /></p>
            <p>Termék új ára: <input type="text" onChange={(e) => setFormData({ ...formData, price: e.target.value })} value={formData.price} placeholder='Termék új ára' /></p>
            <p>Termék új kategóriája:
                <select  id="categories-list" onChange={(e) => updateCategory(e)} >
                    <option value="">{product.categoryID}</option>
                    {Object.values(categoryData).map(cat => <option value={cat.id}>{cat.name}</option>)}
                </select >
            </p>
            <button onClick={(e) => clickUpdateProduct(e)} className="button">Mentés</button>
        </>
    )
}
