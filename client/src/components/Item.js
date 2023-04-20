import React, { useContext } from 'react'
import { CartContext } from "./Cart";


const Item = ({id,title,description,price,img,quantity,totalAmount}) => {
const { removeItem, increment, decrement  } = useContext(CartContext)
    return (
        <div>
                                <div className="items-info">
                        <div className="product-img">
                            <img src= {img}alt=""></img>
                        </div>
                        <div className="title">
                            <h2>{title}</h2>
                            <p>{description}</p>
                        </div>
                        <div className="add-minus-quantity">
                        <i class="zmdi zmdi-plus-circle" onClick={()=>increment(id)}></i>
                        <input type="text" placeholder={quantity}></input>
                        <i class="zmdi zmdi-minus-circle" onClick ={()=>decrement(id)}></i>
                        </div>
                        <div className="price">
                            <h3>{price*quantity}</h3>
                        </div>
                        <div className="remove-item">
                        <i class="zmdi zmdi-delete" onClick={()=>removeItem(id)}></i>
                        </div>
                     </div>
                     <hr />
        </div>
    )
}


export default Item
