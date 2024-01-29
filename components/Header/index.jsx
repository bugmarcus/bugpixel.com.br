import React from 'react';
import styles from './Header.module.scss';
import logo from '../../public/logo.svg'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <a href="#home">
                    <img src={logo} alt="Logo" />
                </a>
            </div>
            <nav className={styles.navbar}>
                <ul className={styles.navList}>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
