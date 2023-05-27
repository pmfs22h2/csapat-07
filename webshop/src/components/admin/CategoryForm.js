import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getCategory, updateCategory } from "../../service/categoryService";

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
            <p>Kategória azonosítója: {id} </p>
            <p>Kategória neve: {category.name} </p>
            <p>Kategória új neve: <input type="text" onChange={(e) => setFormData({ ...formData, name: e.target.value })} value={formData.name} placeholder='Kategória új neve' /></p>
        <button onClick={(e) => clickUpdateCategory(e)} className ="button">Mentés</button>
        </>
    )
}
