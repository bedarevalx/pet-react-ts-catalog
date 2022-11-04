import React, { FC, useState } from 'react';
import styles from './/Slider.module.scss';

interface SliderProps {
  imagesPaths: string[];
  currentImageID: number;
  setCurrentImageID(value: number): void;
}

const Slider: FC<SliderProps> = ({
  imagesPaths,
  currentImageID,
  setCurrentImageID,
}) => {
  const handleNextClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    currentImageID === imagesPaths.length - 1
      ? setCurrentImageID(0)
      : setCurrentImageID(currentImageID + 1);
  };
  const handlePrevClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    currentImageID === 0
      ? setCurrentImageID(imagesPaths.length - 1)
      : setCurrentImageID(currentImageID - 1);
  };

  return (
    <div className={`${styles.slider} ${styles.card}`}>
      <img className={`${styles.item}`} src={imagesPaths[currentImageID]}></img>
      <button
        className={`${styles.arrow} ${styles.previous}`}
        onClick={handlePrevClick}>
        <span>{`<`}</span>
      </button>
      <button
        className={`${styles.arrow} ${styles.next}`}
        onClick={handleNextClick}>
        <span>{`>`}</span>
      </button>
    </div>
  );
};

export default Slider;
