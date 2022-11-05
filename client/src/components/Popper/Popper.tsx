import React, { FC } from 'react';
import { IOption } from '../../types/types';
import { DataVariant } from '../OptionsAdmin/OptionsAdmin';

interface PopperProps {
  title: string;
  elements: IOption[];
  type: DataVariant;
  handleChange: (id: string) => void;
  value: string;
}

const Popper: FC<PopperProps> = ({
  title,
  elements,
  type,
  value,
  handleChange,
}) => {
  return (
    <select
      value={value}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
        handleChange(e.target.value)
      }>
      <option value=''>{title}</option>
      {elements?.map((element, index) => (
        <option key={index} value={element.id}>
          {element[type]}
        </option>
      ))}
    </select>
  );
};

export default Popper;
