import { useEffect, useState } from "react";
import categoryService from "../../service/categoryService";
import AdminAddProduct from "../../pages/admin/AdminAddProduct";



export default function CategorySearch() {

    const [categoryName, setCategoryName] = useState("");
    const [categoryData, setCategoryData] = useState({});

    const [selectedCategory, setSelectedCategory] = useState();


    useEffect(() => {
        categoryService.readCategories()
            .then(json => {
                setCategoryData(Object.values(json))
    })
    }, []);

    return (
        <div>
            <AdminAddProduct/>
            <div className="sort-menu">
            <select>
                <option value="">Válassz egy kategóriát!</option>
                {Object.values(categoryData).map(cat => <option value={cat.id}>{cat.name}</option>)}
                    <option value="">Összes kategória</option>
                    <option value="">Kategória neve</option>
            </select>
                </div>
        </div>
    )
}

