import React, { FC, useState } from 'react';
import styles from './/OptionsAdmin.module.scss';
import axios from '../../axiosInstance';

export enum OptionVariant {
  country = 'country',
  season = 'season',
  placecount = 'placecount',
  color = 'color',
  garantee = 'garantee',
  materialArc = 'material-arc',
  materialBottom = 'material-bottom',
  // waterproofTent = 'waterproof_bottom',
  // waterproofBottom = 'водонепр. дна',
}

export enum DataVariant {
  year = 'year',
  count = 'count',
  name = 'name',
  color = 'color',
  time = 'time',
  // waterproofTent = 'waterproof_bottom',
  // waterproofBottom = 'водонепр. дна',
}

interface OptionsAdminProps {
  type: OptionVariant;
  title: string;
  label: string;
  placeholder: string;
  data: DataVariant;
  handleCreate: (data: string) => void;
}

const OptionsAdmin: FC<OptionsAdminProps> = ({
  title,
  label,
  type,
  placeholder,
  data,
  handleCreate,
}) => {
  const [inputValue, setInputValue] = useState<string>('');

  const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const submitData = async (e: React.MouseEvent<HTMLButtonElement>) => {
    let value;
    type === 'placecount' || type === 'season' || type === 'garantee'
      ? (value = Number(inputValue))
      : (value = inputValue);
    handleCreate(inputValue);
    // const response = await axios.post(`/api/${type}`, { [data]: value });
    // console.log(response);
  };

  return (
    <>
      <section>
        <h1>{title}</h1>
        <table>
          <tr>
            <td>{label}</td>
            <td>
              <input
                value={inputValue}
                onChange={changeInputHandler}
                type={
                  type === 'placecount' ||
                  type === 'season' ||
                  type === 'garantee'
                    ? 'number'
                    : 'text'
                }
                placeholder={placeholder}
              />
            </td>
          </tr>
        </table>
        <div className={`${styles.btnWrapper}`}>
          <button className={`${styles.addButton}`} onClick={submitData}>
            Добавить
          </button>
        </div>
      </section>
    </>
  );
};

export default OptionsAdmin;
