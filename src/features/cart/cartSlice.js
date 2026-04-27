import {createSlice} from '@reduxjs/toolkit'

const initialState={
    items:[],
    total:0
}

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addtocart:(state,action)=>{
            console.log('add to cart')
        },
        removecart:(state,action)=>{
            console.log('removed')
        }
    }
})

export const {addtocart,removecart}=cartSlice.actions
export default cartSlice.reducer

