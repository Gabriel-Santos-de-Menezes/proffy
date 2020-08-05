import React, { InputHTMLAttributes } from "react";

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string
    label: string

}
/* Pega todas as propiedades que um input pode receber e coloca
    em um sprad ... e joga dentro do input  */

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest} />
    </div>
  );
}

export default Input;
