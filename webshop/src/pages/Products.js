import productService from "../service/productService"
import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import SearchComponent from "../components/SearchComponent";
// import Sort from "../components/Sort";
import sortProductsFromA from "../utils/sortProductsFromA";
import sortProductsFromB from "../utils/sortProductsFromB"
import "../styles/pagination-buttons.css";

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
        let decreasedFrom = from - 9;
        let decreasedTo = to % 9 === 0 ? to - 9 : to - (to % 9);

        setFrom(decreasedFrom);
        setTo(decreasedTo);
        setDisplayedProducts(products.slice(decreasedFrom, decreasedTo));
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
                <button onClick={prevPage} disabled={from === 0 }>Vissza</button>
                <button onClick={nextPage} disabled={to === products.length}>Előre</button>
            </div>
        </>
    )
}

export default Products;