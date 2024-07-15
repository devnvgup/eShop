import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../Provider/StateProvider'
import  {getBasketsTotal} from '../Provider/reducer'

function Subtotal() {
    const [{basket},_] = useStateValue()
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items) : <strong>${value}</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type='checkbox' className='subtotal__gift__input'/> This order contains a gift
                        </small>
                        <button className='subtotal__button'>Proceed to checkout</button>
                    </>
                )}
                decimalScale={2}
                value={getBasketsTotal(basket)||0}
                displayType={"text"}
                thousandSeparator={true}
            />
        </div>
    )
}

export default Subtotal
