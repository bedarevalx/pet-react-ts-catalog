import styles from './Header.module.scss';
import bootstrap from '../../assets/bootstrap.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
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
            <li>
              <Link to={'/tents'}>
                <button>Палатки</button>
              </Link>
            </li>
            <li>
              <Link to={'/admin'}>
                <button>Добавить</button>
              </Link>
            </li>
            <li>
              <Link to={'/favorites'}>
                <button>Избранное</button>
              </Link>
            </li>
            <li>
              <Link to={'/login'}>
                <button>Войти</button>
              </Link>
            </li>
          </ul>
          <div className={`${styles.burgerMenu}`} tabIndex={0}>
            <img src='/images/menu.svg' alt='menu-icon' />
            <section className={`${styles.shortMenu}`}>
              <Link to={'/tents'} style={{ textDecoration: 'none' }}>
                <span>Палатки</span>
              </Link>
              <Link to={'/admin'} style={{ textDecoration: 'none' }}>
                <span>Добавить</span>
              </Link>

              <Link to={'/favorites'} style={{ textDecoration: 'none' }}>
                <span>Избранное</span>
              </Link>

              <Link to={'/login'} style={{ textDecoration: 'none' }}>
                <span>Войти</span>
              </Link>
            </section>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
