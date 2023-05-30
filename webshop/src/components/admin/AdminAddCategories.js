import categoryService from '../../service/categoryService';
import { useState } from 'react';
import '../../styles/adminaddcategory.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AdminAddCategories() {

    const [categoryName, setCategoryName] = useState("");

    function handleChange(e) {
        setCategoryName(e.target.value)
    }

    function handleClick(e) {
        e.preventDefault()
        if (!categoryName) {
            toast.error("Kötelező megadni kategóriát!", {
                position: toast.POSITION.TOP_CENTER
            });
        } else {
            categoryService.createCategory(categoryName);
            toast.success("Sikeres kategória felvitel!", {
                position: toast.POSITION.TOP_CENTER
            });
        }
    }

    return (
        <>
            <h2 className="adminaddcategories-h2">Termékkategória hozzáadása</h2>
            <div className="add-categories">
                <div className="add-categories-box">
                    <form>
                        <label htmlFor="name">Kategória név:</label>
                        <input
                            type="text"
                            name="name"
                            value={categoryName.name}
                            onChange={(e) => handleChange(e)}
                        />
                        <br></br>
                        <button className="cat-button" onClick={(e) => handleClick(e)} type="submit">Kategória létrehozása</button>
                    </form>

                </div>
            </div>
        </>

    )
}