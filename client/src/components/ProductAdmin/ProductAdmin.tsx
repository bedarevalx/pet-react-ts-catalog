import React, { FC } from 'react';
import { IProduct } from '../../types/types';
import Popper from '../Popper/Popper';
import styles from './/ProductAdmin.module.scss';

interface ProductAdminProps {
  product?: IProduct;
}

const ProductAdmin: FC<ProductAdminProps> = ({ product }) => {
  return (
    <>
      <h1>{product ? 'Добавить новую палатку' : 'Редактирование'}</h1>
      <table>
        <tr>
          <td>Название</td>
          <td>
            <input type='text' placeholder='Введите название' />
          </td>
        </tr>
        <tr>
          <td>Производитель</td>
          <td>
            <input type='text' placeholder='Введите производителя' />
          </td>
        </tr>
        <tr>
          <td>Артикль</td>
          <td>
            <input type='text' placeholder='Введите артикль' />
          </td>
        </tr>
        <tr className={`${styles.photos}`}>
          <td>Фотографии</td>
          <td className={`${styles.photos}`}>
            <div className={`${styles.fileWrapper}`}>
              Выбрать файлы
              <input
                type='file'
                className={`${styles.fileLoad}`}
                placeholder='Введите значение'
                multiple
              />
            </div>
            <div className={`${styles.uploadedPhotos}`}>
              <img src='images/products/tents/tent1.png' alt='' />
              <img src='images/products/tents/tent2.jpeg' alt='' />
              <img src='images/products/tents/tent3.png' alt='' />
            </div>
          </td>
        </tr>
        <tr>
          <td>Описание</td>
          <td className={``}>
            <textarea placeholder='Введите описание продукта'></textarea>
          </td>
        </tr>
        <tr className={`${styles.itemList}`}>
          <td>Пункт описания</td>
          <td className={`${styles.items} `}>
            <input
              className={`${styles.headerList}`}
              type='text'
              placeholder='Введите подзаголовок'
            />
            <textarea placeholder='Введите пункт описания продукта'></textarea>
            <button>Добавить еще</button>
          </td>
        </tr>
        <tr>
          <td>Срок гарантии</td>
          <td>
            <button>Выберите срок гарантии</button>
          </td>
        </tr>
        <tr>
          <td>Страна производства</td>
          <td>
            <button>Выберите страну производства</button>
          </td>
        </tr>
        <tr>
          <td>Сезон</td>
          <td>
            <button>Выберите сезон</button>
          </td>
        </tr>
        <tr>
          <td>Кол-во мест</td>
          <td>
            <button>Выберите кол-во мест</button>
          </td>
        </tr>
        <tr>
          <td>Ветроустойч.</td>
          <td>
            <button>Выберите ветроустойчивость</button>
          </td>
        </tr>
        <tr>
          <td>Водонепр. дна</td>
          <td>
            <input type='number' placeholder='Введите значение' />
          </td>
        </tr>
        <tr>
          <td>Водонепр. тента</td>
          <td>
            <input type='number' placeholder='Введите значение' />
          </td>
        </tr>
        <tr>
          <td>Цвет</td>
          <td>
            <input type='text' placeholder='Введите цвет' />
          </td>
        </tr>
        <tr>
          <td>Материал дна</td>
          <td>
            <button>Выберите материал дна</button>
          </td>
        </tr>
        <tr>
          <td>Матерал дуг</td>
          <td>
            <button>
              Выберите материал дуг
              <Popper></Popper>
            </button>
          </td>
        </tr>
      </table>
      <div className={`${styles.btnWrapper}`}>
        <button className={`${styles.addButton}`}>Добавить</button>
      </div>
    </>
  );
};

export default ProductAdmin;
