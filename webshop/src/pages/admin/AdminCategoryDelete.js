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
        <div className="admin-del-btn">
          <div className="admin-del-btn-box">
            <p>Biztosan törölni szeretnéd?</p>
            <div className="admin-buttons">
            <button className="admin-cancel-button" onClick={() => navigate('/admin/kategoriak')} >Mégsem</button>
            <button className="admin-delete-button" onClick={() => deleteCat(kategoriaId)}>Törlés</button>
            </div>
        </div>
        </div>
    );
}

export default AdminCategoryDelete;