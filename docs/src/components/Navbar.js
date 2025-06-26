import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>🐾 Pawfect Match</h2>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/search" style={styles.link}>Search Pets</Link>
        <Link to="/saved" style={styles.link}>Saved Pets</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    backgroundColor: '#f8f8f8',
    borderBottom: '1px solid #ddd'
  },
  logo: {
    margin: 0
  },
  links: {
    display: 'flex',
    gap: '1rem'
  },
  link: {
    textDecoration: 'none',
    color: '#333'
  }
};

export default Navbar;
