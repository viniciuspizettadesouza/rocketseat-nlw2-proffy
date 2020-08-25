import React from "react";
import whatsappIcon from "../../images/icons/whatsapp.svg";

import './styles.css'

function TeacherItem() {
  return (

    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/8235026?s=460&u=c9c93fd82530c69bdeb373d854a8d63a35bcea34&v=4"
             alt="lalala"/>
        <div>
          <strong>Vinicius Pizetta</strong>
          <span>Programação</span>
        </div>
      </header>

      <p>
        Javascript, Ruby on Rails
        <br/> <br/>
      </p>
      <footer>
        <p>Preço/hora<strong>R$ 50,00</strong></p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )

}

export default TeacherItem