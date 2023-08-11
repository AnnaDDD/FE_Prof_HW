import styles from './Header.module.css'

function Header(){

    return(
        <header>
            <nav>
            <img src="images/logo.png" alt="Logo" />
            <ul className={styles.navbar}>
          <li><a href="-">О нас</a></li>
          <li><a href="-">Услуги</a></li>
          <li><a href="-">Аренда</a></li>
            </ul>
            <button className={styles.button}>Связаться</button>
            </nav>
        </header>
    )
}

export default Header