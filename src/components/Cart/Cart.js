import React from 'react';
import { Button } from 'react-bootstrap';

const Cart = (props) => {
    const cart=props.cart;
    const courseTotal =cart.reduce((sum,course)=> sum+course.price,0);
    const tax =courseTotal/10;
    
    //console.log(props.cart);
    return (
        <div>
            <h1>Total Item Orderd: {cart.length}</h1>
            <h2 className="text-success">Price: {courseTotal}</h2>
            <h2 className="text-success">Tax: {tax}</h2>
            <h2 className="text-warning">Grand Total: {courseTotal+tax}</h2>
            <Button variant="success">Place Order</Button>
        </div>
    );
};

export default Cart;