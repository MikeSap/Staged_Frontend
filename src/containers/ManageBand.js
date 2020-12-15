import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {  dateEvents } from '../actions/Posts'

import CalendarFeed from '../containers/CalendarFeed'
import Feed from '../containers/Feed'
import BandPost from '../components/EventForm'

const ManageBand = (props) =>  {

    const { managedBand } = props
    // add band key to event
    const managedBandEvents = managedBand.events.map( e => {
        let event = Object.assign( {}, e)
        event["band"] = managedBand 
        return event        
    } )

    return (
        <Container>
        <Row>
            <Col> 
                <CalendarFeed />
            </Col>

            <Col>
                <Row>{managedBand.name}'s Posts</Row>
                <Row>
                    <Feed events={managedBandEvents}/>
                </Row>
            </Col>

            <Col>
                <Row>                    
                    <BandPost />
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