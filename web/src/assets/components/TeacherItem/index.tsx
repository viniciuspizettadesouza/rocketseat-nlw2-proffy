import React from "react";
import whatsappIcon from "../../images/icons/whatsapp.svg";

import './styles.css'

function TeacherItem() {
  return (

    <article className="teacher-item">
      <header>
        <img src="../../images/icons/study.svg" alt="lalala"/>
        <div>
          <strong>Vinicius Pizetta</strong>
          <span>Geografia</span>
        </div>
      </header>

      <p>
        lasdlasldlasldladlasldlasldlalsdlasdl
        <br/> <br/>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="whatsapp"/>
        Entrar em contato
      </button>
    </article>
  )

}

export default TeacherItem