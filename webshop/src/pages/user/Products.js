import productService from "../../../src/service/productService"
import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import sortProductsFromA from "../../utils/sortProductsFromA";
import sortProductsFromB from "../../utils/sortProductsFromB"
import ProductList from "../../components/user/ProductList";
import SearchComponent from "../../components/user/SearchComponent";
import "../../styles/pagination-buttons.css";
import sortProductsFromHighest from "../../utils/sortProductsFromHighest";
import sortProductsFromLowest from "../../utils/sortProductsFromLowest";
import { SearchValue } from "../../context/searchValueContext";
import CategorySearch from "../../components/admin/AdminCategorySearch";

const Products = () => {

    const [products, setProducts] = useState([]);
    const [from, setFrom] = useState(0);
    const [to, setTo] = useState(9);
    const [displayedProducts, setDisplayedProducts] = useState([]);
    const [selectValue, setSelectValue] = useState("order");
    const [searchValue, setSearchValue] = useContext(SearchValue);
    const [sortedItems, setSortedItems] = useState([]);

    // const [searchParams, setSearchParams] = useSearchParams();
    // const [sortByTitle, setSortByTitle] = useState({ sort: searchParams.get("sort") || "" });


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
            sliceprod(products)
        }
    }, [selectValue]);

    useEffect(() => {
        const searchedProducts = products.filter(p => p.title.includes(searchValue))
        sliceprod(searchedProducts)
    }, [searchValue])

    useEffect(() => {
        sliceprod(sortedItems)
      },[sortedItems])

      console.log(sortedItems);

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
            <h2 className="product-h2">Terméklista</h2>
            
            <div className="top-bar">
                <div className="select-option">
                    <select value={selectValue} id="ordered-list" onChange={(e) => setSelectValue(e.target.value)} >
                        <option value="order">Rendezés</option>
                        <option value="name-asc">Név szerint növekvő</option>
                        <option value="name-desc">Név szerint csökkenő</option>
                        <option value="price-asc">Ár szerint növekvő</option>
                        <option value="price-desc">Ár szerint csökkenő</option>
                    </select>
                </div>
                <CategorySearch products={products}setSortedItems={setSortedItems}/>
                <div className="searchbar">
                    <SearchComponent products={products} />
                </div>
            </div>
            
            {/* Itt ha a displayedProducts helyett products-ot adok át neki, működik a keresés az összes termékre. */}
            {/* Most így viszont csak az adott oldalon keres */}
            <ProductList products={products} displayedProducts={displayedProducts} searchValue={searchValue} />
            <div className="pagination-buttons">
                <button onClick={prevPage} className={from === 0 ? "disabled" : ""} disabled={from === 0}>Vissza</button>
                <button onClick={nextPage} className={to === products.length ? "disabled" : ""} disabled={to === products.length}>Előre</button>
            </div>
        </div>
    )
}

export default Products;