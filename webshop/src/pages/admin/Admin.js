import { useEffect, useState } from 'react';
import '../../styles/admin.css';
import productService from '../../service/productService';
import userServie from '../../service/userService'
import orderServie from '../../service/orderService'
import Counter from '../../components/admin/Counter';

const Admin = () => {

    const [productsAmount, setProductsAmount] = useState(0);
    const [customersAmount, setCustomersAmount] = useState(0);
    const [ordersAmount, setOrdersAmount] = useState(0)

    useEffect(() => {
        productService.read()
        .then(p => setProductsAmount(Object.values(p).length))
        userServie.read()
        .then(u => setCustomersAmount(Object.values(u).length))
        orderServie.getOrders()
        .then(o => setOrdersAmount(Object.values(o).length))
        
    }, [])

    return (
        <>
            <h2 className="admin-h2">Admin kezdőoldal</h2>
            <Counter
                productsAmount={productsAmount} 
                customersAmount={customersAmount}
                ordersAmount={ordersAmount}
            />

        </>
    )
}

export default Admin;