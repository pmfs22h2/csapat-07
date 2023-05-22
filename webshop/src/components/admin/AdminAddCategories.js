import categoryService from '../../service/categoryService';
import { useState } from 'react';


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
        <form>
        <h2>Termékkategória hozzáadása</h2>
            <label htmlFor="name">Kategória név:</label>
            <input 
                type="text" 
                name="name" 
                value={categoryName.name} 
                onChange={(e) => handleChange(e)} 
            />
            <br></br>
            <button onClick={(e) => handleClick(e)} type ="submit">Kategória létrehozása</button>
        </form>
        </>
        
    )
}