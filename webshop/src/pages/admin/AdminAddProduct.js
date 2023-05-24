import productService from "../../../src/service/productService";
import API_URL from "../../../src/service/productService";
import { useEffect, useState } from "react";
import '../../styles/adminAddProduct.css';
import { fileUpload } from "../../utils/fileUpload";
import readCategories from "../../service/category-service";

export default function AdminAddProduct(props) {

    const product = props.product ? props.product : { name: "", price: "", title: "" };

    const [formData, setFormData] = useState({
        title: product.title,
        price: product.price,
        img: "",
        categoryID: ""
    });
    const [file, setFile] = useState(null);
    const [uploadedUrl, setUploadedUrl] = useState(null);

    const [previewImg, setPreviewImg] = useState("");

    const [categoryData, setCategoryData] = useState({});
    const [selectValue, setSelectValue] = useState("categories");

    useEffect(() => {
        readCategories()
            .then(json => setCategoryData(json))
    }, []);
    // console.log(categoryData)

    function handleImgUpload(e) {
        setFormData({
            ...formData,
            img: e.target.files[0].name
        })
        setFile(e.target.files[0])
        previewImage(e.target.files[0])
    }

    function updateTitle(e) {
        setFormData({
            ...formData,
            title: e.target.value
        })
    }

    function updatePrice(e) {
        setFormData({
            ...formData,
            price: e.target.value
        })
    }

    function updateCategory(e) {
        setFormData({
            ...formData,
            categoryID: e.target.value
        })
    }

    function onSubmit(event) {
        event.preventDefault();
        if (validateTitle() && validatePrice())
        // 1. létrehozza a terméket firebase-n (url nélkül)
        productService.create(formData.title, formData.price, formData.categoryID)
            .then(data => {
                // 2. feltölti a képet storage-be, feltöltéskor visszaadja a kép azonosítóját ('url'), beállítja useState-nek
                // 3. feltölti a visszakapott azonosítót az 1.lépésben postolt termékhez (data.id -> post által létrehozott id)
                // (harmadik lépés a fileUpload függvényen belül)
                fileUpload(file, setUploadedUrl, data.id)
            })
    

        }


    function validateTitle() {
      	const title = formData.title;
        if (title.match(/^\d+$/)) 
        {
          alert("A 'Terméknév' nem tartalmazhat csak számokat!");
          return false;
        }
        
      	if (title === "") {
            alert("A 'Terméknév' nem lehet üres!");
      		return false;
        }
        if (title.length < 2) {
          alert("A 'Terméknév' minimum két karakter hosszú kell, hogy legyen!") 
          return false;
        }

      	return true;
    }

    function validatePrice() {
      const price = formData.price;
        if (isNaN(price)) {
          alert("Az 'Ár' csak számokat tartalmazhat!");
        	return false;
        }
        if (price === "") {
          alert("Az 'Ár' nem lehet üres!");
          return false;
        }
    }

    // képfeltöltéskor egyből megjeleníti a képet, még a végleges feltöltés előtt
    function previewImage(filetest) {
        const fileReader = new FileReader()
        fileReader.onload = () => {
            setPreviewImg(fileReader.result)
        }
        if (filetest) {
            fileReader.readAsDataURL(filetest);
        }
    }

    return (
        <div className="add-product">
            <h2>Új termék hozzáadása</h2>
            <label htmlFor="title">Terméknév: </label>
            <input
                type="text"
                name="title"
                value={formData.title}
                onChange={(e) => updateTitle(e)}
            />
            <br />
            <label htmlFor="price">Ár: </label>
            <input
                type="text"
                name="price"
                value={formData.price}
                onChange={(e) => updatePrice(e)}
            />
            <br />
            <label>Kategória kiválasztása: </label>
            <select value={formData.categoryID} id="categories-list" onChange={(e) => updateCategory(e)} >
                <option value="">Válassz egy kategóriát!</option>
                {Object.values(categoryData).map(cat => <option value={cat.id}>{cat.name}</option>)}
            </select>

            <br />
            <label htmlFor="img">Kép feltöltése a termékhez: </label>
            <input
                type="file"
                name="img"
                onChange={(e) => handleImgUpload(e)}
            />

            <div className="uploaded-img">
                {file &&
                    <><p>termék kép: </p><img src={previewImg} alt="" style={{ width: "300px" }} /></>}
            </div>
            <br />
            <button onClick={onSubmit}>Termék hozzáadása</button>
        </div>
    )
}