import React, { useContext, useReducer,createContext, useEffect } from "react";
import "./cart.css"
import { Scrollbars } from 'react-custom-scrollbars-2';
import { products } from './Products';
import ContextCarts from './ContextCarts';
import { reducer } from "./reducer";
export const CartContext = createContext();


const initialState = {    
    item: products,
    totalAmount: 0,
    totalItem: 0,
};
const Cart = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const removeItem = (id) =>{
        return dispatch({
            type: "REMOVE_ITEM",
            payload: id,
        })
};
const clearCart =() =>{
    return dispatch({
        type:"CLEAR_CART"
    });
}
const increment = (id) =>{
    return dispatch({
type: "INCREMENT",
payload: id,
});
};
const decrement = (id) =>{
    return dispatch({
        type: 'DECREMENT',
        payload: id,
    });
};

useEffect(() => {
    dispatch({type:"GET_TOTAL"})
}, [state.item])
    return (
        <div>
        <CartContext.Provider value={{...state, removeItem,clearCart,increment,decrement }}>
           <ContextCarts />
           </CartContext.Provider>
        </div>
    )
}

export default Cart
