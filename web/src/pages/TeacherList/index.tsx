import React from 'react'

import PageHeader from "../../assets/components/PageHeader";

import './styles.css'
import TeacherItem from "../../assets/components/TeacherItem";
import Input from "../../assets/components/input";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <Input name="subject" label="Matéria"/>

          <Input name="week_day" label="Dia da semana"/>

          <Input type="time" name="time" label="Hora"/>
        </form>
      </PageHeader>

      <main>
        <TeacherItem/>
        <TeacherItem/>
        <TeacherItem/>
      </main>
    </div>
  )
}

export default TeacherList