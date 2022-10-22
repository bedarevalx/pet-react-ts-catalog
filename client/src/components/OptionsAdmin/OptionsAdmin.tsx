import React, { FC } from 'react';
import styles from './/OptionsAdmin.module.scss';

export enum OptionVariant {
  season = 'сезон',
  placecount = 'кол-во мест',
  color = 'цвет',
  garantee = 'срок гарантии',
  materialArc = 'материал дуг',
  materialBottom = 'материал дна',
  waterproofTent = 'водонепр. тента',
  waterproofBottom = 'водонепр. дна',
}

interface OptionsAdminProps {
  type: OptionVariant;
  title: string;
  label: string;
  placeholder: string;
}

const OptionsAdmin: FC<OptionsAdminProps> = ({
  title,
  label,
  type,
  placeholder,
}) => {
  return (
    <>
      <section>
        <h1>{title}</h1>
        <table>
          <tr>
            <td>{label}</td>
            <td>
              <input type='text' placeholder={placeholder} />
            </td>
          </tr>
        </table>
        <div className={`${styles.btnWrapper}`}>
          <button className={`${styles.addButton}`}>Добавить</button>
        </div>
      </section>
      {/* <section className='new-garantee-time'>
        <h1>Добавить новое время гарантии</h1>
        <table>
          <tr>
            <td className='name'>Время гарантии</td>
            <td className='value'>
              <input type='number' placeholder='Введите время гарантии' />
            </td>
          </tr>
        </table>
        <div className='btn-wrapper'>
          <button className='add-button'>Добавить</button>
        </div>
      </section>
      <section className='new-placecount'>
        <h1>Добавить новое кол-во мест</h1>
        <table>
          <tr>
            <td className='name'>Кол-во мест</td>
            <td className='value'>
              <input type='number' placeholder='Введите кол-во мест' />
            </td>
          </tr>
        </table>
        <div className='btn-wrapper'>
          <button className='add-button'>Добавить</button>
        </div>
      </section>
      <section className='new-garantee-time'>
        <h1>Добавить новый сезон</h1>
        <table>
          <tr>
            <td className='name'>Сезон</td>
            <td className='value'>
              <input type='number' placeholder='Введите сезон' />
            </td>
          </tr>
        </table>
        <div className='btn-wrapper'>
          <button className='add-button'>Добавить</button>
        </div>
      </section>
      <section className='new-material-bottom'>
        <h1>Добавить новый материал дна</h1>
        <table>
          <tr>
            <td className='name'>Материал дна</td>
            <td className='value'>
              <input type='text' placeholder='Введите материал дна' />
            </td>
          </tr>
        </table>
        <div className='btn-wrapper'>
          <button className='add-button'>Добавить</button>
        </div>
      </section>
      <section className='new-material-tent'>
        <h1>Добавить новый материл тента</h1>
        <table>
          <tr>
            <td className='name'>Материал тента</td>
            <td className='value'>
              <input type='number' placeholder='Введите материал тента' />
            </td>
          </tr>
        </table>
        <div className='btn-wrapper'>
          <button className='add-button'>Добавить</button>
        </div>
      </section> */}
    </>
  );
};

export default OptionsAdmin;
