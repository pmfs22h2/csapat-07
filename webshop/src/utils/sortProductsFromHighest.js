export default function sortProductsFromHighest(products) {
    let newProducts = [...products]

    return newProducts.sort((a, b) => b.price - a.price);
}