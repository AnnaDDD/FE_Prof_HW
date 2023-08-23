import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
<header>
  <div className={styles.wrap_logo}>
    <img src='./images/shop.png' alt='Logo'/>
  </div>
  <nav>
    <a className="active" href="#home">Главная</a>
    <a href="#contact">Контакты</a>
    <a href="#about">О нас</a>
    <a href="#reviews">Отзывы</a>
  </nav>
</header>
  );
};

export default Header;