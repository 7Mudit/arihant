import React from 'react'
import './Products.css'
const Products = ({name,prize,img}) => {
  return (
    <div className='products_card'>   
        <img src={img} alt="" />
        <div className='products_name'>{name}</div>
        <div className='products_prize'>from {prize}</div>
        <div className='overlap_text'>Add To Cart</div>
    </div>
  )
}

export default Products