const express = require('express');
const { fileAuth, generateJWT } = require('../auth  ');
const booksRouter = require('./routes/books');

const app = express();

//json request bodies through middleware
app.use(express.json());

//CORS middleware
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

//Login for admin user
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    //User authentication
    const user = fileAuth(username, password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    //Generate a JWT for the authenticated user
    const token = generateJWT(username);

    res.json({ message: 'Welcome! You are now logged in', token });
});

//Handle book-related requests
app.use('/books', booksRouter);

module.exports = app;