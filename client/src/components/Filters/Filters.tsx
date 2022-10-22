import React from 'react';
import styles from './/Filters.module.scss';
import bootstrap from '../../assets/bootstrap.module.scss';
import Popper from '../Popper/Popper';

const Filters = () => {
  return (
    <div className={`${bootstrap['col-3']}`}>
      <div className={`${styles.filters}`}>
        <div className={`${styles.title}`}>
          <h3>Фильтры</h3>
          <span>Сбросить</span>
        </div>
        <ul>
          <li>
            <span>Цена</span>
            <div className={`${styles.costFilter}`}>
              <span>от</span>
              <input type='number' />
              <span>до</span>
              <input type='number' />
            </div>
          </li>
          <li className={`${styles.material}`}>
            <span>Материал</span>
            <button className={`${styles.button}`}>Выбрать</button>
          </li>
          <li className={`${styles.windRes}`}>
            <span>Ветроустойчивость</span>
            <button className={`${styles.button}`}>Выбрать</button>
          </li>
          <li className={`${styles.placeCount}`}>
            <span>Количество мест</span>
            <button className={`${styles.button}`}>Выбрать</button>
          </li>
          <li className={`${styles.countryMadeIn}`}>
            <span>Страна производства</span>
            <button className={`${styles.button}`}>Выбрать</button>
            <Popper></Popper>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filters;
