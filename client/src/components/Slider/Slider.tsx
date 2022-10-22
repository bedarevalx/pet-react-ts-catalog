import React from 'react';
import styles from './/Slider.module.scss';

const Slider = () => {
  return (
    <div className={`${styles.slider} ${styles.card}`}>
      <img
        className={`${styles.item}`}
        src='/images/products/tents/tent3.png'></img>
      <div
        className={`${styles.item}`}
        // style="
        //   background-image: url('/assets/images/products/tents/tent3.png');
        // "
      ></div>
      <div
        className={`${styles.item}`}
        // style="
        //   background-image: url('/assets/images/products/tents/tent1.png');
        // "
      ></div>
      <a
        className={`${styles.arrow} ${styles.previous}`}
        // onClik="previousSlide()"
      >
        <span>{`<`}</span>
      </a>
      <a
        className={`${styles.arrow} ${styles.next}`}

        // onClik="nextSlide()"
      >
        <span>{`>`}</span>
      </a>
    </div>
  );
};

export default Slider;
