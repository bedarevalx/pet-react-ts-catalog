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
            <Link to={'/tents'}>Палатки</Link>
            <Link to={'/admin'}>Добавить</Link>

            <Link to={'/favorites'}>Избранное</Link>
            <Link to={'/login'}>Войти</Link>
          </ul>
          <div className={`${styles.burgerMenu}`} tabIndex={0}>
            <img src='images/menu.svg' alt='menu-icon' />
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
