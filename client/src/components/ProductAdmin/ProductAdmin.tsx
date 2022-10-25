import React, { FC, useRef, useState } from 'react';
import { useAppSelector } from '../../hooks/redux';
import { IOption, IProduct } from '../../types/types';
import Popper from '../Popper/Popper';
import styles from './/ProductAdmin.module.scss';
import { DataVariant } from '../OptionsAdmin/OptionsAdmin';

interface ProductAdminProps {
  product?: IProduct;
}

const windProofOptions: IOption[] = [
  {
    id: 1,
    name: 'Высокая',
  },
  {
    id: 2,
    name: 'Средняя',
  },
  {
    id: 3,
    name: 'Низкая',
  },
];

const ProductAdmin: FC<ProductAdminProps> = ({ product }) => {
  //store data
  const { garanties } = useAppSelector((state) => state.garanteeReducer);
  const { countries } = useAppSelector((state) => state.countryReducer);
  const { materials: materialsArc } = useAppSelector(
    (state) => state.materialArcReducer,
  );
  const { materials: materialsBottom } = useAppSelector(
    (state) => state.materialBottomReducer,
  );
  const { placecounts } = useAppSelector((state) => state.placecountReducer);
  const { seasons } = useAppSelector((state) => state.seasonReducer);

  //input states
  const [inputParagraphsCount, setInputParagraphsCount] = useState<number>(1);
  const [inputName, setInputName] = useState('');
  const [inputManufacturer, setInputManufacturer] = useState('');
  const [inputArticle, setInputArticle] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const [inputColor, setInputColor] = useState('');
  const [inputWaterproofBot, setInputWaterproofBot] = useState('');
  const [inputWaterproofAwn, setInputWaterproofAwn] = useState('');

  //select states
  const [selectedGarantee, setSelectedGarantee] = React.useState('');
  const [selectedCountry, setSelectedCountry] = React.useState('');
  const [selectedMatArc, setSelectedMatArc] = React.useState('');
  const [selectedMatBottom, setSelectedMatBottom] = React.useState('');
  const [selectedPlacecount, setSelectedPlacecount] = React.useState('');
  const [selectedColor, setSelectedColor] = React.useState('');
  const [selectedSeason, setSelectedSeason] = React.useState('');
  // const [selectedWindProof, setSelectedWindProof] = React.useState('');

  //refs
  const paragraphsRef = useRef<HTMLTableCellElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    console.log(selectedGarantee);
    // console.log(selectedColor);
    console.log(selectedMatArc);
    console.log(selectedMatBottom);
    console.log(selectedPlacecount);
    console.log(selectedSeason);
    console.log(selectedCountry);

    console.log(inputName);
    console.log(inputManufacturer);
    console.log(inputArticle);
    console.log(inputDescription);
    console.log(inputColor);
    console.log(inputWaterproofAwn);
    console.log(inputWaterproofBot);

    // console.log(selectedWindProof);
    console.log(paragraphsRef.current?.children);
  };

  return (
    <>
      <h1>{product ? 'Добавить новую палатку' : 'Редактирование'}</h1>
      <table>
        <tr>
          <td>Название</td>
          <td>
            <input
              type='text'
              value={inputName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInputName(e.target.value)
              }
              placeholder='Введите название'
            />
          </td>
        </tr>
        <tr>
          <td>Производитель</td>
          <td>
            <input
              type='text'
              value={inputManufacturer}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInputManufacturer(e.target.value)
              }
              placeholder='Введите производителя'
            />
          </td>
        </tr>
        <tr>
          <td>Артикль</td>
          <td>
            <input
              type='text'
              value={inputArticle}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInputArticle(e.target.value)
              }
              placeholder='Введите артикль'
            />
          </td>
        </tr>
        <tr className={`${styles.photos}`}>
          <td>Фотографии</td>
          <td className={`${styles.photos}`}>
            <div
              className={`${styles.fileWrapper}`}
              onClick={() => fileInputRef.current?.click()}>
              Выбрать файлы
              <input
                ref={fileInputRef}
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
          <td>
            <textarea
              value={inputDescription}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setInputDescription(e.target.value)
              }
              placeholder='Введите описание продукта'></textarea>
          </td>
        </tr>
        <tr className={`${styles.itemList}`}>
          <td>Пункт описания</td>
          <td className={`${styles.items} `} ref={paragraphsRef}>
            {new Array(inputParagraphsCount)
              .fill(inputParagraphsCount)
              .map((count) => {
                return (
                  <>
                    <input
                      className={`${styles.headerList}`}
                      type='text'
                      placeholder='Введите подзаголовок'
                    />
                    <textarea placeholder='Введите пункт описания продукта'></textarea>
                  </>
                );
              })}
            <button
              onClick={() => {
                setInputParagraphsCount((prev) => prev + 1);
              }}>
              Добавить еще
            </button>
          </td>
        </tr>
        <tr>
          <td>Срок гарантии</td>
          <td>
            <Popper
              type={DataVariant.time}
              title='Выберите срок гарантии'
              handleChange={setSelectedGarantee}
              elements={garanties}></Popper>
          </td>
        </tr>
        <tr>
          <td>Страна производства</td>
          <td>
            <Popper
              type={DataVariant.name}
              title='Выберите страну производства'
              handleChange={setSelectedCountry}
              elements={countries}></Popper>
          </td>
        </tr>
        <tr>
          <td>Сезон</td>
          <td>
            <Popper
              type={DataVariant.year}
              title='Выберите сезон'
              handleChange={setSelectedSeason}
              elements={seasons}></Popper>
          </td>
        </tr>
        <tr>
          <td>Кол-во мест</td>
          <td>
            <Popper
              type={DataVariant.count}
              title='Выберите кол-во мест'
              handleChange={setSelectedPlacecount}
              elements={placecounts}></Popper>
          </td>
        </tr>
        {/* <tr>
          <td>Ветроустойч.</td>
          <td>
            <Popper
              type={DataVariant.name}
              title='Выберите ветроустойчивость'
              handleChange={setSelectedWindProof}
              elements={windProofOptions}></Popper>
          </td>
        </tr> */}
        <tr>
          <td>Водонепр. дна</td>
          <td>
            <input
              value={inputWaterproofBot}
              type='number'
              placeholder='Введите значение'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInputWaterproofBot(e.target.value)
              }
            />
          </td>
        </tr>
        <tr>
          <td>Водонепр. тента</td>
          <td>
            <input
              value={inputWaterproofAwn}
              type='number'
              placeholder='Введите значение'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInputWaterproofAwn(e.target.value)
              }
            />
          </td>
        </tr>
        <tr>
          <td>Цвет</td>
          <td>
            <input
              type='text'
              value={inputColor}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInputColor(e.target.value)
              }
              placeholder='Введите цвет'
            />
          </td>
        </tr>
        <tr>
          <td>Материал дна</td>
          <td>
            <Popper
              type={DataVariant.name}
              title='Выберите материал дна'
              handleChange={setSelectedMatBottom}
              elements={materialsBottom}></Popper>
          </td>
        </tr>
        <tr>
          <td>Матерал дуг</td>
          <td>
            <Popper
              type={DataVariant.name}
              title='Выберите материал дуг'
              handleChange={setSelectedMatArc}
              elements={materialsArc}></Popper>
          </td>
        </tr>
      </table>
      <div className={`${styles.btnWrapper}`}>
        <button onClick={handleSubmit} className={`${styles.addButton}`}>
          Добавить
        </button>
      </div>
    </>
  );
};

export default ProductAdmin;
