import React, { useContext, useReducer } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Item from "./Item";
import { CartContext } from "./Cart";
const ContextCarts = () => {
    const { item,clearCart,totalItem, totalAmount } = useContext(CartContext)
    if(item.lenth === 0){
        return(
            <>
                 <header>
          <div className="continue-shopping">
            <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
            <h3>continue shopping</h3>
          </div>

          <div className="cart-icon">
            <img src="./images/cart.png" alt="cart" />
            <p>{totalItem}</p>
          </div>
        </header>

        <section className="main-cart-section">
          <h1>shopping Cart</h1>
          <p className="total-items">
            you have <span className="total-items-count">{totalItem} </span>
            items in shopping cart
          </p>
        </section>

            </>
        )
    }
    return (
        <div>
                         <header>
                 <div>
                     <div className="continue-shopping">
                         <img src="./images/arrow.png" alt="arrow" className="arrow-icon"></img>
                         <h3>Continue shopping</h3>
                     </div>
                     <div className="cart-icon">
                         <img src="./images/cart.png" alt="Cart"></img>
                         <p>{totalItem}</p>
                     </div>
                 </div>
             </header>
             <section className="main-cart-section">
                 <h1>shoping Cart</h1>
                 <p>you have <span className="total-items-count">{totalItem}</span> item in shoppping cart</p>
                 <div className="cart-items">
                 <div className="cart-items-container">
                 <Scrollbars>

                 {
                     item.map((curItem) =>{
                         return<Item key={curItem.id} {...curItem}></Item>
                     })
                 }
                     </Scrollbars>
                 </div>
                 </div>
                 <div className="card-total">
                     <h3>card total:<span>{totalAmount}rs</span></h3>
                     <button>checkout</button>
                     <button className="clear-cart" onClick={clearCart}>
            Clear Cart
          </button>
                 </div>
             </section>
        </div>
    )
}

export default ContextCarts
