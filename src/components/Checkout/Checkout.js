import React from 'react'
import "./Checkout.css"
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import Subtotal from '../Subtotal/Subtotal'
import { useStateValue } from '../Provider/StateProvider';
function Checkout() {
    const [{basket},_] = useStateValue()
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout__ad" />
                <div>
                    <h2 className='checkout__title'>Your Shopping Basket</h2>
                    {basket.map(({title,price,rating,image, id})=>(
                         <CheckoutProduct 
                            title={title}
                            price={price}
                            rating={rating}
                            image={image}
                            id={id}
                         />
                    ))}
                </div>
            </div>
            <div className='checkout__right'>
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
