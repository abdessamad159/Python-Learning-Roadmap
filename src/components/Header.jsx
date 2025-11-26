import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, User } from 'lucide-react';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <BookOpen size={24} />
          <span>Python Roadmap</span>
        </Link>
        <nav className={styles.nav}>
          <Link to="/" className={styles.link}>الرئيسية</Link>
          <Link to="/profile" className={styles.link}>
            <User size={20} />
            <span>حسابي</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
