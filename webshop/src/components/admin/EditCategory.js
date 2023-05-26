import { useNavigate, useParams } from "react-router-dom";
import '../../styles/admin.css';
import CategoryForm from "./CategoryForm";
import { getCategory } from "../../service/categoryService";
import { useEffect, useState } from "react";

const EditCategory = () => {

    const { id } = useParams()
    const [category, setCategory] = useState({});

    useEffect(() => {
      getCategory(id).then(data => setCategory(data))
        
      }, [id])
    
      const navigate = useNavigate()
    
      return (
        <div>
          <CategoryForm category={category} id={id} />
          <button onClick={() => navigate('/admin/kategoriak')} className="button">Mégsem</button>
        </div>
      );
    }

    export default EditCategory;