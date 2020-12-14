import React, { useEffect } from 'react';
// import { useHistory } from "react-router";
import { logout } from '../actions/Auth'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'


const NavBar = (props) => {

    // const history = useHistory()

    const { user } = props

    const signOut = () => {
        props.logout()
    }

    useEffect(() => {
    }, [user])

    const loggedInNav = () => {
        return <>        
        <Col><Nav.Link href="/bands">Bands</Nav.Link></Col>
        <Col><Nav.Link href="/calendar">Calendar</Nav.Link></Col>
        <Col><Nav.Link href="/merch">Merch</Nav.Link></Col>
        <Col><Nav.Link href="/music">Music</Nav.Link></Col>
        <Col><Nav.Link href="/shows">Shows</Nav.Link></Col>
        <Col>
            <Nav.Link >
                <Button className="justify-content-end" onClick={() => signOut()} primary>
                Sign Out</Button>           
            </Nav.Link>
        </Col>
        </>
    }

    return (
        <Container>
           
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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


export default connect(readAccess, { logout })(NavBar)