import React from 'react';
import styles from './Footer.module.css'; // Подразумевается, что стили уже созданы

function Footer() {
    return (
        <footer className={styles.footer}>
            <p>© 2023 MEFAT Wood. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
