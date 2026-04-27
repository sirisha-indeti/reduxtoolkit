import React from 'react'
import { addtocart } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'
function Product() {
    const dispatch=useDispatch()
    const products=[
        {id:1,name:'iphone',price:380000},
        {id:2,name:'samsung',price:120000},
        {id:3,name:'oneplus',price:440000},
    ]
  return (
    <div>
      {
        products.map((item)=>(
            <div key={item.id}>
                <h1>{item.name}- {item.price}</h1>
                <button onClick={()=>dispatch(addtocart(item))}>add to cart</button>
            </div>
        ))
      }
    </div>
  )
}

export default Product
