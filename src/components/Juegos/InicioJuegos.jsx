import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom';
import { TokenContext } from '../Contextos/TokenContext';

const InicioJuegos = () => {
  // const location = useLocation();
  // const nombre = location.state?.token;
  const { claveAcceso, setClaveAcceso } = useContext(TokenContext);

  return (
    <div>
      <h1>
        InicioJuegos
      </h1>
      <h1>el inicio es: {claveAcceso}</h1>
    </div>
  )
}

export default InicioJuegos