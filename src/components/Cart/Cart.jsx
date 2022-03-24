import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    let price = 0;
    let shipping = 0;

    for (const product of cart) {
        price = price + product.price;
        shipping = shipping + product.shipping;

    }

    let tax = (price + shipping) * 0.1;

    let GrandTotal = price + shipping + tax;

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Items:  {cart.length}</p>
            <p>Total Price: $ {price}</p>
            <p>Total Shipping Charge: ${shipping} </p>
            <p>Tax:$ {tax.toFixed(2)} </p>

            <h2>Grand Total:{GrandTotal}</h2>
        </div>
    );
};

export default Cart;