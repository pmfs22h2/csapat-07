import productService from "../../../src/service/productService";
import API_URL from "../../../src/service/productService";
import { useState } from "react";
import UploadProdImg from "../../components/admin/UploadProdImg";
import '../../styles/adminAddProduct.css';

export default function AdminAddProduct(props) {

    const product = props.product ? props.product : { name: "", price: null };

    const [formData, setFormData] = useState({
        title: product.title,
        price: product.price
    });
    const [imgURL, setImgURL] = useState(null);

    function handleImgUpload(url) {
        setImgURL(url);
    }

    function onSubmit(event) {
        event.preventDefault();
        const newProduct = {
            title: formData.title,
            price: formData.price,
            img: imgURL
        }
        // {
        productService.create(newProduct)
            .then(() => {
                return fetch(`${API_URL}products.json`)
                    .then(res => console.log(res))
            });

        // }
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

    // function validateTitle(e) {
    //     if (/^\d+$/(formData.price)) alert("Nem tartalmazhat csak számokat!");
    //     else if (formData.price === "") alert("Nem lehet üres!");
    //     else if (formData.price.length < 2) alert("Minimum két karakter hosszúnak lennie kell!")
    //     else {
    //         updateTitle();
    //     }
    // }

    // function validatePrice(e) {
    //     if (isNaN(formData.price)) alert("Csak számokat tartalmazhat!");
    //     else if (formData.price === "") alert("Nem lehet üres!");
    //     else {
    //         updatePrice();
    //     }
    // }

    return (
        <div className="add-product">
            <h2>Új termék hozzáadása</h2>
            <p>Terméknév: <input type="text" value={formData.title} onChange={updateTitle} /></p>
            <p>Ár: <input type="text" value={formData.price} onChange={updatePrice} /></p>
            <br />
            <UploadProdImg imageUpload={handleImgUpload} />
            <br />
            <button onClick={onSubmit}>Termék hozzáadása</button>
        </div>
    )

}