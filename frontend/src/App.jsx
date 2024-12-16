
import { Route, Routes } from 'react-router-dom'
import './App.css'
import CreatePage from './pages/CreatePage.jsx'
import HomePage from './pages/HomePage.jsx'
import Navbar from './components/Navbar.jsx'

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/create' element={<CreatePage />} />

    </Routes>
    </>



  )
}

export default App
