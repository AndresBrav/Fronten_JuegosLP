// Login.jsx
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TokenContext } from '../Contextos/TokenContext';

const API = import.meta.env.VITE_API_URL;
// 
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  // const [token, setToken] = useState('')
  const { claveAcceso, setClaveAcceso } = useContext(TokenContext);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const { data } = await axios.post(
        `${API}/usuarios/login/iniciar`,
        { username, password },
        { headers: { 'Content-Type': 'application/json' } }
      );
      // setToken(data.token); // Almacena el token en el contexto
      setClaveAcceso(data.token)
      console.log(data.token)
      setMessage('Token almacenado correctamente');
    } catch (error) {
      setMessage('Error en el login');
    }
  };

  const handleRegistro = () => {
    navigate('/registro');
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
        placeholder="Username"
        value={username}
        onChange={handleUsernameChange}
        style={{ marginRight: '0.5rem' }}
      />
      <input
        className='flex-input'
        type="text"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
        style={{ marginRight: '0.5rem' }}
      />
      <button className='flex-button' onClick={handleLogin}> <p>Iniciar Sesion</p></button>
      <button className='flex-button' onClick={handleRegistro}> <p>Registrarse</p></button>
      {message && <p>{message}</p>}
    </div>

  );
};

export default Login;
