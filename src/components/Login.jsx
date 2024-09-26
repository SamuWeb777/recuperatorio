import React, { useState } from 'react'

function Login({setUser}) {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = async (e) => {
    e.preventDefault();
    // Lógica para validar el usuario...
};
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Usuario"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Contraseña"
        required
      />
      <button type="submit">Ingresar</button>
    </form>
  )
}

export default Login