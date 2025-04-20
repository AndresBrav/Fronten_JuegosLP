import React, { useContext } from 'react'
import { TokenContext } from '../Contextos/TokenContext';
const Juego1 = () => {
    const { claveAcceso, setClaveAcceso } = useContext(TokenContext);

    return (
        <>
            <div>Este es el juego 1</div>
            <h1>el inicio es: {claveAcceso}</h1>
        </>
    )
}

export default Juego1