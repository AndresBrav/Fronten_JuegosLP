import React, { useContext } from 'react'
import { TokenContext } from '../Contextos/TokenContext'
import { useNavigate } from 'react-router-dom';

export const CerrarSesion = () => {
    const { setClaveAcceso } = useContext(TokenContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        setClaveAcceso('');
        localStorage.removeItem("token");
        navigate("/")
    };
    return (
        <button onClick={handleLogout}>Cerrar Sesion</button>
    )
}
