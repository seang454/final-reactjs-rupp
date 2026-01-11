
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './page/Home'
import DashboardPage from './page/DashBoard'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/dashboard" element={<DashboardPage/>} />
    </Routes>
      
    </>
  )
}

export default App
