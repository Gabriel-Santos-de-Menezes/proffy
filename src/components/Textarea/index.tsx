import React, { TextareaHTMLAttributes } from "react";

import './styles.css';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string
    label: string

}
/* Pega todas as propiedades que um Textarea pode receber e coloca
    em um sprad ... e joga dentro do Textarea  */

const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest} />
    </div>
  );
}

export default Textarea;
