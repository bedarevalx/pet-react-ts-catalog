import React from 'react';
import styles from './ProductInfo.module.scss';
import bootstrap from '../../assets/bootstrap.module.scss';
import Slider from '../Slider/Slider';
import { Link } from 'react-router-dom';

const ProductInfo = () => {
  return (
    <>
      <section className={`${styles.cardInfo} ${bootstrap.row}`}>
        <div
          className={`${bootstrap['col-12']} ${bootstrap['col-xl-1']} ${bootstrap['col-md-8']} ${bootstrap['order-xl-0']} ${bootstrap['order-3']}  ${bootstrap['order-md-3']}`}>
          <div className={`${styles.thumbs}`}>
            <ul>
              <li>
                <img src='/images/products/tents/tent1.png' alt='ph1' />
              </li>
              <li>
                <img src='/images/products/tents/tent2.jpeg' alt='ph2' />
              </li>
              <li>
                <img src='/images/products/tents/tent3.png' alt='ph3' />
              </li>
              <li>
                <img src='/images/products/tents/tent4.jpeg' alt='ph4' />
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`${bootstrap['col-md-8']} ${bootstrap['col-xl-7']} ${bootstrap['col-12']}  `}>
          <Slider />
        </div>
        <div
          className={`${bootstrap['col-md-4']} ${bootstrap['col-12']} ${bootstrap['order-last']} ${bootstrap['order-md-2']}`}>
          <div className={`${styles.info}`}>
            <div className={`${styles.title}`}>
              <h2>OUTVENTURE</h2>
              <img
                src='/images/bookmark-dis2.svg'
                alt=''
                className={`${styles.bookmark}`}
              />
            </div>
            <div className={`${styles.priceInfo}`}>
              <h3>Палатка 3-местная Outventure Dome 3</h3>
              <p>Артикль: 4ILZ2YGBXD</p>
              <h1 className={`${styles.price}`}>3779 ₽</h1>
              <p>цвет: темно-зеленый</p>
              <a className={`${styles.pChars}`} href='#chars'>
                характеристики
              </a>
              <Link to={'/edit'} className={`${styles.pChars}`}>
                редактировать
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.description} ${bootstrap.row}`}>
        <div className={`${bootstrap['col-12']} ${bootstrap['col-lg-8']}`}>
          <h1>ОПИСАНИЕ</h1>
          <p>
            Классическая трехместная туристическая палатка Outventure подойдет
            для непродолжительных стоянок. Модель с продуманной конструкцией
            отличается простотой установки, компактностью и малым весом.
          </p>
          <ul>
            <li>
              <h4>ВОДОНЕПРОНИЦАЕМОСТЬ</h4>
              <p>
                Вентиляционные окна и вход с москитной сеткой улучшают
                вентиляцию.
              </p>
            </li>
            <li>
              <h4>ВЕНТИЛЯЦИЯ</h4>
              <p>Конструкция "полусфера" способна выдержать сильный ветер.</p>
            </li>
            <li>
              <h4>ВЕТРОУСТОЙЧИВОСТЬ</h4>
              <p>
                Благодаря тенту с показателем водонепроницаемости 3000 мм в.ст.
                и проклеенным швам палатка долго не промокает.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className={`${styles.characteristics} ${bootstrap.row}`}>
        <div className={`${bootstrap['col-12']} ${bootstrap['col-lg-8']}`}>
          <h1 id='chars'>ХАРАКТЕРИСТИКИ</h1>
          <table>
            <tr>
              <h3>Общие характеристики</h3>
            </tr>
            <tr>
              <td>Срок гарантии</td>
              <td>2 года</td>
            </tr>
            <tr>
              <td>Страна производства</td>
              <td>Вьетнам</td>
            </tr>
            <tr>
              <td>Сезон</td>
              <td>2022</td>
            </tr>
          </table>
          <table>
            <tr>
              <h3>Технические характеристики</h3>
            </tr>
            <tr>
              <td>Количество мест</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Ветроустойчивость</td>
              <td>Высокая</td>
            </tr>
            <tr>
              <td>Водонепроницаемость дна, мм.в.ст.</td>
              <td>10000</td>
            </tr>
            <tr>
              <td>Водонепроницаемость тента, мм.в.ст.</td>
              <td>3000</td>
            </tr>
            <tr>
              <td>Материал дна</td>
              <td>Полиэстер</td>
            </tr>
            <tr>
              <td>Материал дуг</td>
              <td>Фибергласс</td>
            </tr>
          </table>
        </div>
      </section>
    </>
  );
};

export default ProductInfo;
