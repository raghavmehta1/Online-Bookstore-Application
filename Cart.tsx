
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

export const Cart: React.FC = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.bookId} className="cart-item">
              <span>{item.title}</span>
              <span>Quantity: {item.quantity}</span>
              <span>Price: ${item.price.toFixed(2)}</span>
              <button onClick={() => removeFromCart(item.bookId)}>Remove</button>
            </div>
          ))}
          <p>Total Amount: ${totalAmount.toFixed(2)}</p>
          <Link to="/checkout">Proceed to Checkout</Link>
        </>
      )}
    </div>
  );
};
