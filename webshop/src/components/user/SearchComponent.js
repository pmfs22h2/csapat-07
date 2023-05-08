import { useState } from "react"

const SearchComponent = (props) => {

    const [filteredProducts, setFilteredProducts] = useState(null);

    const [searcValue, setSearchValue] = useState('');

    const searchedProduct = (e) => {
        setSearchValue(e.target.value);
        console.log(searcValue);
    }

    const filter = () => {
        const filteredProductsArray = props.products.filter(product => product.title.includes(searcValue));
        setFilteredProducts(filteredProductsArray);
        console.log(filteredProducts);
    }

    return (
        <div>
            <div>
                Keresés: <input type="text" onChange={searchedProduct} value={searcValue} />
            </div>
            <button onClick={filter}>Keresés</button>

            <div>
                Találatok: {filteredProducts && filteredProducts.map(products => <div key={crypto.randomUUID()}>{products.title}</div>)}
            </div>
        </div>
    )
}

export default SearchComponent;