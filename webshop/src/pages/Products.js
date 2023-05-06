import productService from "../service/productService"

const Products = () => {

    function createProducts() {
        const product = {
            title: prompt("Adj meg egy nevet!"),
            price: prompt("Adj meg egy árat!"),
        }

        productService.create(product)
            .then(product => console.log(product))
    }

    return (
        <>
            <p>Termékek</p>
            <button onClick={createProducts}>Termék hozzáadás</button>
        </>
    )
}

export default Products;