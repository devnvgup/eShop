import React from 'react'
import "./Product.css"
import { useStateValue } from '../Provider/StateProvider'
function Product({ title, price, rating, image }) {

    const [_, dispatch] = useStateValue()

    const handleAddBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                title,
                price,
                rating,
                image,
                id: Math.random()*100000
            }
        })
    }
    return (
        <div className='product'>
            <div className='product__info'>
                <p>
                    {title}
                </p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    {Array(rating).fill("⭐️").join("")}
                </div>
            </div>
            <img className='product__img' src={image} alt='' />

            <button className='product__btn' onClick={handleAddBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
