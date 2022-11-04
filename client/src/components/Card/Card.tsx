import React, { FC } from 'react';
import styles from './/Card.module.scss';
import bootstrap from '../../assets/bootstrap.module.scss';
import { Link } from 'react-router-dom';

interface CardProps {
  name: string;
  price: number;
  id: number | undefined;
  imagePath: string;
}

const Card: FC<CardProps> = ({ name, price, id, imagePath }) => {
  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };
  return (
    <Link
      to={'/product/' + id}
      className={`${styles.productCard} ${bootstrap['col-sm-6']}`}>
      <div className={`${styles.productImage}`}>
        <img src={'http://localhost:5050/' + imagePath} alt='tent-picture' />
      </div>
      <div className={`${styles.productInfo}`}>
        <h5>{name}</h5>
        <b>{price}</b>
      </div>
      <img
        onClick={handleBookmarkClick}
        className={`${styles.bookmark}`}
        src='images/bookmark-dis2.svg'
        alt=''
      />
    </Link>
  );
};

export default Card;
