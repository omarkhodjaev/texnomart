import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const allAddeProduct = useSelector(state => state);
    // console.log(allAddeProduct)
  return (
    <div>cart</div>
  )
}

export default Cart