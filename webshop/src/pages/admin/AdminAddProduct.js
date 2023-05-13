import productService from "../../../src/service/productService";
import API_URL from "../../../src/service/productService";
import { useState } from "react";

export default function AdminAddProduct(props) {

    const product = props.product ? props.product : { name: "", price: null };

    const [formData, setFormData] = useState({
        title: product.title,
        price: product.price
    });

    function onSubmit(event) {
        event.preventDefault();
        {
            productService.create(formData)
            return fetch(`${ API_URL }products.json`)
                .then(res => console.log(res))
        }
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
        <>
            <p>Terméknév: <input type="text" value={formData.title} onChange={updateTitle} /></p>
            <p>Ár: <input type="text" value={formData.price} onChange={updatePrice} /></p>
            <button onClick={onSubmit}>Termék hozzáadása</button>
        </>
    )

}