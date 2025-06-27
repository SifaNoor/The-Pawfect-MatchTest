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

document.addEventListener('DOMContentLoaded', function() {
  const inputs = document.querySelectorAll('input, select');
  
  inputs.forEach(input => {
      input.addEventListener('focus', function() {
          this.style.borderColor = '#667eea';
          this.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
      });
      
      input.addEventListener('blur', function() {
          this.style.borderColor = '#e1e1e1';
          this.style.boxShadow = 'none';
      });
  });
});