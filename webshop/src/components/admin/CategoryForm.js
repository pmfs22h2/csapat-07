import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import categoryService from "../../service/categoryService";

export default function CategoryForm({ id, category }) {

    const formCategory = category ? category : { id: null, name: "" };

    useEffect(() => {
        setFormData(() => formCategory)
    }, [category])

    const [formData, setFormData] = useState(formCategory)

    return (
        <>
            <p>Kategória azonosítója: {id} </p>
            <p>Kategória neve: {category.name} </p>
            <p>Kategória új neve: <input type="text" onChange={(e) => setFormData({ ...formData, name: e.target.value })} value={formData.name} placeholder='Kategória új neve' /></p>
        </>
    )
}
