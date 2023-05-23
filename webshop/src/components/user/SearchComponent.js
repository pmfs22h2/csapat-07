import { createContext, useContext, useState } from "react"
import { SearchValue } from "../../context/searchValueContext";

const SearchComponent = (props) => {

    // const [filteredProducts, setFilteredProducts] = useState(null);
    const [searchValue, setSearchValue] = useContext(SearchValue);

    const searchedProduct = (e) => {
        setSearchValue(e.target.value);
    }

    // const filter = () => {
    //     const filteredProductsArray = props.products.filter(product => product.title.toLowerCase().includes(searchValue));
    //     setFilteredProducts(filteredProductsArray);
    //     console.log(filteredProducts);
    // }

    // const deleteSearchProducts = () => {
    //     setFilteredProducts(null);
    //     setSearchValue('');
    // }

    return (
        <div>
            Keresés: <input type="text" onChange={searchedProduct} value={searchValue} />
        </div>
    )
}

export default SearchComponent;