import DeleteProduct from '../../components/admin/DeleteProduct.js'



const AdminDeleteProduct = () => {
    return (
        <>
           < DeleteProduct />
        </>
    )
}
// minden termék sorhoz van egy törlés gomb, ami a törlést megerősítő képernyőre vezet
// törlés gomb kitörli a terméket és visszairányít a lista oldalra
// mégsem gomb visszairányít a lista oldalra

export default AdminDeleteProduct;