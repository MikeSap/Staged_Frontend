import React, { useEffect } from 'react';
import { useHistory } from "react-router";
import { logout } from '../actions/Auth'
import { popBandManage } from '../actions/Bands'
import { connect } from 'react-redux'
import navLogo  from '../assets/navLogo.png'

import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Image from 'react-bootstrap/Image'
import UserIcon from '../assets/usericonwhite.png'


const NavBar = (props) => {

    const history = useHistory()

    const { user, popBandManage } = props

    const signOut = () => {
        props.logout()
    }

    useEffect(() => {
    }, [user])

    const manageBand = (band) => {
        popBandManage(band)
        history.push(`/manage_band/${band.id}`)
    }

    const loggedInNav = () => {
        return <Nav className="mr-auto">        
          <Nav.Link href="/bands">Bands</Nav.Link>
          <Nav.Link href="/merch">Merch</Nav.Link>
          <Nav.Link href="/music">Music</Nav.Link>
          <Nav.Link href="/shows">Shows</Nav.Link>
          {/* can simplify this to still say manage bands and only have the register link if there are no bands */}
          {
            user.bands ? <NavDropdown title="Manage Bands" id="band-management">
            {user.bands.map( band => <NavDropdown.Item  onClick={() => manageBand(band)}>{band.name}</NavDropdown.Item>)}
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={() => history.push(`/band_registration`)}>Register a Band</NavDropdown.Item>
            </NavDropdown>
            : <Nav.Link href="/band_registration">Register a Band</Nav.Link>
          } 

          {/* <Image className="mr-auto" src= {UserIcon} roundedCircle/>          */}
          <Button className="mr-auto" variant="outline-danger" size='sm' onClick={() => signOut()} primary>Sign Out</Button>           
        </Nav>
    }

    return (       
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Navbar.Brand href="/"><img src={navLogo} alt="Staged Logo" /></Navbar.Brand>
        <Navbar.Brand href="/">Staged</Navbar.Brand>                         
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav"> 
          
            {!user.id ? null :
            loggedInNav()}
          </Navbar.Collapse>
      </Navbar>
    )
}

const readAccess = state => {
   return {
       user: state.user
   }
}


export default connect(readAccess, { logout, popBandManage })(NavBar)