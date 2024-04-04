
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Book } from '../../shared/types';

export const BookList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetch('/api/books')
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error('Failed to fetch books:', error));
  }, []);

  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book-card">
          <img src={`/images/${book.id}.jpg`} alt={book.title} />
          <h3>{book.title}</h3>
          <p>By {book.author}</p>
          <p>Price: ${book.price.toFixed(2)}</p>
          <Link to={`/books/${book.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};
