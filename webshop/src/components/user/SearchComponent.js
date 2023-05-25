import { useState } from "react"

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
        setSearchValue("");
    }

    return (
        <div>
            <div>
                Keresés: <input type="text" onChange={searchedProduct} value={searchValue} />
                <button onClick={filter}>Keresés</button>
                <button onclick={deleteSearchProducts}>x</button>
            </div>

            <div>
                {
                    filteredProducts && (
                        filteredProducts?.length !== 0
                            ?
                            <><h1>Találatok:</h1> {filteredProducts?.map(products => <div key={crypto.randomUUID()}>{products.title}</div>)}</>
                            :
                            "nincs ilyen termék"
                    )
                }
            </div>
        </div>
    )
}

export default SearchComponent;