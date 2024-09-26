import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import MovieList from './components/MovieList'
import Login from './components/Login'
import Movie from './pages/Movie'


function App() {
  const [user, setUser] = useState(null)

  return (
    <BrowserRouter>
      <Header user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={user ? <MovieList /> : <Login setUser={setUser} />} />
        <Route path="/movie/:id" element={<Movie/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
