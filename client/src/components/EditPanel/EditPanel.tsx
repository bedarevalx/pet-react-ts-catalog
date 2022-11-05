import React, { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../axiosInstance';
import { ITent } from '../../types/types';
import ProductAdmin from '../ProductAdmin/ProductAdmin';
import styles from './/EditPanel.module.scss';
import adminStyles from '../AdminPanel/AdminPanel.module.scss';

const EditPanel = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tent, setTent] = useState<ITent | undefined>();
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchTent(id: number) {
      const response = await axios.get('/api/tent/' + id);
      setTent(response.data);
      setIsLoading(false);
    }

    fetchTent(Number(id));
  }, []);

  const handleDelete = async () => {
    const response = await axios.delete('/api/tent?&id=' + id);
    if (response.status === 200) {
      alert('Success Deleted!');
      navigate('/');
    } else {
      alert('Error with delete');
    }
  };

  return (
    <div className={`${adminStyles.adminList}`}>
      {isLoading ? (
        <p>Загрузка...</p>
      ) : (
        <>
          <ProductAdmin product={tent}></ProductAdmin>
          <div className={`${styles.delWrapper}`}>
            <button onClick={handleDelete}>Удалить</button>
          </div>
        </>
      )}
    </div>
  );
};

export default EditPanel;
