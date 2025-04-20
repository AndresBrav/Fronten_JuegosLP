// Login.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API = import.meta.env.VITE_API_URL;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const [token, setToken] = useState('')
  // const { token, setToken } = useToken(); // Obtén el token del contexto

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
      setToken(data.token); // Almacena el token en el contexto
      console.log(data.token)
      setMessage('Token almacenado correctamente');
    } catch (error) {
      setMessage('Error en el login');
    }
  };

  useEffect(() => {
    if (token) { // Usa el token del contexto
      navigate('/inicioPerfil', { state: { token:token } });
    }
  }, [token,navigate]);

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
      {message && <p>{message}</p>}
    </>
  );
};

export default Login;
