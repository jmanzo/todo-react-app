import React from 'react';
import styles from './PartyPopper.module.css'; // Create a CSS file for animation styles

const PartyPopper = () => {
  return (
    <div className={styles.partyPopper}>
      <div className={styles.popper}>
        🎉
      </div>
      <div className={styles.confetti}>
        {/* You can add multiple divs for confetti */}
        <div className={styles.piece}></div>
        <div className={styles.piece}></div>
        <div className={styles.piece}></div>
        <div className={styles.piece}></div>
        <div className={styles.piece}></div>
        <div className={styles.piece}></div>
        <div className={styles.piece}></div>
        <div className={styles.piece}></div>
        <div className={styles.piece}></div>
        <div className={styles.piece}></div>
        <div className={styles.piece}></div>
        <div className={styles.piece}></div>
      </div>
    </div>
  );
};

export default PartyPopper;