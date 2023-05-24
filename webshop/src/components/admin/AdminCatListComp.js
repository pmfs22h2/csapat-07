import categoryService from '../../service/categoryService';
import { useEffect, useState } from 'react';
import '../../styles/adminaddcategory.css';
import { Link } from 'react-router-dom';
import '../../styles/admintable.css';

export default function AdminCatListComp() {

    const [category, setCategory] = useState("");

    useEffect(() => {
        categoryService.readCategories()
            .then(cat => setCategory(cat))
    }, [])
    console.log(category)

    return (
        <table className='admintable'>
            {Object.values(category).map(cat => (
                <tr>
                    <td>{cat.name}</td>
                    <td>{cat.id}</td>
                    <button className="admin-button"><Link className="admin-link" to={`/admin/kategoriak/${cat.id}/torles`} >Törlés</Link></button>
                    <button className="admin-button"><Link className="admin-link" to={`/admin/kategoriak/${cat.id}/szerkesztes`} >Szerkesztés</Link></button>
                </tr>
            ))}
        </table>
    )



    // <>
    // <div className="add-categories">
    // <form>
    // <h2 className= "admin-h2">Termékkategória hozzáadása</h2>
    //     <label htmlFor="name">Kategória név:</label>
    //     <input 
    //         type="text" 
    //         name="name" 
    //         value={categoryName.name} 
    //         onChange={(e) => handleChange(e)} 
    //     />
    //     <br></br>
    //     <button className="cat-button" onClick={(e) => handleClick(e)} type ="submit">Kategória létrehozása</button>
    // </form>
    // </div>
    // </>


}