'use client';

import React from 'react';
import styles from './socialLinks.module.css';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/antoinepiney'
    },
    {
      name: 'Instagram', 
      url: 'https://instagram.com/lejeunepiney'
    },
    {
      name: 'X/Twitter',
      url: 'https://x.com/lejeunepiney'
    },
    {
      name: 'Awwwards',
      url: 'https://awwwards.com/antoinepiney'
    }
  ];

  return (
    <div className={styles.socialLinks}>
      
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
          aria-label={link.name}
        >
          <span className={styles.socialIcon}>{link.name}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" className={styles.arrow}>
            <path d="M11.4342 0.216865L11.3264 11.3013L9.32665 11.282L9.40054 3.67023L2.64573 10.425L1.23152 9.01082L7.97044 2.27189L0.442929 2.39274L0.410473 0.392261L11.4342 0.216865Z" fill="black"/>
          </svg>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
