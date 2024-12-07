import React from 'react'
import {useState } from 'react'

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // const stringValidation

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle login logic here
    
  };
    
  return (
    <div>
        <h1>Admin Login</h1>

    </div>
  )
}

export default Login