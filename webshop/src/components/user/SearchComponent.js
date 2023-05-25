import { createContext, useContext, useState } from "react"
import { SearchValue } from "../../context/searchValueContext";
import '../../styles/search.css';
import { FaTimes } from 'react-icons/fa';

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

    const deleteSearchProducts = () => {
        setSearchValue('');
    }

    return (
        <>
            <div className="search">
                Keresés: <input type="text" onChange={searchedProduct} value={searchValue} />
                {/* <button className="search-button" onClick={filter}>Keresés</button> */}
                <button className="delete-button" onClick={deleteSearchProducts}><FaTimes /></button>
            </div>
{/* 
            <div>
                {
                    filteredProducts && (
                        filteredProducts?.length !== 0
                            ?
                            <><h1>Találatok:</h1> {filteredProducts?.map(products => <div key={crypto.randomUUID()}>{products.title}</div>)}</>
                            :
                            "Nincs ilyen termék!"
                    )
                }
            </div> */}
        </>
    )
}

export default SearchComponent;