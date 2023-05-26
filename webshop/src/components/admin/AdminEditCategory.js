import categoryService from '../../service/categoryService';
import { useNavigate, useParams } from "react-router-dom";
import '../../styles/admin.css';
import CategoryForm from "./CategoryForm";
import { setCategoryID } from "../../service/categoryService";
import { useEffect, useState } from "react";

export default function AdminEditCategory() {

    const { id } = useParams()
    const [category, setCategory] = useState({});
    const [editedCategory, setEditedCategory] = useState();

    useEffect(() => {
        categoryService.getCategory(id).then(data => setCategory(data))
        
      }, [id])
    
      const navigate = useNavigate()

      function clickUpdateProduct(e) {
        e.preventDefault()
        // console.log(formData);
        // categoryService.update(id, formData)
        .then(() => navigate('/admin/kategoriak'))
    }
    
      return (
        <div>
          <CategoryForm category={category} id={id} />
          <button onClick={(e) => clickUpdateProduct(e)} className ="button">Mentés</button>
          <button onClick={() => navigate('/admin/kategoriak')} className="button">Mégsem</button>
        </div>
      );
    }