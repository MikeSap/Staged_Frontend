import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { suggestedBandsEvents } from '../actions/Events'

import CalendarFeed from '../containers/CalendarFeed'
import Feed from '../containers/Feed'
import MiniFeed from '../containers/MiniFeed'

const Dashboard = (props) =>  {

    const {user, suggestedBandsEvents, suggestedEvents
    // , suggestedBands
    } = props

    const { followed, bands, id } = user
    const [followedEvents, setFollowedEvents] = useState([])

    useEffect(() => {
        if (id){

        //   const fetchSuggestedEvents = () => {        
        //     let bandIds = followed.map(band => band.id)
        //     let userBands = bands.map(band => band.id)
        //     suggestedBandsEvents(bandIds, userBands)
        // }

        // fetchSuggestedEvents()
        suggestedBandsEvents()
        let f = followed.map(b => b.events).flat()
        setFollowedEvents(f)
        }
    }, [id, followed, bands, suggestedBandsEvents])

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
                <Row>Suggested Bands To Follow</Row>
                <MiniFeed events={suggestedEvents}/>
            </Col>
        </Row>
        </Container>
    )
}

const readAccess = state => {
    return {
        user: state.user,
        suggestedEvents: state.suggestedEvents,
        dateEvents: state.dateEvents
    }
}

export default connect(readAccess, { suggestedBandsEvents })(Dashboard)