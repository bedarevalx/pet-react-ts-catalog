import React, { FC, ReactNode } from 'react';
import OptionsAdmin from '../OptionsAdmin/OptionsAdmin';
import ProductAdmin from '../ProductAdmin/ProductAdmin';
import { OptionVariant } from '../OptionsAdmin/OptionsAdmin';
import styles from './/AdminPanel.module.scss';
import { IProduct } from '../../types/types';

const AdminPanel = () => {
  const product: IProduct = { imgSetPath: '', title: '', price: 1 };
  return (
    <>
      <div className={`${styles.adminList}`}>
        <ProductAdmin product={product} />
        <OptionsAdmin
          type={OptionVariant.color}
          title={'Добавить новый цвет'}
          label={'Цвет'}
          placeholder={'Введите новый цвет'}
        />
        <OptionsAdmin
          type={OptionVariant.garantee}
          title={'Добавить новый срок гарантии'}
          label={'Срок гарантии'}
          placeholder={'Введите новый срок гарантии'}
        />
        <OptionsAdmin
          type={OptionVariant.materialArc}
          title={'Добавить новый материал дуг'}
          label={'Материал дуг'}
          placeholder={'Введите новый материал дуг'}
        />
        <OptionsAdmin
          type={OptionVariant.materialBottom}
          title={'Добавить новый материал дна'}
          label={'Материал дна'}
          placeholder={'Введите новый материал дна'}
        />
        <OptionsAdmin
          type={OptionVariant.placecount}
          title={'Добавить новое кол-во мест'}
          label={'Кол-во мест'}
          placeholder={'Введите новое кол-во мест'}
        />
        <OptionsAdmin
          type={OptionVariant.season}
          title={'Добавить новый сезон'}
          label={'Сезон'}
          placeholder={'Введите новый сезон'}
        />
        <OptionsAdmin
          type={OptionVariant.waterproofBottom}
          title={'Добавить новую водонепр. дна'}
          label={'Водонепр. дна'}
          placeholder={'Введите новую водонепр. дна'}
        />
        <OptionsAdmin
          type={OptionVariant.waterproofTent}
          title={'Добавить новую водонепр. тента'}
          label={'Водонепр. тента'}
          placeholder={'Введите новую водонепр. тента'}
        />
      </div>
    </>
  );
};

export default AdminPanel;
