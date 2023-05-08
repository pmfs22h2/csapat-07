import productService from "../../../src/service/productService"
import { useEffect, useState } from "react";
import ProductList from "../../components/user/ProductList";
import AdminProductList from "../../components/admin/AdminProductList";


const AdminProducts = () => {

    const [products, setProducts] = useState([]);


    useEffect(() => {
        productService.read()
       .then(item => {let manipulatedProducts = productService.manipulateProductObject(item);
       setProducts(manipulatedProducts)});

    }, [])

    console.log(products);

    return (
        <>
        <p>Admin termék lista</p> 
        <AdminProductList products= {products}/>    
        </>
    )
}

export default AdminProducts;


