import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { suggestedBandsEvents, followedBandsEvents } from '../actions/Events'

import CalendarFeed from '../containers/CalendarFeed'
import Feed from '../containers/Feed'
import MiniFeed from '../containers/MiniFeed'

const Dashboard = (props) =>  {

    const {user, suggestedBandsEvents, suggestedEvents, followedBandsEvents, followedEvents } = props

    const { id } = user

    useEffect(() => {
        if (id){
        suggestedBandsEvents()
        followedBandsEvents()
        }
    }, [ id, followedBandsEvents, suggestedBandsEvents])

    useEffect(() => {
      suggestedBandsEvents()
    }, [followedEvents, suggestedBandsEvents])

    return (

        <Container style={{ marginLeft:"5vw", marginRight:"5vw"}}>
        <Row style={{ width: '100vw' }}>
            <Col> 
                <CalendarFeed />
            </Col>

            <Col xs={5}>
              <Feed events={followedEvents}/>
            </Col>

            <Col>
            <div style={{ position:'fixed' }}>
                <Row style={{fontFamily: 'stencil', fontSize: '1.25vw', marginLeft: '5vw' }}>Suggested Events</Row>
                <MiniFeed events={suggestedEvents}/>
            </div>
            </Col>
        </Row>
        </Container>
    )
}

const readAccess = state => {
    return {
        user: state.user,
        suggestedEvents: state.suggestedEvents,
        followedEvents: state.followedEvents,
        dateEvents: state.dateEvents
    }
}

export default connect(readAccess, { suggestedBandsEvents, followedBandsEvents })(Dashboard)