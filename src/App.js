import React from 'react'
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import NavBar from './NavBar';
import Footer from './Footer'
import Home from './components/Home'
import NousConnaitre from './components/NousConnaitre'
import NosFonds from './components/NosFonds'
import ResponsabiliteSociale from './components/ResponsabiliteSociale'
import NosRealisations from './components/NosRealisation'
import Actualites from './components/Actualites'
import Contact from './components/Contact'
import Lexique from './components/Lexique'


function App() {
  return (
  <div className='bod'>
    <NavBar/>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/NousConnaitre" element={<NousConnaitre/>} />
        <Route path="/NosFonds" element={<NosFonds/>} />
        <Route path="/ResponsabiliteSociale" element={<ResponsabiliteSociale/>}/>
        <Route path="/NosRealisations" element={<NosRealisations/>}/>
        <Route path="/Actualites" element={<Actualites/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Lexique" element={<Lexique/>}/>
      </Routes>
    </BrowserRouter>
    <Footer />
  </div>
  );
}

export default App;
