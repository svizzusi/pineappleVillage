import './App.css'
import {Routes, Route} from 'react-router-dom'
import NavBar from './layout/NavBar/NavBar'
import Footer from './layout/Footer/Footer'
import Home from './components/Home/Home.jsx'
import Menu from './components/Menu/Menu.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'

function App() {
  

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/menu' element={<Menu />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
