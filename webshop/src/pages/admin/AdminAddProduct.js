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
      	if (validateTitle() && validatePrice())
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

    function validateTitle() {
      	const title = formData.title;
        if (title.match(/^\d+$/)) 
        {
          alert("Nem tartalmazhat csak számokat!");
          return false;
        }
        
      	if (title === "") {
            alert("Nem lehet üres!");
      		return false;
        }
        if (title.length < 2) {
          alert("Minimum két karakter hosszúnak lennie kell!") 
          return false;
        }

      	return true;
    }

    function validatePrice() {
      const price = formData.price;
        if (isNaN(price)) {
          alert("Csak számokat tartalmazhat!");
        	return false;
        }
        if (price === "") {
          alert("Nem lehet üres!");
          return false;
        }
        
      
      	return true;
    }

    return (
        <>
            <p>Terméknév: <input type="text" value={formData.title} onChange={updateTitle} /></p>
            <p>Ár: <input type="text" value={formData.price} onChange={updatePrice} /></p>
            <button onClick={onSubmit}>Termék hozzáadása</button>
        </>
    )

}