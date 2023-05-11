export default function sortProductsFromB(products) {
    let newProducts = [...products]

    return newProducts.sort((a, b) => b.title.localeCompare(a.title, 'hu-HU'));
}