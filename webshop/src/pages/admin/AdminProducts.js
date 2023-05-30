import productService from "../../../src/service/productService";
import { useEffect, useState } from "react";
import AdminProductList from "../../components/admin/AdminProductList";
import SearchComponent from "../../components/user/SearchComponent";
import sortProductsFromA from "../../utils/sortProductsFromA";
import sortProductsFromB from "../../utils/sortProductsFromB";
import sortProductsFromHighest from "../../utils/sortProductsFromHighest";
import sortProductsFromLowest from "../../utils/sortProductsFromLowest";
import categoryService from "../../service/categoryService";
import '../../styles/admintable.css';
import '../../styles/search.css';
import CategorySearch from "../../components/admin/AdminCategorySearch";
import { SearchValue } from "../../context/searchValueContext";
import { useContext } from "react";

const AdminProducts = () => {

    const [products, setProducts] = useState([]);
    const [from, setFrom] = useState(0);
    const [to, setTo] = useState(9);
    const [displayedProducts, setDisplayedProducts] = useState([]);
 
    const [sortedItems, setSortedItems] = useState([]);
    const [selectCategory, setSelectCategory] = useState("");
    const [searchValue, setSearchValue] = useContext(SearchValue);
    const [selectValue, setSelectValue] = useState("order");
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        listProducts();
        categoryService.readCategories().then(cat => setCategories(cat))
    }, [])


    useEffect(() => {
        if(products.length == 0) return
        console.log("effect");
        // keresés
        let searchedProducts = products.filter(p => p.title.toLowerCase().includes(searchValue))

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
            setSortedItems(searchedProducts)
            sliceprod(searchedProducts)
        } 
        console.log(searchedProducts, "searchedprod");       

    }, [selectValue, selectCategory, searchValue])

    function updateCategory(e) {
        setSelectCategory(e.target.value)
    }

    function listProducts() {
        productService.read()
            .then(product => {
                let manipulatedProducts = Object.values(product);
                setProducts(manipulatedProducts);
                setSortedItems(manipulatedProducts)
                const manProdLenght = manipulatedProducts.length;
                console.log(manipulatedProducts, "manprod");
                if (manProdLenght < to) {
                    setTo(manProdLenght);
                    setDisplayedProducts(manipulatedProducts);
                } else {
                    console.log(to, "to");
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
        console.log("next");
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
        if(array.length < 9) setTo(array.length)
        else setTo(increasedTo);
        setDisplayedProducts(array.slice(increasedFrom, increasedTo));
    }

    return (
        <>
        <h2 className="adminprodlist-h2">Admin termék lista</h2>
        <div className="admin-box">
        <CategorySearch products={products} selectCategory={selectCategory} update={updateCategory} setSortedItems={setSortedItems}/>
        <div className="select-option">
            <select value={selectValue} id="ordered-list" onChange={(e) => setSelectValue(e.target.value)} >
                <option value="order">Rendezés</option>
                <option value="name-asc">Név szerint növekvő</option>
                <option value="name-desc">Név szerint csökkenő</option>
                <option value="price-asc">Ár szerint növekvő</option>
                <option value="price-desc">Ár szerint csökkenő</option>
            </select>
            </div>
                <SearchComponent products={displayedProducts} />
            </div>
            <div className="pagination-buttons">
                <button onClick={prevPage} className={from === 0 ? "disabled" : ""} disabled={from === 0}>Vissza</button>
                <button onClick={nextPage} className={to === sortedItems.length ? "disabled" : ""} disabled={to === sortedItems.length}>Előre</button>
            </div>
            <AdminProductList products={displayedProducts} categories={categories}/>
            <div className="pagination-buttons">
                <button onClick={prevPage} className={from === 0 ? "disabled" : ""} disabled={from === 0}>Vissza</button>
                <button onClick={nextPage} className={to === sortedItems.length ? "disabled" : ""} disabled={to === sortedItems.length}>Előre</button>
            </div>
        </>
    )
}

export default AdminProducts;
