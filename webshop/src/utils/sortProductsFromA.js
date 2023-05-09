export default function sortProductsFromA(products) {
    let newProducts = [...products]

    return newProducts.sort((a, b) => a.title.localeCompare(b.title, 'hu-HU'));
}