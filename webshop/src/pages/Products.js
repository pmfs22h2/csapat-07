import productService from "../service/productService"
import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import SearchComponent from "../components/SearchComponent";
import sortProductsFromA from "../utils/sortProductsFromA";
import sortProductsFromB from "../utils/sortProductsFromB"
import { useSearchParams } from "react-router-dom"

const Products = () => {

    const [products, setProducts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const [sortByTitle, setSortByTitle] = useState({ sort: searchParams.get("sort") || "" });
    console.log(sortByTitle);

    const [sortedItems, setSortedItems] = useState();

    useEffect(() => {
        products.map(product => console.log(product))
    }, [])

    useEffect(() => {
        listProducts();
        if (sortByTitle.sort == "asc" || sortByTitle.sort == "") {
            setSortedItems(sortProductsFromA(products))
        }
    }, [])

    useEffect(() => {
        listProducts();
        if (sortByTitle.sort == "desc" || sortByTitle.sort == "") {
            setSortedItems(sortProductsFromB(products))
        }
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
                if (searchParams.get("sort") === "asc") {
                    manipulatedProducts.sort((a, b) => a.title.localeCompare(b.title, 'hu-HU'));
                }
                if (searchParams.get("sort") === "desc") {
                    manipulatedProducts.sort((a, b) => b.title.localeCompare(a.title, 'hu-HU'));
                }
                setProducts(manipulatedProducts);
            })
    }

    function handleSortButtonOnClickAsc() {
        setSearchParams({ "sort": "asc" })
        console.log(sortByTitle.sort)
        if (sortByTitle.sort == "asc" || sortByTitle.sort == "") {
            setSortedItems(sortProductsFromA(products))
        }
        setProducts(sortProductsFromA)
    }

    function handleSortButtonOnClickDesc() {
        setSearchParams({ "sort": "desc" })
        console.log(sortByTitle.sort)
        if (sortByTitle.sort == "desc" || sortByTitle.sort == "") {
            setSortedItems(sortProductsFromB(products))
        }
        setProducts(sortProductsFromB)
    }

    return (
        <>
            <p>Termékek</p>
            <button onClick={createProducts}>Termék hozzáadás</button>
            <button onClick={handleSortButtonOnClickAsc}>
                Rendezés A-Z
            </button>
            <button onClick={handleSortButtonOnClickDesc}>
                Rendezés Z-A
            </button>
            <h2>Terméklista</h2>
            <SearchComponent products={products} />
            <ProductList products={products}/>
        </>
    )
}

export default Products;