import productService from "../../../src/service/productService";
import { useEffect, useState } from "react";
import AdminProductList from "../../components/admin/AdminProductList";
import AdminAddProduct from "./AdminAddProduct";

const AdminProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        productService.read()
            .then(item => {
                let manipulatedProducts = productService.manipulateProductObject(item);
                setProducts(manipulatedProducts)
            });

    }, [])

    return (
        <>
            <p>Admin termék lista</p>
            <AdminAddProduct />
            <AdminProductList products={products} />
        </>
    )
}
export default AdminProducts;


