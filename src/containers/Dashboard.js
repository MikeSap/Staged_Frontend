import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { followedBandsEvents, suggestedBandsEvents, dateEvents } from '../actions/Posts'


import CalendarFeed from '../containers/CalendarFeed'
import Feed from '../containers/Feed'
import MiniFeed from '../containers/MiniFeed'




const Dashboard = (props) =>  {

    const {user, followedEvents, followedBandsEvents, suggestedBands, suggestedEvents, suggestedBandsEvents, followedBands} = props

    useEffect(() => {
        if (user.id){
        fetchFollowedEvents()
        fetchSuggestedEvents()
        }
    }, [user])

    const fetchFollowedEvents = () => {
        followedBands.forEach(band => {
            return followedBandsEvents(band)
        })
    }

    const fetchSuggestedEvents = () => {        
        if(user){
        let bandIds = followedBands.map(band => band.id)
        let userBands = props.user.bands.map(band => band.id)
        suggestedBandsEvents(bandIds, userBands)
        }
    }

    return (
        <Container>
        <Row>
            <Col> 
                <CalendarFeed 
                // todaysDate={new Date}
                />
            </Col>

            <Col>
                <Feed events={followedEvents}/>
            </Col>

            <Col>
                <Row>Suggested Bands To Follow</Row>
                <Row>                    
                    <MiniFeed events={suggestedEvents}/>
                </Row>
            </Col>
        </Row>
        </Container>
    )
}

const readAccess = state => {
    return {
        user: state.user,
        followedBands: state.followedBands,
        followedEvents: state.followedEvents,
        suggestedBands: state.suggestedBands,
        suggestedEvents: state.suggestedEvents, 
        dateEvents: state.dateEvents
    }
}

export default connect(readAccess , { followedBandsEvents, suggestedBandsEvents, dateEvents })(Dashboard)