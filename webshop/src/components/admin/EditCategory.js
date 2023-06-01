import { useNavigate, useParams } from "react-router-dom";
import '../../styles/admin.css';
import CategoryForm from "./CategoryForm";
import { getCategory } from "../../service/categoryService";
import { useEffect, useState } from "react";

const EditCategory = () => {

  const { id } = useParams()
  const [category, setCategory] = useState({});
  const [editedCategory, setEditedCategory] = useState();
  
// const category = {"name": "asd", "id": "123"}
  useEffect(() => {
    getCategory(id).then(data => setCategory(data))
  
  }, [id])

  const navigate = useNavigate()

  return (
      <div>
        <CategoryForm category={category} id={id} />
      </div>
  );
}

export default EditCategory;
