import React, { FC, useState } from 'react';
import styles from './ProductInfo.module.scss';
import bootstrap from '../../assets/bootstrap.module.scss';
import Slider from '../Slider/Slider';
import { Link } from 'react-router-dom';
import { IOption, ITent } from '../../types/types';

interface ProductInfoProps {
  id: number;
  tent: ITent | undefined;
  garanties: IOption[];
  countries: IOption[];
  matArc: IOption[];
  matBot: IOption[];
  placecounts: IOption[];
  seasons: IOption[];
  colors: IOption[];
}

const ProductInfo: FC<ProductInfoProps> = ({
  id,
  tent,
  countries,
  matArc,
  matBot,
  placecounts,
  seasons,
  garanties,
  colors,
}) => {
  const [currentImageID, setCurrentImageID] = useState<number>(0);

  return (
    <>
      <section className={`${styles.cardInfo} ${bootstrap.row}`}>
        <div
          className={`${bootstrap['col-12']} ${bootstrap['col-xl-1']} ${bootstrap['col-md-8']} ${bootstrap['order-xl-0']} ${bootstrap['order-3']}  ${bootstrap['order-md-3']}`}>
          <div className={`${styles.thumbs}`}>
            <ul>
              {tent?.photoUrls.map((imagePath, index) => (
                <li key={index}>
                  <img
                    src={'http://localhost:5050/' + imagePath}
                    alt='thumbnail'
                    onClick={() => {
                      setCurrentImageID(index);
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className={`${bootstrap['col-md-8']} ${bootstrap['col-xl-7']} ${bootstrap['col-12']}  `}>
          {tent && (
            <Slider
              imagesPaths={tent?.photoUrls.map(
                (image) => ('http://localhost:5050/' + image) as string,
              )}
              currentImageID={currentImageID}
              setCurrentImageID={setCurrentImageID}
            />
          )}
        </div>
        <div
          className={`${bootstrap['col-md-4']} ${bootstrap['col-12']} ${bootstrap['order-last']} ${bootstrap['order-md-2']}`}>
          <div className={`${styles.info}`}>
            <div className={`${styles.title}`}>
              <h2>{tent?.manufacturer}</h2>

              <img
                src='/images/bookmark-dis2.svg'
                alt=''
                className={`${styles.bookmark}`}
              />
            </div>
            <div className={`${styles.priceInfo}`}>
              <h3>{tent?.name}</h3>
              <p>Артикль: {tent?.article}</p>
              <h1 className={`${styles.price}`}>{tent?.price} ₽</h1>
              <p>
                цвет:{' '}
                {colors.filter((color) => color.id === tent?.idColor)[0]?.name}
              </p>
              <div className={`${styles.hrefs}`}>
                <a href='#chars'>характеристики</a>
                <Link to={'/edit/' + id}>редактировать</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.description} ${bootstrap.row}`}>
        <div className={`${bootstrap['col-12']} ${bootstrap['col-lg-8']}`}>
          <h1>ОПИСАНИЕ</h1>
          <p>{tent?.description}</p>
          <ul>
            {tent?.paragraphs.map((paragraph, index) => (
              <li key={index}>
                <h4>{paragraph.header}</h4>
                <p>{paragraph.content}</p>
              </li>
            ))}
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
              <td>
                {
                  garanties.filter(
                    (garantee) => garantee.id === tent?.idGarantee,
                  )[0]?.time
                }{' '}
                года
              </td>
            </tr>
            <tr>
              <td>Страна производства</td>
              <td>
                {
                  countries.filter((contry) => contry.id === tent?.idCountry)[0]
                    ?.name
                }
              </td>
            </tr>
            <tr>
              <td>Сезон</td>
              <td>
                {
                  seasons.filter((season) => season.id === tent?.idSeason)[0]
                    ?.year
                }
              </td>
            </tr>
          </table>
          <table>
            <tr>
              <h3>Технические характеристики</h3>
            </tr>
            <tr>
              <td>Количество мест</td>
              <td>
                {
                  placecounts.filter(
                    (placecount) => placecount.id === tent?.idPlacecount,
                  )[0]?.count
                }
              </td>
            </tr>
            <tr>
              <td>Водонепроницаемость дна, мм.в.ст.</td>
              <td>{tent?.waterproofBot}</td>
            </tr>
            <tr>
              <td>Водонепроницаемость тента, мм.в.ст.</td>
              <td>{tent?.waterproofAwn}</td>
            </tr>
            <tr>
              <td>Материал дна</td>
              <td>
                {
                  matBot.filter(
                    (material) => material.id === tent?.idMaterialBottom,
                  )[0]?.name
                }
              </td>
            </tr>
            <tr>
              <td>Материал дуг</td>
              <td>
                {
                  matArc.filter(
                    (material) => material.id === tent?.idMaterialArc,
                  )[0]?.name
                }
              </td>
            </tr>
          </table>
        </div>
      </section>
    </>
  );
};

export default ProductInfo;
