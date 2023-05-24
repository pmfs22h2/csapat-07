import React from 'react'
import { useCountUp } from 'react-countup';
import '../../styles/counter.css'


export default function Counter2({productsAmount, customersAmount, ordersAmount}) {
    useCountUp({ ref: 'productsamount', end: productsAmount, delay: 2 });
    useCountUp({ ref: 'customersamount', end: customersAmount, delay: 2 });
    useCountUp({ ref: 'ordersamount', end: ordersAmount, delay: 2 });


  return (
    <>
    <div className="admin-counter">
            <div className='counter-round'>
                           <span id="productsamount"/>                
                <p>termék</p>
            </div>
            <div className='counter-round'>
                <span id="customersamount" />
                <p>vásárló</p>
            </div>
            <div className='counter-round'>
                <span id="ordersamount" />
                <p>rendelés</p>
            </div>
    </div>
    </>

  )
}
