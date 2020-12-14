import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {  dateEvents } from '../actions/Posts'

import CalendarFeed from '../containers/CalendarFeed'
import Feed from '../containers/Feed'
import BandForm from '../components/BandForm'

const ManageBand = (props) =>  {

    const { managedBand } = props

    return (
        <Container>
        <Row>
            <Col> 
                <CalendarFeed />
            </Col>

            <Col>
                <Row>{managedBand.name}'s Posts</Row>
                <Row>
                {/* <Feed events={managedBand.events}/> */}
                </Row>
            </Col>

            <Col>
                <Row>New Post</Row>
                <Row>                    
                    {/* put new band post form here */}
                </Row>
            </Col>
        </Row>
        </Container>
    )
}

const readAccess = state => {
    return {
        dateEvents: state.dateEvents,
        managedBand: state.managedBand
    }
}

export default connect(readAccess , { dateEvents })(ManageBand)