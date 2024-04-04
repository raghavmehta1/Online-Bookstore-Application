
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Book } from '../../shared/types';

export const BookDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    fetch(`/api/books/${id}`)
      .then((response) => response.json())
      .then((data) => setBook(data))
      .catch((error) => console.error('Failed to fetch book:', error));
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="book-details">
      <img src={`/images/${book.id}.jpg`} alt={book.title} />
      <h2>{book.title}</h2>
      <p>By {book.author}</p>
      <p>Price: ${book.price.toFixed(2)}</p>
      <p>{book.description}</p>
      <button>Add to Cart</button>
    </div>
  );
};
