import productService from "../../../src/service/productService"
import { useContext, useEffect, useState } from "react";
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
    const [selectCategory, setSelectCategory] = useState("");

    function updateCategory(e) {
        setSelectCategory(e.target.value)
    }
    console.log(to, "to");

    useEffect(() => {
        listProducts();
    }, [])

    useEffect(() => {
        // console.log("effect");
        // console.log(products, "p");
        if(products.length == 0) return;
        let searchedProducts = products.filter(p => p.title.toLowerCase().includes(searchValue))
        // keresés
        // if(searchValue != "") {searchedProducts = products.filter(p => p.title.toLowerCase().includes(searchValue))}
        

        // kategória szűrés
        if(selectCategory != "") {
            searchedProducts = searchedProducts.filter(p=>(p.categoryID==selectCategory));
        }

        // rendezés
        if (selectValue === "name-desc") {
            const prod = sortProductsFromB(searchedProducts)
            setSortedItems(sortProductsFromB(searchedProducts))
            sliceprod(prod)

        } else if (selectValue === "name-asc") {
            const prod = sortProductsFromA(searchedProducts)
            setSortedItems(sortProductsFromA(searchedProducts))
            sliceprod(prod)

        } else if (selectValue === "price-desc") {
            const prod = sortProductsFromHighest(searchedProducts)
            setSortedItems(sortProductsFromHighest(searchedProducts))
            sliceprod(prod)

        } else if (selectValue === "price-asc") {
            const prod = sortProductsFromLowest(searchedProducts)
            setSortedItems(sortProductsFromLowest(searchedProducts))
            sliceprod(prod)

        } else {
            console.log(searchedProducts, "searched");
            setSortedItems(searchedProducts)
            sliceprod(searchedProducts)
        }        

    }, [selectValue, selectCategory, searchValue])

    function listProducts() {
        productService.read()
            .then(product => {
                let manipulatedProducts = Object.values(product);
                setProducts(manipulatedProducts);
                setSortedItems(manipulatedProducts)
                const manProdLenght = manipulatedProducts.length;

                if (manProdLenght < to) {
                    console.log(manProdLenght, 'manprod');
                    setTo(manProdLenght);
                    setDisplayedProducts(manipulatedProducts);
                } else {
                    // setTo(9)
                    console.log(to, "too");
                    setDisplayedProducts(manipulatedProducts.slice(from, to));
                }
            })
    }

    function prevPage() {
        let decreasedFrom = from - 9;
        let decreasedTo = to % 9 === 0 ? to - 9 : to - (to % 9);

        setFrom(decreasedFrom);
        setTo(decreasedTo);
        console.log(sortedItems);
        setDisplayedProducts(sortedItems.slice(decreasedFrom, decreasedTo));
    }

    function nextPage() {
        let increasedFrom = from + 9;
        console.log(sortedItems, "sorted");
        let increasedTo = sortedItems.length >= to + 9 ? to + 9 : sortedItems.length;
        // console.log(increasedFrom, "increasedfrom");
        // console.log(increasedFrom, "increasedto");
        // console.log(from, "from");
        // console.log(to, "to");

        setFrom(increasedFrom);
        setTo(increasedTo);
        console.log(sortedItems);

        setDisplayedProducts(sortedItems.slice(increasedFrom, increasedTo));
       
    }

    function sliceprod(array) {
        let increasedFrom = 0;
        let increasedTo = 9;
        setFrom(increasedFrom);
        if(array.length < 9) setTo(array.length)
        else setTo(increasedTo);
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
                <CategorySearch selectCategory={selectCategory} update={updateCategory} products={products} setSortedItems={setSortedItems}/>
                <div className="searchbar">
                    <SearchComponent products={products} />
                </div>
            </div>
            
            {/* Itt ha a displayedProducts helyett products-ot adok át neki, működik a keresés az összes termékre. */}
            {/* Most így viszont csak az adott oldalon keres */}
            <ProductList products={products} displayedProducts={displayedProducts} searchValue={searchValue} />
            <div className="pagination-buttons">
                <button onClick={prevPage} className={from === 0 ? "disabled" : ""} disabled={from === 0}>Vissza</button>
                <button onClick={nextPage} className={to === sortedItems.length ? "disabled" : ""} disabled={to === sortedItems.length}>Előre</button>
            </div>
        </div>
    )
}

export default Products;