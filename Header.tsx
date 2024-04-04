
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

export const Header: React.FC = () => {
  const { cartItems } = useCart();

  return (
    <header className="header">
      <h1>Online Bookstore</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">
              Cart ({cartItems.reduce((total, item) => total + item.quantity, 0)})
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
