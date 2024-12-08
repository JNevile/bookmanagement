import React, { useState } from 'react';
import users from '../../data/users.json'; // Importing the users JSON file

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate user credentials
        const user = users.find(
            (user) => user.username === username && user.password === password
        );

        if (user) {
            setErrorMessage('');
            alert('Login successful!');
            // Redirect or perform any post-login action here
        } else {
            setErrorMessage('Invalid username or password.');
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
            <h1>Admin Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;

// {
//   "username": "admin",
//   "password": "$2a$10$hQVR53d0LoDjF/kR55kc5.ADGf27xDf4VAAW7rImZnZB0qLQsNHKi"
// },
// {
//   "username": "admin",
//   "password": "password123"
// },
// {
//   "username": "user1",
//   "password": "pass456"
// }