//import React from 'react';
//import ReactDOM from 'react-dom/client';
//import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
  //<React.StrictMode>
   // <App />
  //</React.StrictMode>,

//);




// index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './homepage'; // Ensure the path is correct
ReactDOM.render(
    <React.StrictMode>
        <Homepage />
    </React.StrictMode>,
    document.getElementById('root')
);