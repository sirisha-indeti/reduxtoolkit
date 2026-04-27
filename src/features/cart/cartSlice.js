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

            const existingitem=state.items.find((i)=>i.id==action.payload.id)

            if(existingitem){
                existingitem.quantity+=1
            }else{

                state.items.push({...action.payload,quantity:1})
            }
            console.log('add to cart')

            state.total+=action.payload.price
        },
        removecart:(state,action)=>{
const item=state.items.find((i)=>i.id==action.payload)

if (item){
    state.total-=item.price*item.quantity
}
            console.log(action.payload)
            state.items=state.items.filter((i)=>i.id!=action.payload)

            
            console.log('removed')
        }
    }
})

export const {addtocart,removecart}=cartSlice.actions
export default cartSlice.reducer

