import { useEffect, useState } from "react";
import categoryService from "../../service/categoryService";



export default function CategorySearch() {

    // const [categoryName, setCategoryName] = useState("");
    // const [categoryData, setCategoryData] = useState({});

    // const [selectedCategory, setSelectedCategory] = useState();

    // useEffect(() => {
    //     categoryService.readCategories()
    //         .then(json => {
    //             setCategoryData(Object.values(json))
    // })
    // }, []);
  

    return (
        <div>
            <div className="sort-menu">
                    <select>
                        <option value="Kategória">Kategória szerinti szűrés</option>
                        <option value="">Összes kategória</option>
                        <option value="">Kategória neve</option>
                    </select>
                </div>
        </div>
    )
}

