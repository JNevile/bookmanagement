import './App.css';
import React, { useState } from 'react';
import libraryshelves from './resources/libraryshelves.jpg';

const Homepage = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await fetch('../data/books'); 
      if (!response.ok) throw new Error('We are sorry, please try again later');
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = () => {
    alert('You are now logged in as an admin');
  };

  return (
      <div className="container">
      <h1>Welcome to the Book Management System</h1>
      <button onClick={fetchBooks}>View all books</button>
      <button onClick={handleLogin}>Login as Admin</button>
      <img src={libraryshelves} alt="Library with books on shelves" />
      {books.length > 0 && (
        <div>
          <h2>Book Listing</h2>
          <ul>
            {books.map(book => (
              <li key={book.id}>{book.title} - {book.author}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
    );
};

  export default Homepage;




