import React from 'react'

export default function BasketItem(props) {
    const {name, id, price, quantity, removeFromBasket, incQuantity, decrQuantity} = props;
  return (
    <li className='collection-item'>
        {name} x{quantity} = {quantity * price} <b>$</b> 
        <span className='secondary-content basket-delete'>
            <i className='material-icons ' onClick={() => incQuantity(id)}>add</i>
            <i className='material-icons ' onClick={() => decrQuantity(id)}>remove</i>
            <i className='material-icons ' onClick={()=>removeFromBasket(id)}>delete_forever</i>
        </span>
    </li>
  )
}
