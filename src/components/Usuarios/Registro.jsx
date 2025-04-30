import React, { useState } from 'react'
import Navegacion from '../Headers/Navegacion'
const Registro = () => {

  const [username, setUsername] = useState("")
  const [edad, setEdad] = useState(0)
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Hola, ${username}!`);
  }

  const handleUsername = (e) => {
    let name = e.target.value
    setUsername(name)
  }

  const handleEdad = (e) => {
    let x = e.target.value
    setEdad(x)
  }

  const handlePassword = (e) => {
    let name = e.target.value
    setPassword(name)
  }

  return (
    <>
      <div>Registro</div>
      <Navegacion />
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            value={username}
            onChange={(e) => handleUsername(e)}
          />
        </label>
        <br />
        <label>
          Edad:
          <input
            type="number"
            value={edad}
            onChange={(e) => handleEdad(e)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="text"
            value={password}
            onChange={(e) => handlePassword(e)}
          />
        </label>
        <button type='submit'>Enviar </button>
      </form>
    </>
  )
}

export default Registro