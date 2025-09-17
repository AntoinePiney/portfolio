'use client';

import { useState } from 'react';
import styles from './header.module.css';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <span className={styles.logoText}>Antoine Piney</span>
        </Link>
        
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/about" className={styles.navLink} onClick={closeMenu}>
                À propos
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/work" className={styles.navLink} onClick={closeMenu}>
                Projets
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/contact" className={styles.navLink} onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <button 
          className={`${styles.menuButton} ${isMenuOpen ? styles.menuButtonOpen : ''}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span className={styles.menuIcon}>
            <span className={styles.menuLine}></span>
            <span className={styles.menuLine}></span>
            <span className={styles.menuLine}></span>
          </span>
        </button>
      </div>
    </header>
  );
}
