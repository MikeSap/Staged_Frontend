import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { followedBandsEvents, suggestedBandsEvents } from '../actions/Posts'


import CalendarFeed from '../containers/CalendarFeed'
import Feed from '../containers/Feed'
import MiniFeed from '../containers/MiniFeed'




const Dashboard = (props) =>  {

    const {user, followedEvents, followedBandsEvents, suggestedEvents, suggestedBandsEvents, followedBands} = props

    useEffect(() => {
        if (user.id){
        fetchFollowedEvents()
        fetchSuggestedEvents()
        }
    }, [user])

    useEffect(() => {
    }, [followedBands])

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

export default connect(readAccess , { followedBandsEvents, suggestedBandsEvents })(Dashboard)