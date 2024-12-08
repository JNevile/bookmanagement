// src/Booklisting.jsx
import React, { useState, useEffect } from 'react';

const Booklisting = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('/data/books.json'); 
        if (!response.ok) throw new Error('Failed to fetch books. Please try again later.');

        const data = await response.json();
        setBooks(data);
        setFilteredBooks(data); // Initialize filteredBooks with all books
      } catch (error) {
        console.error(error);
      }
    };

    fetchBooks();
  }, []);

  useEffect(() => {
    // Filter books based on search query
    const lowercasedQuery = searchQuery.toLowerCase();
    const result = books.filter((book) => {
      const titleMatch = book.title.toLowerCase().includes(lowercasedQuery);
      const authorMatch = book.author.toLowerCase().includes(lowercasedQuery);
      const keywordMatch = book.keywords?.some(keyword => keyword.toLowerCase().includes(lowercasedQuery)); // Assuming 'keywords' is an array in your data
      const publicationDateMatch = book.publicationDate && book.publicationDate.includes(lowercasedQuery); // Assuming 'publicationDate' is a string (e.g., 'YYYY-MM-DD')

      return titleMatch || authorMatch || keywordMatch || publicationDateMatch;
    });

    setFilteredBooks(result);
  }, [searchQuery, books]);

  return (
    <div className="container">
      <h1>Book Listing</h1>

      <input
        type="text"
        placeholder="Search by title, author, keyword, or publication date..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <ul>
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <li key={book.id}>
              {book.title} - {book.author} - {book.publicationDate}
            </li>
          ))
        ) : (
          <p>No books match your search criteria.</p>
        )}
      </ul>
    </div>
  );
};

export default Booklisting;
