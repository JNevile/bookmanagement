import React, { useState } from 'react';
import booksData from '../../data/books.json'; // Importing books data file


// ADDING A NEW BOOK
function AdminDashboard() {
    const [books, setBooks] = useState(booksData); // Initialize state with imported books
    const [newBook, setNewBook] = useState({
        id: '',
        title: '',
        author: '',
        description: '',
        publicationDate: '',
        coverImage: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewBook({ ...newBook, [name]: value });
    };

    const handleAddBook = (e) => {
        e.preventDefault();
        if (
            newBook.title &&
            newBook.author &&
            newBook.description &&
            newBook.publicationDate &&
            newBook.coverImage
        ) {
            const updatedBooks = [...books, { ...newBook, id: books.length + 1 }];
            setBooks(updatedBooks);
            setNewBook({ id: '', title: '', author: '', description: '', publicationDate: '', coverImage: '' });
            alert('Book added successfully!');
        } else {
            alert('Please fill in all fields.');
        }
    };

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
            <h1>Admin Dashboard</h1>
            <h2>Add a New Book</h2>
            <form onSubmit={handleAddBook} style={{ marginBottom: '20px' }}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={newBook.title}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="author">Author:</label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        value={newBook.author}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={newBook.description}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="publicationDate">Publication Date:</label>
                    <input
                        type="date"
                        id="publicationDate"
                        name="publicationDate"
                        value={newBook.publicationDate}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="coverImage">Cover Image URL:</label>
                    <input
                        type="text"
                        id="coverImage"
                        name="coverImage"
                        value={newBook.coverImage}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit">Add Book</button>
            </form>

            <h2>Book List</h2>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        <h3>{book.title}</h3>
                        <p><strong>Author:</strong> {book.author}</p>
                        <p>{book.description}</p>
                        <p><strong>Publication Date:</strong> {book.publicationDate}</p>
                        <img
                            src={book.coverImage}
                            alt={book.title}
                            style={{ maxWidth: '200px' }}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AdminDashboard;

