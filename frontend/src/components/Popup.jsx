// src/components/Popup.jsx
import React from 'react';
import styles from './Popup.module.css';

const Popup = ({ message, onClose, type }) => {
  return (
    <div className={`${styles.popupOverlay} ${styles[type]}`}>
      <div className={styles.popupContent}>
        <p>{message}</p>
        <button onClick={onClose} className={styles.closeBtn}>Fechar</button>
      </div>
    </div>
  );
};

export default Popup;
