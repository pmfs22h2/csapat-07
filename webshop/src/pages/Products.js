import productService from "../service/productService"
import { useState } from "react";

const Products = () => {

    const [products, setProducts] = useState([]);

    function createProducts() {
        const product = {
            title: prompt("Adj meg egy nevet!"),
            price: prompt("Adj meg egy árat!"),
        }

        productService.create(product)
            .then(product => console.log(product))
    }

    function listProducts() {
        productService.read()
            .then(product => {
                console.log(product)
                let entries = Object.entries(product);
                console.log(entries);
                setProducts(entries)
            })
    }

    return (
        <>
            <p>Termékek</p>
            <button onClick={listProducts}>Listázás</button>
            <button onClick={createProducts}>Termék hozzáadás</button>
            <h2>Terméklista</h2>
            <ul>
                {products.map(element => <li>{`nev: ${element[1].title}`}</li>)}
            </ul>
        </>
    )
}

export default Products;