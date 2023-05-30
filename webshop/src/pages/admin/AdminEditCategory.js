import EditCategory from "../../components/admin/EditCategory";


const AdminEditCategory = () => {
    return (
        <>
            <EditCategory />
        </>
    )
}

// minden termékhez a termék listában van egy szerkesztés gomb, ami a szerkesztő oldalra irányít
// mentés gombra kattintva a termék adatai frissülnek és a termék listára irányít
//mégsem gombra kattintva a termék listára irányít

export default AdminEditCategory;