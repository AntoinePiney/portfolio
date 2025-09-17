'use client';

import { useState, useEffect } from 'react';
import styles from './footer.module.css';

export default function Footer() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('fr-FR', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      setCurrentTime(`PARIS ${timeString}`);
    };

    // Mettre à jour immédiatement
    updateTime();
    
    // Mettre à jour chaque seconde
    const interval = setInterval(updateTime, 1000);

    // Nettoyer l'intervalle au démontage du composant
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.time}>{currentTime}</span>
        </div>
        <div className={styles.right}>
          <span className={styles.copyright}>©2025</span>
        </div>
      </div>
    </footer>
  );
}
