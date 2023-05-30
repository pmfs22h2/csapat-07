import EditProduct from "../../components/admin/EditProduct";


const AdminEditProduct = () => {
    return (
        <>
            <h2 className="admin-h2">Admin termékmódosítás</h2>
            <EditProduct />
        </>
    )
}

// minden termékhez a termék listában van egy szerkesztés gomb, ami a szerkesztő oldalra irányít
// mentés gombra kattintva a termék adatai frissülnek és a termék listára irányít
//mégsem gombra kattintva a termék listára irányít

export default AdminEditProduct;