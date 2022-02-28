import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import './Navbar.css'

function NavBar() {
return (
<div>

    <Navbar className='navbar'>
        <Container>
            <Navbar.Brand href="/">
                <img src="/Logo STB SICAR.png" alt="" width="70" height="45" />
            </Navbar.Brand>
            <Navbar.Brand href="/">STB</Navbar.Brand>
            <Nav   className="me-auto">
                <Nav.Link style={{color:"white"}} href="/NousConnaitre" className='navlink'>Présentation</Nav.Link>
                <Nav.Link style={{color:"white"}}  href="/NosFonds" className='navlink'>Nos fonds</Nav.Link>
                <Nav.Link style={{color:"white"}} href="/ResponsabiliteSociale" className='navlink'>Responsabilité Sociale</Nav.Link>
                <Nav.Link style={{color:"white"}}  href="/NosRealisations" className='navlink'>Nos réalisations</Nav.Link>
                <Nav.Link style={{color:"white"}} href="/Actualites" className='navlink'>Actualités</Nav.Link>
                <Nav.Link style={{color:"white"}} href="/Contact" className='navlink'>Contact</Nav.Link>
                <Nav.Link style={{color:"white"}} href="/Lexique" className='navlink'>Lexique</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
</div>
)}

export default NavBar