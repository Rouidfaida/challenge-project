import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import './Navbar.css'

function NavBar() {
return (
<div className='bod'>
<img className='img1'  src='/images/LOGOwhite.png' alt="" width="312px" height="164px"  />

    <Navbar className='navbar'>
        <Container>
            <Navbar.Brand href="/">
            </Navbar.Brand>
            <Nav   className="me-auto">
                <Nav.Link style={{color:"white"}} href="/NousConnaitre" className='navlink'>Nous Connaitre</Nav.Link>
                <Nav.Link style={{color:"white"}}  href="/NosFonds" className='navlink'>Nos fonds</Nav.Link>
                <Nav.Link style={{color:"white"}} href="/ResponsabiliteSociale" className='navlink'>Responsabilité Sociale</Nav.Link>
                <Nav.Link style={{color:"white"}}  href="/NosRealisations" className='navlink'>Nos réalisations</Nav.Link>
                <Nav.Link style={{color:"white"}} href="/Actualites" className='navlink'>Actualités</Nav.Link>
                <Nav.Link style={{color:"white"}} href="/Contact" className='navlink'>Contact</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    <img className='img2'  src='/images/buu-01 (1).jpg' alt="" width="312px" height="164px"  />
  <div className='bod2'>
    <h1 className='title11'>Présentation STB SICAR</h1>
    <p className='parag1'>La STB SICAR, filiale de la STB BANK, a été créée le 23 mars 1998. C'est une société d’investissement à capital risque qui a pour objectif la participation, pour son propre compte ou pour le compte de bailleurs de fonds au renforcement des opportunités d’investissement et des fonds propres des entreprises. Elle permet de procurer aux entreprises les fonds nécessaires à leur développement et à leur croissance avec obligation de sortie.</p>
    <button class="button-19" role="button">Nous Contacter</button>
    </div>
</div>
)}

export default NavBar