import productService from "../service/productService"
import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import SearchComponent from "../components/SearchComponent";
// import Sort from "../components/Sort";
import sortProductsFromA from "../utils/sortProductsFromA";
import sortProductsFromB from "../utils/sortProductsFromB"

const Products = () => {

    const [products, setProducts] = useState([]);
    const [from, setFrom] = useState(0);
    const [to, setTo] = useState(9);
    const [displayedProducts, setDisplayedProducts] = useState([]);

    // useEffect(() => {
    //     products.map(product => console.log(product))
    // }, [])

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
                const manProdLenght = manipulatedProducts.length;

                if (manProdLenght < to) {
                    setTo(manProdLenght);
                    setDisplayedProducts(manipulatedProducts);
                } else {
                    setDisplayedProducts(manipulatedProducts.slice(from, to));
                }
            })
    }

    function prevPage() {
        setFrom(from - 9);
        setTo(to - 9);
    }

    function nextPage() {
        let increasedFrom = from + 9;
        let increasedTo = products.lenght >= to + 9 ? to + 9 : products.length;

        setFrom(increasedFrom);
        setTo(increasedTo);
        setDisplayedProducts(products.slice(increasedFrom, increasedTo));
    }

    return (
        <>
            <p>Termékek</p>
            <button onClick={createProducts}>Termék hozzáadás</button>
            <button onClick={() => setProducts(sortProductsFromA)}>Rendezés A-Z</button>
            <button onClick={() => setProducts(sortProductsFromB)}>Rendezés Z-A</button>
            <h2>Terméklista</h2>
            <SearchComponent products={displayedProducts} />
            <ProductList products={displayedProducts} />
            <div className="pagination-buttons">
                <button onClick={prevPage}>Vissza</button>
                <button onClick={nextPage}>Előre</button>
            </div>
        </>
    )
}

export default Products;