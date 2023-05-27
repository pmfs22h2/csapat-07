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
            <thead>
                    <tr>
                        <th>Kategória neve</th>
                        <th>Kategória #</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
            {Object.values(category).map(cat => (
                <tr>
                    <td>{cat.name}</td>
                    <td>{cat.id}</td>
                    <button className="admin-button"><Link className="admin-link" to={`/admin/kategoriak/${cat.id}/torles`} >Törlés</Link></button>
                    <button className="admin-button"><Link className="admin-link" to={`/admin/kategoriak/${cat.id}/szerkesztes`} >Szerkesztés</Link></button>
                </tr>
            ))}
            </tbody>
        </table>
    )

}