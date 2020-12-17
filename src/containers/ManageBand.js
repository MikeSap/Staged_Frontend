import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {  dateEvents } from '../actions/Events'

import CalendarFeed from '../containers/CalendarFeed'
import Feed from '../containers/Feed'
import EventForm from '../components/EventForm'

const ManageBand = (props) =>  {

    const { managedBand } = props
    // add band key to event
    const managedBandEvents = managedBand.events.map( e => {
        let event = Object.assign( {}, e)
        event["band"] = managedBand 
        return event        
    } )

    useEffect(() => {
        // why wont this hit when i refresh on managed band page?
    }, [managedBand])

    return (
        <Container style={{ marginLeft:"5vw", marginRight:"5vw"}}>
        <Row style={{ width: '100vw' }}>
            <Col> 
                <CalendarFeed />
            </Col>

            <Col xs={4}>
                <Row>{managedBand.name}'s Posts</Row>
                <Row>
                    <Feed events={managedBandEvents}/>
                </Row>
            </Col>

            <Col>
                <Row>                    
                    <EventForm />
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