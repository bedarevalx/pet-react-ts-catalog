import React, { FC, useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { IParagraph, ITent } from '../../types/types';
import Popper from '../Popper/Popper';
import styles from './/ProductAdmin.module.scss';
import { DataVariant } from '../OptionsAdmin/OptionsAdmin';
import { createTent, editTent } from '../../store/reducers/TentSlice';
import { useParams } from 'react-router-dom';
import useFileLoad from '../../hooks/useFileLoad';
import useGetOptions from '../../hooks/useGetOptions';

interface ProductAdminProps {
  product?: ITent | undefined;
}

const ProductAdmin: FC<ProductAdminProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  //store data
  const {
    garanties,
    countries,
    colors,
    materialsArc,
    materialsBottom,
    placecounts,
    seasons,
  } = useGetOptions();

  //input states
  const [inputParagraphsCount, setInputParagraphsCount] = useState<number>(
    product ? product?.paragraphs?.length : 1,
  );
  const [inputName, setInputName] = useState(product ? product.name : '');
  const [inputManufacturer, setInputManufacturer] = useState(
    product ? product.manufacturer : '',
  );
  const [inputArticle, setInputArticle] = useState(
    product ? product.article : '',
  );
  const [inputDescription, setInputDescription] = useState(
    product ? product.description : '',
  );
  const [inputWaterproofBot, setInputWaterproofBot] = useState(
    product ? product.waterproofBot : '',
  );
  const [inputWaterproofAwn, setInputWaterproofAwn] = useState(
    product ? product.waterproofAwn : '',
  );
  const [inputPrice, setInputPrice] = useState(product ? product.price : '');

  //select states
  const [selectedGarantee, setSelectedGarantee] = React.useState(
    product ? product.idGarantee : '',
  );
  const [selectedCountry, setSelectedCountry] = React.useState(
    product ? product.idCountry : '',
  );
  const [selectedMatArc, setSelectedMatArc] = React.useState(
    product ? product.idMaterialArc : '',
  );
  const [selectedMatBottom, setSelectedMatBottom] = React.useState(
    product ? product.idMaterialBottom : '',
  );
  const [selectedPlacecount, setSelectedPlacecount] = React.useState(
    product ? product.idPlacecount : '',
  );
  const [selectedColor, setSelectedColor] = React.useState(
    product ? product.idColor : '',
  );
  const [selectedSeason, setSelectedSeason] = React.useState(
    product ? product.idSeason : '',
  );

  //refs
  const paragraphsRef = useRef<HTMLTableCellElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { uploadedFiles, onFileInputChange, fetchImages, handleDeleteImage } =
    useFileLoad(product?.photoUrls);

  useEffect(() => {
    fetchImages();
  }, []);

  const handleSubmit = () => {
    const paragraphs: IParagraph[] = [];
    if (paragraphsRef.current) {
      const items = Array.from(
        paragraphsRef.current.children,
      ) as unknown as HTMLCollectionOf<HTMLInputElement>;

      for (let i = 0; i < items.length - 1; i += 2) {
        paragraphs.push({
          header: items[i].value,
          content: items[i + 1].value,
        });
      }
    }
    const newTent: ITent = {
      article: inputArticle,
      manufacturer: inputManufacturer,
      name: inputName,
      price: Number(inputPrice),
      paragraphs: paragraphs,
      description: inputDescription,
      waterproofBot: Number(inputWaterproofBot),
      waterproofAwn: Number(inputWaterproofAwn),
      idGarantee: selectedGarantee,
      idPlacecount: selectedPlacecount,
      idCountry: selectedCountry,
      idMaterialBottom: selectedMatBottom,
      idMaterialArc: selectedMatArc,
      idSeason: selectedSeason,
      idColor: selectedColor,
      photoUrls: uploadedFiles,
    };

    product
      ? dispatch(editTent({ tent: newTent, id: id }))
      : dispatch(createTent(newTent));
  };

  return (
    <>
      <h1>{!product ? 'Добавить новую палатку' : 'Редактирование'}</h1>
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
        <tr>
          <td>Цена</td>
          <td>
            <input
              type='number'
              value={inputPrice}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInputPrice(e.target.value)
              }
              placeholder='Введите цену'
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
                accept='image/png, image/gif, image/jpeg'
                className={`${styles.fileLoad}`}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  onFileInputChange(e.target.files)
                }
                placeholder='Введите значение'
                multiple
              />
            </div>
            <div className={`${styles.uploadedPhotos}`}>
              {uploadedFiles.map((photo, index) => (
                <img
                  src={photo}
                  alt=''
                  onClick={() => handleDeleteImage(index)}
                />
              ))}
            </div>
          </td>
        </tr>
        <tr>
          <td>Описание</td>
          <td>
            <textarea
              value={inputDescription}
              rows={4}
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
              .map((count, index) => {
                return (
                  <>
                    <input
                      className={`${styles.headerList}`}
                      type='text'
                      placeholder='Введите подзаголовок'
                      defaultValue={
                        product ? product?.paragraphs[index]?.header : ''
                      }
                    />
                    <textarea
                      rows={4}
                      placeholder='Введите пункт описания продукта'
                      defaultValue={
                        product ? product?.paragraphs[index]?.content : ''
                      }></textarea>
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
              value={selectedGarantee}
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
              value={selectedCountry}
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
              value={selectedSeason}
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
              value={selectedPlacecount}
              elements={placecounts}></Popper>
          </td>
        </tr>

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
            <Popper
              type={DataVariant.name}
              title='Выберите цвет'
              handleChange={setSelectedColor}
              value={selectedColor}
              elements={colors}></Popper>
          </td>
        </tr>
        <tr>
          <td>Материал дна</td>
          <td>
            <Popper
              type={DataVariant.name}
              title='Выберите материал дна'
              handleChange={setSelectedMatBottom}
              value={selectedMatBottom}
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
              value={selectedMatArc}
              elements={materialsArc}></Popper>
          </td>
        </tr>
      </table>
      <div className={`${styles.btnWrapper}`}>
        <button onClick={handleSubmit} className={`${styles.addButton}`}>
          {product ? 'Сохранить' : 'Добавить'}
        </button>
      </div>
    </>
  );
};

export default ProductAdmin;
