import productService from "../../../src/service/productService"
import { useEffect, useState } from "react";
import ProductList from "../../components/user/ProductList";
import SearchComponent from "../../components/user/SearchComponent";

const Products = () => {

    const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     productService.read().then(data => console.log(data))
    // }, [])

   /* useEffect(() => {
        products.map(product => console.log(product))
    }, [])*/

    useEffect(() => {
        listProducts();
    }, [])

    function createProducts() {
        const product = {
            title: prompt("Adj meg egy nevet!"),
            price: prompt("Adj meg egy árat!"),
        }

        productService.create(product)
            
    }

    function listProducts() {
        productService.read()
            .then(product => {
                let manipulatedProducts = productService.manipulateProductObject(product);
                setProducts(manipulatedProducts);
            })
    }

    return (
        <>
            <p>Termékek</p>
            <button onClick={listProducts}>Listázás</button>
            <button onClick={createProducts}>Termék hozzáadás</button>
            <h2>Terméklista</h2>
            <SearchComponent products={products} />
            <ProductList products={products} />
        </>
    )
}

export default Products;