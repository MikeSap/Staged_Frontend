import React, { useEffect } from 'react';
import { useHistory } from "react-router";
import { logout } from '../actions/Auth'
import { connect } from 'react-redux'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'


const NavBar = (props) => {

    const history = useHistory()

    const { user } = props

    const signOut = () => {
        props.logout()
    }

    useEffect(() => {
    }, [user])

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        
        <Navbar.Brand href="/">Staged</Navbar.Brand>         
            
            <Nav>
                {!user.id ? null :
                <Nav.Link
                name="New Note"
                onClick={() => history.push('/notes/new')}
                />}
            
                {!user.id ? null :
                <Nav.Link >
                <Button onClick={() => signOut()} primary>
                Sign Out</Button>           
                </Nav.Link>}

            </Nav>

        </Navbar>
    )
}

const readAccess = state => {
   return {
       user: state.user
   }
}


export default connect(readAccess, { logout })(NavBar)