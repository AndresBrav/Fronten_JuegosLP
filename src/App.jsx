import { useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Usuarios/Login';
import Registro from './components/Usuarios/Registro';
import Home from './components/Home';
import Navegacion from './components/Headers/Navegacion';
import InicioJuegos from './components/Juegos/InicioJuegos';
import { TokenProvider } from './components/Contextos/TokenProvider';
import { CerrarSesion } from './components/Usuarios/CerrarSesion';
import Juego1 from './components/Juegos/Juego1';

function App() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  
  return (
    <>
      <TokenProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/registro" element={<Registro />} />
            <Route path="/inicioPerfil" element={<InicioJuegos />} />
            <Route path="/salir" element={<CerrarSesion />} />
            <Route path="/juego1" element={<Juego1 />} />
          </Routes>
        </BrowserRouter>
      </TokenProvider>
    </>
  );
}

export default App;
