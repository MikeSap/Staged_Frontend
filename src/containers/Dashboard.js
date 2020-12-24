import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { suggestedBandsEvents, followedBandsEvents } from '../actions/Events'

import CalendarFeed from '../containers/CalendarFeed'
import Feed from '../containers/Feed'
import MiniFeed from '../containers/MiniFeed'

const Dashboard = (props) =>  {

    const {user, suggestedBandsEvents, suggestedEvents, followedBandsEvents, followedEvents } = props

    const { id, followed } = user

    const [page, setPage] = useState(1)


    useEffect(() => {
        if (id){
          // when this is triggered by a followed change it never hits the dispatch,
          //  the fetch is successful and has the proper info, but never changes the store.
        suggestedBandsEvents()
        followedBandsEvents(page)
        }
    }, [ id, followedBandsEvents, suggestedBandsEvents, page, followed ])

    return (

        <Container style={{ marginLeft:"5vw", marginRight:"5vw"}}>
        <Row style={{ width: '100vw' }}>
            <Col> 
                <CalendarFeed />
            </Col>

            <Col xs={5}>
              <Feed events={followedEvents}/>
              <Button onClick={() => setPage(page + 1)}>Load More...</Button>
            </Col>

            <Col>
            <div style={{ position:'fixed' }}>
                <Row style={{fontFamily: 'stencil', fontSize: '1.25vw', marginLeft: '6vw' }}>Suggested Events</Row>
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
        dateEvents: state.dateEvents,
    }
}

export default connect(readAccess, { suggestedBandsEvents, followedBandsEvents })(Dashboard)