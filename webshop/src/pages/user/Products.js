import productService from "../../../src/service/productService"
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import sortProductsFromA from "../../utils/sortProductsFromA";
import sortProductsFromB from "../../utils/sortProductsFromB"
import ProductList from "../../components/user/ProductList";
import SearchComponent from "../../components/user/SearchComponent";
// import "../../styles/pagination-buttons.css";

const Products = () => {

    const [products, setProducts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [from, setFrom] = useState(0);
    const [to, setTo] = useState(9);
    const [displayedProducts, setDisplayedProducts] = useState([]);
 
    const [sortByTitle, setSortByTitle] = useState({ sort: searchParams.get("sort") || "" });

    const [sortedItems, setSortedItems] = useState();

    useEffect(() => {
        listProducts();
        if (sortByTitle.sort === "asc" || sortByTitle.sort === "") {
            setSortedItems(sortProductsFromA(products))
        }
    }, [])

    useEffect(() => {
        listProducts();
        if (sortByTitle.sort === "desc" || sortByTitle.sort === "") {
            setSortedItems(sortProductsFromB(products))
        }
    }, [])

    function listProducts() {
        productService.read()
            .then(product => {
                let manipulatedProducts = productService.manipulateProductObject(product);
                if (searchParams.get("sort") === "asc") {
                    manipulatedProducts.sort((a, b) => a.title.localeCompare(b.title, 'hu-HU'));
                }
                if (searchParams.get("sort") === "desc") {
                    manipulatedProducts.sort((a, b) => b.title.localeCompare(a.title, 'hu-HU'));
                }
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
        let increasedTo = products.length >= to + 9 ? to + 9 : products.length;

        setFrom(increasedFrom);
        setTo(increasedTo);
        setDisplayedProducts(products.slice(increasedFrom, increasedTo));
    }

    function handleSortButtonOnClickAsc() {
        setSearchParams({ "sort": "asc" })
        console.log(sortByTitle.sort)
        if (sortByTitle.sort === "asc" || sortByTitle.sort === "") {
            setSortedItems(sortProductsFromA(displayedProducts))
        }
        setDisplayedProducts(sortProductsFromA)
    }

    function handleSortButtonOnClickDesc() {
        setSearchParams({ "sort": "desc" })
        console.log(sortByTitle.sort)
        if (sortByTitle.sort === "desc" || sortByTitle.sort === "") {
            setSortedItems(sortProductsFromB(displayedProducts))
        }
        setDisplayedProducts(sortProductsFromB)
    }

    return (
        <>
            <p>Termékek</p>
            <button onClick={handleSortButtonOnClickAsc}>
                Rendezés A-Z
            </button>
            <button onClick={handleSortButtonOnClickDesc}>
                Rendezés Z-A
            </button>
            <h2>Terméklista</h2>
            <SearchComponent products={displayedProducts} />
            <ProductList products={displayedProducts} />
            <div className="pagination-buttons">
                <button onClick={prevPage} disabled={from === 0}>Vissza</button>
                <button onClick={nextPage} disabled={to === products.length}>Előre</button>
            </div>
        </>
    )
}

export default Products;