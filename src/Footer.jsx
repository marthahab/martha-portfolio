import React from 'react';
import styles from './Footer.module.css';

const links = ['About', 'Skills', 'Portfolio', 'Contact'];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>MH</div>
      <ul className={styles.links}>
        {links.map(l => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`}>{l}</a>
          </li>
        ))}
      </ul>
      <p className={styles.copy}>© 2025 Martha Habtamu · Addis Ababa, Ethiopia</p>
    </footer>
  );
}
