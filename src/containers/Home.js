import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import Login from '../components/Login'

const Home = (props) =>  {

    return (

        <Container className="home">
          <Login /> 
        </Container>
    )
}

const readAccess = state => {
    return {
    }
}

export default connect(readAccess, { })(Home)