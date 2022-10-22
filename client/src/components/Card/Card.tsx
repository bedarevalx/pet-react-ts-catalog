import React from 'react';
import styles from './/Card.module.scss';
import bootstrap from '../../assets/bootstrap.module.scss';
import { Link } from 'react-router-dom';

const Card = () => {
  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };
  return (
    <Link
      to={'/product/1'}
      className={`${styles.productCard} ${bootstrap['col-sm-6']}`}>
      <div className={`${styles.productImage}`}>
        <img src='images/products/tents/tent1.png' alt='tent-picture' />
      </div>
      <div className={`${styles.productInfo}r`}>
        <h5>Палатка</h5>
        <b>19200 Р.</b>
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
