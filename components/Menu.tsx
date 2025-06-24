import React from 'react';
import styles from '../styles/Menu.module.css';

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Menu; 