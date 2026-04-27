import React, { use } from 'react'
import { removecart } from '../features/cart/cartSlice'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

function Cart() {
    const dispatch=useDispatch()
    const {items,total}=useSelector((state)=>state.cart)
  return (
    <div>
      {items.length==0?(<div>no products are added</div>):
  
      
      (<div>{items.map((i)=>(
        <div key={i.id}>
            <div>{i.name}-{i.price} * {i.quantity}</div>
            <button onClick={()=>dispatch(removecart(i.id))}>remove</button>
        </div>
      ))}</div>)
      }

      <h1>{total}</h1>
    </div>
  )
}

export default Cart
