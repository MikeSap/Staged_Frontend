import React, { useEffect } from 'react';
import { useHistory } from "react-router";
import { logout } from '../actions/Auth'
import { popBandManage } from '../actions/Bands'
import { connect } from 'react-redux'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'


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
        return <>        
        <Col><Nav.Link href="/bands">Bands</Nav.Link></Col>
        <Col><Nav.Link href="/calendar">Calendar</Nav.Link></Col>
        <Col><Nav.Link href="/merch">Merch</Nav.Link></Col>
        <Col><Nav.Link href="/music">Music</Nav.Link></Col>
        <Col><Nav.Link href="/shows">Shows</Nav.Link></Col>
        {/* can simplify this to still say manage bands and only have the register link if there are no bands */}
        <Col>{user.bands ? <NavDropdown title="Manage Bands" id="band-management">
        {user.bands.map( band => <NavDropdown.Item onClick={() => manageBand(band)}>{band.name}</NavDropdown.Item>)}
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={() => history.push(`/band_registration`)}>Register a Band</NavDropdown.Item>
      </NavDropdown>
         : <Nav.Link href="/band_registration">Register a Band</Nav.Link>
         }</Col>
        <Col>
            <Nav.Link>
                <Button className="" onClick={() => signOut()} primary>
                Sign Out</Button>           
            </Nav.Link>
        </Col>
        </>
    }

    return (
        <Container className="d-flex justify-content-center">
           
                <Navbar style={{ width: '100vw' }} collapseOnSelect expand="lg" bg="dark" variant="dark" className="justify-content-center">
                 <Row lg>
                    <Col>
                        <Navbar.Brand href="/">Staged</Navbar.Brand> 
                    </Col>     
                    
                    <Nav>
                        
                        {!user.id ? null :
                        loggedInNav()}

                    </Nav>
                </Row>
                </Navbar>
            
        </Container>
    )
}

const readAccess = state => {
   return {
       user: state.user
   }
}


export default connect(readAccess, { logout, popBandManage })(NavBar)