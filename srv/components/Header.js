// src/components/Header.js
import React from 'react';
import styles from './Header.module.css'; // Импорт стилей

function Header() {
    return (
        <header className={styles.header}>
            <h1>MEFAT Wood</h1>
            {/* Место для навигационного меню */}
        </header>
    );
}

export default Header;
