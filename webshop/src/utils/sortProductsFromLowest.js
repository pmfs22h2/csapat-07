export default function sortProductsFromLowest(products) {
    let newProducts = [...products]

    return newProducts.sort((a, b) => a.price - b.price);
}