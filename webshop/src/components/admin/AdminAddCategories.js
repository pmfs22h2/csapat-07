import categoryService from '../../service/categoryService';
import { useState } from 'react';
import '../../styles/adminaddcategory.css';


export default function AdminAddCategories() {

    const [categoryName, setCategoryName] = useState("");

    function handleChange(e) {
       setCategoryName(e.target.value)
    }

    function handleClick(e) {
        e.preventDefault()
        categoryService.createCategory(categoryName)
    }
   
    return (
        <>
        <div className="add-categories">
        <form>
        <h2 className= "admin-h2">Termékkategória hozzáadása</h2>
            <label htmlFor="name">Kategória név:</label>
            <input 
                type="text" 
                name="name" 
                value={categoryName.name} 
                onChange={(e) => handleChange(e)} 
            />
            <br></br>
            <button className="cat-button" onClick={(e) => handleClick(e)} type ="submit">Kategória létrehozása</button>
        </form>
        </div>
        </>
        
    )
}