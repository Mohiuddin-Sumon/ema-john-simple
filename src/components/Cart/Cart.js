import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart, clearCart, children} = props;

    // for total product price calculation
    let total = 0;
    let shipping = 0;
    let quantity = 0;

    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }

    // For tax
    const tax = parseFloat((total * 0.1).toFixed(2));

    // For Grand Total
    const grandTotal = total + shipping + tax;

    return (
        <div className='cart'>
            <h2>This is order summery</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total} </p>
            <p>Total Shipping: ${shipping} </p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: {grandTotal.toFixed(2)} </h5>
            <button onClick={clearCart}>Clear Cart</button>
            {children}
        </div>
    );
};

export default Cart;