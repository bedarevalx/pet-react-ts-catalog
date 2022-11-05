import React from 'react';
import styles from './/Filters.module.scss';
import bootstrap from '../../assets/bootstrap.module.scss';
import Popper from '../Popper/Popper';
import { DataVariant } from '../OptionsAdmin/OptionsAdmin';
import useGetOptions from '../../hooks/useGetOptions';

const Filters = () => {
  // const { garanties } = useAppSelector((state) => state.garanteeReducer);
  // const { countries } = useAppSelector((state) => state.countryReducer);
  // const { materials: matArc } = useAppSelector(
  //   (state) => state.materialArcReducer,
  // );
  // const { materials: matBot } = useAppSelector(
  //   (state) => state.materialBottomReducer,
  // );
  // const { placecounts } = useAppSelector((state) => state.placecountReducer);
  // const { seasons } = useAppSelector((state) => state.seasonReducer);

  const {
    garanties,
    countries,
    materialsArc,
    materialsBottom,
    placecounts,
    seasons,
  } = useGetOptions();

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
            <Popper
              type={DataVariant.name}
              title='Выберите материал'
              handleChange={() => console.log('')}
              value={''}
              elements={materialsArc}></Popper>
          </li>
          <li className={`${styles.windRes}`}>
            <span>Сезон</span>
            <Popper
              type={DataVariant.year}
              title='Выберите сезон'
              handleChange={() => console.log('')}
              value={''}
              elements={seasons}></Popper>
          </li>
          <li className={`${styles.placeCount}`}>
            <span>Количество мест</span>
            <Popper
              type={DataVariant.count}
              title='Выберите кол-во мест'
              handleChange={() => console.log('')}
              value={''}
              elements={placecounts}></Popper>
          </li>
          <li className={`${styles.countryMadeIn}`}>
            <span>Страна производства</span>
            {/* <button className={`${styles.button}`}>Выбрать</button> */}
            <Popper
              type={DataVariant.name}
              title='Выберите страну производства'
              handleChange={() => console.log('')}
              value={''}
              elements={countries}></Popper>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filters;
