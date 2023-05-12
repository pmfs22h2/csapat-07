import { useEffect, useState } from "react";
import { getProducts } from "../../service/productService";


export default function ProductForm({product, id}) {

    const [formData, setFormData] = useState({
        id: id,
        name: "",
        price: ""
    });

    return (
        <>
            <p>Termék azonosítója: {formData.id} </p>
            <p>Termék neve: <input type="text" value={formData.name} placeholder='Termék új neve' /></p>
            <p>Termék ára: <input type="text" value={formData.price} placeholder='Termék új ára' /></p>
            <p><button>Mentés</button></p>
        </>
    )
}

