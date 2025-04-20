import React from 'react'
import { useLocation } from 'react-router-dom';
const InicioJuegos = () => {
  const location = useLocation();
  const nombre = location.state?.token;
  return (
    <div>
      <h1>
        InicioJuegos
      </h1>
      <h1>el inicio es: {nombre}</h1>
    </div>
  )
}

export default InicioJuegos