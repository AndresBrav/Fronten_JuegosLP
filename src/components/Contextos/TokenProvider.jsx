import { useEffect, useState } from "react";
import { TokenContext } from "./TokenContext";

export function TokenProvider({ children }) {

    const [claveAcceso, setClaveAcceso] = useState('');


    // Cargar el token desde localStorage al iniciar la app si ya se guardo en el navegador la clave lo recarga
    useEffect(() => {
        const savedToken = localStorage.getItem("token");
        if (savedToken) {
            setClaveAcceso(savedToken);
        }
    }, []);

    // Guardar en localStorage cada vez que cambie el token
    useEffect(() => {
        if (claveAcceso) {
            localStorage.setItem("token", claveAcceso);
        }
    }, [claveAcceso]);

    return (
        <TokenContext.Provider value={{ claveAcceso, setClaveAcceso }}>
            {children}
        </TokenContext.Provider>
    );
}