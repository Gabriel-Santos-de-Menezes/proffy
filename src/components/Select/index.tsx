import React, { SelectHTMLAttributes } from "react";

import './styles.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string
    label: string
    options: Array<{
      value:string;
      label:string;
    }>;
}
/* Pega todas as propiedades que um Select pode receber e coloca
    em um sprad ... e joga dentro do Select  */

const Select: React.FC<SelectProps> = ({ label, name, options, ...rest }) => {
  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select id={name} {...rest}>
        <option value="" disabled defaultValue="" hidden>Selecione uma opção</option>
        {options.map(option => {
          return <option key={option.value} value={option.value}>{option.label}</option>
        })}
      </select>
    </div>
  );
}

export default Select;
