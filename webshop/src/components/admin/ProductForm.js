import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import productService from "../../service/productService";
import readCategories from "../../service/categoryService";
import categoryService from "../../service/categoryService";
import '../../styles/admineditproduct.css';
import '../../styles/adminsortsearch.css';

export default function ProductForm({ id, product }) {

    const formProduct = product ? product : { id: null, title: "", price: null, categoryID: "" };
    const [categoryData, setCategoryData] = useState({});

    useEffect(() => {
        categoryService.readCategories()
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

    function findCategoryName(product) {
        let result = "notfound";
        Object.values(categoryData).forEach((asd) => {
            if (asd.id === product.categoryID) {
                result = asd.name;
            }
        })
        return result;
    }

    return (
        <>
            <div className="admin-edit-product">
                <div className="original-data">
                    <p>Termék azonosítója: {id} </p>
                    {/* <p>Termék neve: {product.title} </p>
                    <p>Termék ára: {product.price} </p> */}
                    <p>Termék kategóriája: {findCategoryName(product)} </p>
                    <p>Termék új neve: <input type="text" onChange={(e) => setFormData({ ...formData, title: e.target.value })} value={formData.title} placeholder='Termék új neve' /></p>
                    <p>Termék új ára: <input type="text" onChange={(e) => setFormData({ ...formData, price: e.target.value })} value={formData.price} placeholder='Termék új ára' /></p>
    
                    <div className="admin-cat-new">Termék új kategóriája:
                    <div class="select-option">
                        <select value={formData.categoryID} id="categories-list" onChange={(e) => updateCategory(e)} >   
                            <option value="">Válassz kategóriát!</option>
                            {Object.values(categoryData).map(cat => <option value={cat.id}>{cat.name}</option>)}
                        </select >
                        </div>
                    </div>
                    <div className="admin-buttons">
                    <button className="admin-save-button" onClick={(e) => clickUpdateProduct(e)}>Mentés</button>
                    <button className="admin-cancel-button" onClick={() => navigate('/admin/termekek')}>Mégsem</button>
                    </div>
                </div>
            </div>
        </>
    )
}