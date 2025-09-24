import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Navbar from './components/Navbar'

function App() {

  return (
   <div>
   <BrowserRouter>
   <Navbar />
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/about" element={<div>About</div>} />
     <Route path="/services" element={<div>Services</div>} />
      <Route path="/projects" element={<div>Projects</div>} />
      <Route path="/contact" element={<div>Contact</div>} />
   </Routes>
   </BrowserRouter>
   </div>
  )
}

export default App
