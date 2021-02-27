import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    // const totalPrice = cart.reduce((total,prd) => total + prd.price,0);
    let totalPrice = 0;
    let shippingCost = 0;
    for(let i = 0; i < cart.length; i++)
    {
        const product = cart[i];
        totalPrice = totalPrice + product.price;
        shippingCost = shippingCost + product.shipping;
    }
    return (
        <div>
            <h4>order Summery</h4>
            <p>items ordered: {cart.length}</p>
            <p>product price: {totalPrice}</p>
            <p>shipping Cost: {shippingCost}</p>
            <p>total price: {totalPrice + shippingCost}</p>
        </div>
    );
};

export default Cart;