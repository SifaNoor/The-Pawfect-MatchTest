// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './App.css';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


// Hamburger Menu
const hamburger = document.querySelector('.hamburgermenu');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('responsive');
});