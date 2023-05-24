import { useState } from "react"
import '../../styles/search.css';
import { FaTimes } from 'react-icons/fa';

const SearchComponent = (props) => {

    const [filteredProducts, setFilteredProducts] = useState(null);

    const [searchValue, setSearchValue] = useState('');

    const searchedProduct = (e) => {
        setSearchValue(e.target.value);
        console.log(searchValue);
    }

    const filter = () => {
        const filteredProductsArray = props.products.filter(product => product.title.toLowerCase().includes(searchValue));
        setFilteredProducts(filteredProductsArray);
        console.log(filteredProducts);
    }

    const deleteSearchProducts = () => {
        setFilteredProducts(null);
        setSearchValue('');
    }

    return (
        <div>
            <div className="search">
                Keresés: <input type="text" onChange={searchedProduct} value={searchValue} />
                <button className="search-button" onClick={filter}>Keresés</button>
                <button className="delete-button" onClick={deleteSearchProducts}><FaTimes /></button>
            </div>

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
            </div>
        </div>
    )
}

export default SearchComponent;