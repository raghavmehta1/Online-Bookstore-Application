
import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

export const Checkout: React.FC = () => {
  const history = useHistory();
  const { cartItems, clearCart } = useCart();
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const order = {
      customerName,
      customerEmail,
      items: cartItems,
      totalAmount,
    };

    fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Order placed:', data);
        clearCart();
        history.push('/');
      })
      .catch((error) => console.error('Failed to place order:', error));
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form className="checkout-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={customerEmail}
          onChange={(e) => setCustomerEmail(e.target.value)}
          required
        />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};
