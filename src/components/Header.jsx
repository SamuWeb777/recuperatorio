import React from 'react'

const Header = ({user, setUser}) => {
    const handleLogout = () => {
        setUser(null);
        window.localStorage.removeItem('usuario')
    }
  return (
    <header>
      <h1>TRAILERFLIX</h1>
      {user ? (
        <div>
          <span>Bienvenido, {user}</span>
          <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
      ) : null}
    </header>
  )
}

export default Header