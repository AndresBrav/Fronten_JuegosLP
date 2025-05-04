import React, { useContext, useEffect, useState } from 'react'
import Navegacion from '../Headers/Navegacion'
import { useNavigate } from 'react-router-dom';
import { TokenContext } from '../Contextos/TokenContext';
import axios from 'axios';
const API = import.meta.env.VITE_API_URL;
const Registro = () => {
  const [username, setUsername] = useState('');
  const [edad, setEdad] = useState('')
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  // const [token, setToken] = useState('')
  const { claveAcceso, setClaveAcceso } = useContext(TokenContext);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEdadChange = (e)=>{
    setEdad(e.target.value)
  }

  useEffect(() => {
    console.log(edad)
  },[edad])

  // const handleLogin = async () => {
  //   try {
  //     const { data } = await axios.post(
  //       `${API}/usuarios/login/iniciar`,
  //       { username, password },
  //       { headers: { 'Content-Type': 'application/json' } }
  //     );
  //     // setToken(data.token); // Almacena el token en el contexto
  //     setClaveAcceso(data.token)
  //     console.log(data.token)
  //     setMessage('Token almacenado correctamente');
  //   } catch (error) {
  //     setMessage('Error en el login');
  //   }
  // };

  const handleRegistro = () => {
  }

  useEffect(() => {
    if (claveAcceso) { // Usa el token del contexto
      navigate('/inicioPerfil');
    }
  }, [claveAcceso, navigate]);

  return (

    <div className='flex-container'>

      <input
        className='flex-input'
        type="text"
        placeholder="Ingresar Usuario"
        value={username}
        onChange={handleUsernameChange}
        style={{ marginRight: '0.5rem' }}
      />

      <select
        className="flex-input"
        value={edad}  // Usamos el mismo estado para manejar el valor seleccionado
        onChange={handleEdadChange}  // Usamos el mismo manejador de cambio
      >
        <option value="Selecciona tu Edad" >Selecciona tu Edad</option>
        <option value="17">17 años</option>
        <option value="18">18 años</option>
        <option value="19">19 años</option>
        <option value="20">20 años</option>
        <option value="21">21 años</option>
        <option value="22">22 años</option>
        <option value="23">23 años</option>
        {/* Puedes agregar más opciones aquí */}
      </select>

      <input
        className='flex-input'
        type="text"
        placeholder="Ingresar Contraseña"
        value={password}
        onChange={handlePasswordChange}
        style={{ marginRight: '0.5rem' }}
      />
      <button className='flex-button' onClick={handleRegistro}> <p>Registrarse</p></button>
    </div>

  );


}

export default Registro