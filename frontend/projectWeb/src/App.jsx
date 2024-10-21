import { Routes,Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import SignUp from './pages/SignUp'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'

function App() {
  

  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/homePage' element={<HomePage />} />
    </Routes>
    
    </>
  )
}

export default App
