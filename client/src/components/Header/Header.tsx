import styles from './Header.module.scss';
import bootstrap from '../../assets/bootstrap.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <section className={`${styles.shortMenu} ${styles.menuClosed}`}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='48'
          height='48'
          fill='currentColor'
          className={`${bootstrap.bi} ${bootstrap['bi-x-lg']} ${bootstrap['btn-close-menu']}`}
          viewBox='0 0 16 16'>
          <path d='M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z' />
        </svg>
        <ul>
          <li>
            <Link to={'/tents'}>
              <a>Палатки</a>
            </Link>
          </li>
          <li>
            <a href='/pages/admin.html'>Добавить</a>
          </li>

          <li>
            <a href='/pages/favorites.html'>Избранное</a>
          </li>

          <li>
            <a href='/pages/login.html'>Войти</a>
          </li>
        </ul>
      </section>
      <header className={styles.header}>
        <nav className={`${bootstrap.container}`}>
          <Link to={'/'} className={`${styles.logoPart}`}>
            <img src='/images/logo.svg' alt='logo' />
            <div className={`${styles.logoText}`}>
              <h4>ТУРИСТИЧЕСКИЙ</h4>
              <h4>КАТАЛОГ</h4>
            </div>
          </Link>

          <ul>
            <Link to={'/tents'}>Палатки</Link>
            <Link to={'/admin'}>Добавить</Link>

            <Link to={'/favorites'}>Избранное</Link>
            <Link to={'/login'}>Войти</Link>
          </ul>
          <div className={`${styles.burgerMenu}`}>
            <img src='images/menu.svg' alt='menu-icon' />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
