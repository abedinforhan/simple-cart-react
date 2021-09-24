import React from 'react';

const Cart = (props) => {

    const {cart}= props || {}


    const totalReducer=(prevValue,currentValue)=>prevValue+currentValue.price

   const total=cart.reduce(  totalReducer   ,  0).toFixed(2)

   const tax=0.1*total;

      const totalPrice=total+tax

    


    console.log(cart)
    return (
        <div>
              <h3><i class="fas fa-shopping-cart"></i>
                 {cart.length}
               </h3>
                <h2>{total}</h2>
                <h3> Tax: {tax}</h3>
                <h1>total Price: {totalPrice}</h1>
               <ul>
                   {
                       cart.map( product=> <li>{product.name}</li>)
                   }
               </ul>
        </div>
    );
};

export default Cart;