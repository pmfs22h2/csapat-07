import React from 'react'
import CountUp from 'react-countup'
import '../../styles/counter.css'

export default function Counter({productsAmount, customersAmount, ordersAmount}) {
  return (
    <>
        <div className="admin-counter">
            <div className='counter-round'>
                <CountUp
                    start={0}
                    end={productsAmount}
                    duration={5}
                    delay={2}
                    suffix='termék'
                >        
                </CountUp>
            </div>
            <div className='counter-round'>
                <CountUp
                    start={0}
                    end={customersAmount}
                    duration={5}
                    delay={2}
                    suffix='vásárló'
                >        
                </CountUp>
            </div>
            <div className='counter-round'>
                <CountUp
                    start={0}
                    end={ordersAmount}
                    duration={5}
                    delay={2}
                    suffix='rendelés'
                >        
                </CountUp>
            </div>
        </div>
    
    </>
   
  )
}
