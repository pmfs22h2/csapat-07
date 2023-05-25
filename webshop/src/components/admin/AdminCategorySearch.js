import { useEffect, useState } from "react";
import categoryService from "../../service/categoryService";
import AdminAddProduct from "../../pages/admin/AdminAddProduct";



export default function CategorySearch(props) {

    const [categoryName, setCategoryName] = useState("");
    const [categoryData, setCategoryData] = useState({});


    // const product = props.product ? props.product : { name: "", price: "", title: "" };
    const [selectCategory, setSelectCategory] = useState("");

    function updateCategory(e) {
        setSelectCategory(e.target.value)
    }
    console.log(selectCategory);

    useEffect(() => {
        categoryService.readCategories()
            .then(json => {
                setCategoryData(Object.values(json))
    })
    }, []);

    useEffect(() => {
       const selectedProducts = props.products.filter(p=>(p.categoryID==selectCategory));
       props.setSortedItems(selectedProducts);
    },[selectCategory])


    return (
        <div>
            <div className="sort-menu">
            <select value={selectCategory} id="categories-list" onChange={(e) => updateCategory(e)} >
                <option value="">Válassz egy kategóriát!</option>
                {Object.values(categoryData).map(cat => <option value={cat.id}>{cat.name}</option>)}
                <option value="besorolatlan">besorolatlan</option>
            </select>
                </div>
        </div>
    )
}