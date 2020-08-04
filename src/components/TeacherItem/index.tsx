import React from "react";

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://pbs.twimg.com/profile_images/1286990813583597568/YBUm8cgA_400x400.jpg"
          alt="Gabriel Santos"
        />
        <div>
          <strong>Gabriel Santos</strong>
          <span>Física</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de física avançada.
        <br />
        <br />
        Apaixonado por física e por fórmulas malucas que poucos entendem. Mais
        de 10.000 alunos inpactados com sua didática.
      </p>

      <footer>
        <p>
          preço/hora
          <strong>R$ 100,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
