import { useState } from "react";
import { getProducts } from "../../service/productService";


export default function ProductForm(props) {

    const product = props.product? props.product : { id: null, name: "", price: null};
    
    const [formData, setFormData] = useState({
        id: "",
        name: "",
        price: ""
    });

    return (
        <>
        <p>Termék id: <input type="text" value={formData.id} /></p>
        <p>Termék neve: <input type="text" value={formData.name } placeholder='Termék új neve' /></p>
        <p>Termék ára: <input type="text" value={formData.price} placeholder='Termék új ára' /></p>
        <p><button onClick={buttonClicked}>Mentés</button></p>
        </>
    )


    function updateId(e) {
        setFormData({
            ...formData,
            id: e.target.value
        })
    }

    function updateName(e) {
        setFormData({
            ...formData,
            name: e.target.value
        })
    }

    function updatePrice(e) {
        setFormData({
            ...formData,
            price: e.target.value
        })
    }

    function buttonClicked() {
        try {
            props.onSubmit(formData);
        } catch (err) {
            alert(err.message);
        }
    }
}

