import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import About from './pages/About'
import Men from './pages/Men'
import Women from './pages/Women'
import Register from './pages/Register'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Router>
  <Navbar/>
  <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/men' element={<Men/>}/>
      <Route path='/women' element={<Women/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
  </div>
  <Footer/>
</Router>
    </>
  )
}

export default App
