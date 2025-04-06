import { useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Registro from './components/Registro';
import Home from './components/Home';
import Navegacion from './components/Navegacion';
import InicioJuegos from './components/Juegos/InicioJuegos';


function App() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [token, setToken] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const { data } = await axios.post('http://localhost:3000/usuarios/login/iniciar', formData, {
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(data);
      setToken(data.token);
      setMessage('Token almacenado correctamente');
    } catch (error) {
      setMessage('Error en el login');
    }
  };

  const fetchProtected = async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/usuarios/protected/usuario', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
        },
      });
      setMessage(data);
    } catch (error) {
      setMessage('Error al obtener ruta protegida');
    }
  };

  const fetchHola = async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/usuarios/hola/usuario', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
        },
      });
      setMessage(data);
    } catch (error) {
      setMessage('Error al obtener la información');
    }
  };

  const handleLogout = () => {
    setToken('');
    setMessage('Sesión cerrada');
  };

  return (
    // <div style={{ padding: '2rem' }}>
    //   <h1>Frontend para Consumo de API con JWT</h1>
    //   <div style={{ marginBottom: '1rem' }}>
    //     <h2>Login</h2>
    //     <input
    //       type="text"
    //       name="username"
    //       placeholder="Username"
    //       value={formData.username}
    //       onChange={handleChange}
    //       style={{ marginRight: '0.5rem' }}
    //     />
    //     <input
    //       type="text"
    //       name="password"
    //       placeholder="Password"
    //       value={formData.password}
    //       onChange={handleChange}
    //       style={{ marginRight: '0.5rem' }}
    //     />
    //     <button onClick={handleLogin}>Login</button>
    //   </div>

    //   <div style={{ marginBottom: '1rem' }}>
    //     <h2>Rutas Protegidas</h2>
    //     <button onClick={fetchProtected} style={{ marginRight: '0.5rem' }}>
    //       /protected
    //     </button>
    //     <button onClick={fetchHola} style={{ marginRight: '0.5rem' }}>
    //       /hola
    //     </button>
    //     <button onClick={handleLogout}>Cerrar Sesión</button>
    //   </div>

    //   <div>
    //     <h3>Respuesta del Servidor:</h3>
    //     <p>{message}</p>
    //   </div>
    // </div>
    <>
      {/* <Navegacion/> */}
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/inicioPerfil" element={<InicioJuegos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
