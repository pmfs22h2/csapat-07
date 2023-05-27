import { useEffect, useState } from "react";
import categoryService from "../../service/categoryService";
import AdminAddProduct from "../../pages/admin/AdminAddProduct";
import '../../styles/adminsortsearch.css';



export default function CategorySearch(props) {

    // const [categoryName, setCategoryName] = useState("");
    const [categoryData, setCategoryData] = useState({});


    // const product = props.product ? props.product : { name: "", price: "", title: "" };
    // const [selectCategory, setSelectCategory] = useState("");

    // function updateCategory(e) {
    //     setSelectCategory(e.target.value)
    // }
    // console.log(selectCategory);

    useEffect(() => {
        categoryService.readCategories()
            .then(json => {
                setCategoryData(Object.values(json))
    })
    }, []);

    // useEffect(() => {
    //     if(selectCategory==""){
    //         props.setSortedItems(props.products)
    //         return
    //     }
    //    const selectedProducts = props.products.filter(p=>(p.categoryID==selectCategory));
    //    props.setSortedItems(selectedProducts);
    // },[selectCategory])


    return (
        <div>
            <div className="select-option">
            <select value={props.selectCategory} id="categories-list" onChange={(e) => props.update(e)} >
                <option value="">Válassz egy kategóriát!</option>
                {Object.values(categoryData).map(cat => <option value={cat.id}>{cat.name}</option>)}
                <option value="besorolatlan">besorolatlan</option>
            </select>
                </div>
        </div>
       
    )
}