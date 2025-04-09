import React, { useEffect, useState } from 'react'
import Navegacion from './Navegacion'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const API = import.meta.env.VITE_API_URL;

const Login = () => {
  console.log('useNavigate:', useNavigate); //
  // Un useState para username
  const [username, setUsername] = useState('');
  // Un useState para password
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // Función para manejar cambios en username
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  // Función para manejar cambios en password
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const { data } = await axios.post(
        `${API}/usuarios/login/iniciar`,
        { username, password }, // Enviamos un objeto con username y password
        { headers: { 'Content-Type': 'application/json' } }     //se va enviar en formato json
      );
      // console.log("lo que envio el servidor es "+data);
      setToken(data.token);
      console.log(data.token)
      // console.log(data.msg)
      setMessage('Token almacenado correctamente');
    } catch (error) {
      setMessage('Error en el login');
    }
  };


  // Este efecto se ejecutará cuando cambie el token
  useEffect(() => {
    if (token) {
      navigate('/inicioPerfil'); // Cambia '/inicioPerfil' por la ruta a donde quieras redirigir
    }
  }, [token, navigate]);

  return (
    <>
      <h1>Frontend para Consumo de API con JWT</h1>
      <div>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
          style={{ marginRight: '0.5rem' }}
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          style={{ marginRight: '0.5rem' }}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </>
  );
};

export default Login;