import productService from "../../../src/service/productService"
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import sortProductsFromA from "../../utils/sortProductsFromA";
import sortProductsFromB from "../../utils/sortProductsFromB"
import ProductList from "../../components/user/ProductList";
import SearchComponent from "../../components/user/SearchComponent";
import "../../styles/pagination-buttons.css";
import sortProductsFromHighest from "../../utils/sortProductsFromHighest";
import sortProductsFromLowest from "../../utils/sortProductsFromLowest";

const Products = () => {

    const [products, setProducts] = useState([]);
    const [from, setFrom] = useState(0);
    const [to, setTo] = useState(9);
    const [displayedProducts, setDisplayedProducts] = useState([]);
    const [selectValue, setSelectValue] = useState("order");

    // const [searchParams, setSearchParams] = useSearchParams();
    // const [sortByTitle, setSortByTitle] = useState({ sort: searchParams.get("sort") || "" });

    const [sortedItems, setSortedItems] = useState();

    useEffect(() => {
        listProducts();
    }, [])

    useEffect(() => {
        if (selectValue === "name-desc") {
            const prod = sortProductsFromB(products)
            setSortedItems(sortProductsFromB(products))
            sliceprod(prod)

        } else if (selectValue === "name-asc") {
            const prod = sortProductsFromA(products)
            setSortedItems(sortProductsFromA(products))
            sliceprod(prod)

        } else if (selectValue === "price-desc") {
            const prod = sortProductsFromHighest(products)
            setSortedItems(sortProductsFromHighest(products))
            sliceprod(prod)

        } else if (selectValue === "price-asc") {
            const prod = sortProductsFromLowest(products)
            setSortedItems(sortProductsFromLowest(products))
            sliceprod(prod)

        } else {
            setSortedItems(products)
        }
    }, [selectValue]);

    // function createProducts() {
    //     const product = {
    //         title: prompt("Adj meg egy nevet!"),
    //         price: prompt("Adj meg egy árat!"),
    //     }

    //     productService.create(product)

    // }

    function listProducts() {
        productService.read()
            .then(product => {
                let manipulatedProducts = productService.manipulateProductObject(product);
                setProducts(manipulatedProducts);
                setSortedItems(manipulatedProducts)
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
        setDisplayedProducts(sortedItems.slice(decreasedFrom, decreasedTo));
    }

    function nextPage() {
        let increasedFrom = from + 9;
        let increasedTo = sortedItems.length >= to + 9 ? to + 9 : sortedItems.length;

        setFrom(increasedFrom);
        setTo(increasedTo);
        setDisplayedProducts(sortedItems.slice(increasedFrom, increasedTo));
    }

    function sliceprod(array) {
        let increasedFrom = 0;
        let increasedTo = 9;
        setFrom(increasedFrom);
        setTo(increasedTo);
        setDisplayedProducts(array.slice(increasedFrom, increasedTo));
    }

    return (
        <div className="page-container">
            <div className="top-bar">
                <div className="sort-menu">
                    <select value={selectValue} id="ordered-list" onChange={(e) => setSelectValue(e.target.value)} >
                        <option value="order">Rendezés</option>
                        <option value="name-asc">Név szerint növekvő</option>
                        <option value="name-desc">Név szerint csökkenő</option>
                        <option value="price-asc">Ár szerint növekvő</option>
                        <option value="price-desc">Ár szerint csökkenő</option>
                    </select>
                </div>
                <div className="searchbar">
                    <SearchComponent products={products} />
                </div>
            </div>
            <h2 className="product-h2">Terméklista</h2>

            <ProductList products={displayedProducts} />
            <div className="pagination-buttons">
                <button onClick={prevPage} disabled={from === 0}>Vissza</button>
                <button onClick={nextPage} disabled={to === products.length}>Előre</button>
            </div>
        </div>
    )
}

export default Products;