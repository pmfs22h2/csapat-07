import productService from "../service/productService"
import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import SearchComponent from "../components/SearchComponent";
// import Sort from "../components/Sort";
import sortProductsFromA from "../utils/sortProductsFromA";
import sortProductsFromB from "../utils/sortProductsFromB"

const Products = () => {

    const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     productService.read().then(data => console.log(data))
    // }, [])

    useEffect(() => {
        products.map(product => console.log(product))
    }, [])

    useEffect(() => {
        listProducts();
    }, [])

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
                let manipulatedProducts = productService.manipulateProductObject(product);
                setProducts(manipulatedProducts);
            })
    }

    return (
        <>
            <p>Termékek</p>
            <button onClick={createProducts}>Termék hozzáadás</button>
            <button onClick={() => setProducts(sortProductsFromA)}>Rendezés A-Z</button>
            <button onClick={() => setProducts(sortProductsFromB)}>Rendezés Z-A</button>
            <h2>Terméklista</h2>
            <SearchComponent products={products} />
            <ProductList products={products} />
        </>
    )
}

export default Products;