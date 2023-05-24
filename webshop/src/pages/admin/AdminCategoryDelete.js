import categoryService from "../../service/categoryService";
import { useNavigate, useParams } from "react-router-dom";

const AdminCategoryDelete = () => {

    const { kategoriaId } = useParams()
    console.log(kategoriaId);
    const navigate = useNavigate()
    function deleteCat(id) {
        categoryService.deleteCategory(id)
        .then(() => navigate("/admin/kategoriak"))
    }

    return (
        <div className="App">
            <button onClick={() => deleteCat(kategoriaId)}>Törlés</button>
            <p>Biztosan törölni szeretnéd?</p>
            <button onClick={() => navigate('/admin/kategoriak')} className="button">Mégsem</button>
        </div>
    );
}

export default AdminCategoryDelete;