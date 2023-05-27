import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getCategory, updateCategory } from "../../service/categoryService";
import '../../styles/categoryform.css';

export default function CategoryForm({ id, category }) {

    const formCategory = category ? category : { id: "ASD", name: "ASD" };
    const navigate = useNavigate()

    useEffect(() => {
        setFormData(() => formCategory)
    }, [category])

    const [formData, setFormData] = useState(formCategory)

  function clickUpdateCategory(e) {
    e.preventDefault()
    console.log(id)
    console.log(formData)
        updateCategory(id, formData)
        .then(() => navigate('/admin/kategoriak'))
  }

    return (
        <>
        <div className="cat-form">
            <div className="cat-form-box">
            <label>Kategória azonosítója: {id} </label>
            <label>Kategória neve: {category.name} </label>
            <label>Kategória új neve: <input
             type="text" 
             onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
             value={formData.name} placeholder='Kategória új neve' /></label>
            <div className="admin-buttons">
        <button className="cat-button-save" onClick={(e) => clickUpdateCategory(e)} >Mentés</button>
        <button className="cat-button-cancel" onClick={() => navigate('/admin/kategoriak')} >Mégsem</button>
        </div>
        </div>
        </div>
        </>
    )
}
