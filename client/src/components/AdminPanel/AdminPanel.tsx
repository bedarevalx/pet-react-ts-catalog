import React from 'react';
import OptionsAdmin, { DataVariant } from '../OptionsAdmin/OptionsAdmin';
import ProductAdmin from '../ProductAdmin/ProductAdmin';
import { OptionVariant } from '../OptionsAdmin/OptionsAdmin';
import styles from './/AdminPanel.module.scss';
import { useAppDispatch } from '../../hooks/redux';
import { createGarantee } from '../../store/reducers/GaranteeSlice';
import { createMaterialArc } from '../../store/reducers/MaterialArcSlice';
import { createMaterialBottom } from '../../store/reducers/MaterialBottomSlice';
import { createPlacecount } from '../../store/reducers/PlacecountSlice';
import { createSeason } from '../../store/reducers/SeasonsSlice';
import { createColor } from '../../store/reducers/ColorSlice';
import { createCountry } from '../../store/reducers/CountrySlice';

const AdminPanel = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <div className={`${styles.adminList}`}>
        <ProductAdmin />
        <OptionsAdmin
          type={OptionVariant.color}
          title={'Добавить новый цвет'}
          label={'Цвет'}
          placeholder={'Введите новый цвет'}
          data={DataVariant.color}
          handleCreate={(title) => dispatch(createColor(title))}
        />
        <OptionsAdmin
          type={OptionVariant.country}
          title={'Добавить новую страну производства'}
          label={'Страна'}
          placeholder={'Введите новую страну производства'}
          data={DataVariant.name}
          handleCreate={(title) => dispatch(createCountry(title))}
        />
        <OptionsAdmin
          type={OptionVariant.garantee}
          title={'Добавить новый срок гарантии'}
          label={'Срок гарантии'}
          placeholder={'Введите новый срок гарантии'}
          data={DataVariant.time}
          handleCreate={(title) => dispatch(createGarantee(title))}
        />
        <OptionsAdmin
          type={OptionVariant.materialArc}
          title={'Добавить новый материал дуг'}
          label={'Материал дуг'}
          placeholder={'Введите новый материал дуг'}
          data={DataVariant.name}
          handleCreate={(title) => dispatch(createMaterialArc(title))}
        />
        <OptionsAdmin
          type={OptionVariant.materialBottom}
          title={'Добавить новый материал дна'}
          label={'Материал дна'}
          placeholder={'Введите новый материал дна'}
          data={DataVariant.name}
          handleCreate={(title) => dispatch(createMaterialBottom(title))}
        />
        <OptionsAdmin
          type={OptionVariant.placecount}
          title={'Добавить новое кол-во мест'}
          label={'Кол-во мест'}
          placeholder={'Введите новое кол-во мест'}
          data={DataVariant.count}
          handleCreate={(title) => dispatch(createPlacecount(title))}
        />
        <OptionsAdmin
          type={OptionVariant.season}
          title={'Добавить новый сезон'}
          label={'Сезон'}
          placeholder={'Введите новый сезон'}
          data={DataVariant.year}
          handleCreate={(title) => dispatch(createSeason(title))}
        />
      </div>
    </>
  );
};

export default AdminPanel;
