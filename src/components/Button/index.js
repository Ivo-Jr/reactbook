import React from 'react';
import { CgProfile } from 'react-icons/cg'
import './styles.css'

export default function Button() {
  return(
      <div className="perfil">
        <button className="button" type="button">Meu Perfil</button>
        <CgProfile />
      </div>
  );
}
