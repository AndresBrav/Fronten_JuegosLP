import React from 'react'
import { Link } from 'react-router-dom'

const Navegacion = () => {
    return (
        <nav>
            <ul>
                <li><Link className='colorLink' to="/">Home</Link></li>
                <li><Link className='colorLink' to="/login">Login</Link></li>
                <li><Link className='colorLink' to="/registro">Registro</Link></li>
            </ul>
        </nav>
    )
}

export default Navegacion