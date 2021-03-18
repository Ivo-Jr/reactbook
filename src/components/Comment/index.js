import React from 'react';
import p2 from '../../assets/p2.png'
import './styles.css'

export default function Comment() {

  const author = 'Natacha'

  return (
    <div className="comment">

      <img className="avatar" src={p2} alt="p2"/>
      <div className="commentContent">
        <span className="nameAuthor">{author}</span>
        <span style={{fontFamily: 'Helvetica'}}> A Rocket está sempre em busca de novos talentos! Nós ficamos ligados nas pessoas que se destacam nos bootcamps. Inclusive, 80% dos profissionais da Rocket foram alunos de aguma turma dos nossos bootcamps. ;) </span>
      </div>

    </div>
  )
}