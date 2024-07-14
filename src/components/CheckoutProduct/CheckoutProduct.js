import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from '../Provider/StateProvider'
function CheckoutProduct({ title, price, rating, image, id }) {
    const [_,dispatch] = useStateValue()
    const handleRemove = () => {
        dispatch({
            type:"REMOVE_BASKET",
            item : id
        })
    }
    return (
        <div className='checkoutProduct'>
            <img src={image} className='checkoutProduct__image' />
            <div className='product__infor'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutProduct__rating'>
                    {Array(rating).fill("⭐️").join("")}
                </div>
                <button className='checkoutProduct__info_button' onClick={handleRemove}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
