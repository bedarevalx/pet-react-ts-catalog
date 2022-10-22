import React from 'react';
import ProductAdmin from '../ProductAdmin/ProductAdmin';
import styles from './/EditPanel.module.scss';

const EditPanel = () => {
  return (
    <div className={`${styles.adminList}`}>
      <ProductAdmin></ProductAdmin>
    </div>
  );
};

export default EditPanel;
