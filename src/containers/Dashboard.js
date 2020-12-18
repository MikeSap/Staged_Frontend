import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { followedBandsEvents, suggestedBandsEvents } from '../actions/Events'


import CalendarFeed from '../containers/CalendarFeed'
import Feed from '../containers/Feed'
import MiniFeed from '../containers/MiniFeed'




const Dashboard = (props) =>  {

    let {user, followedBandsEvents, suggestedBandsEvents, suggestedBands} = props
    let { followed } = user

    useEffect(() => {
        if (user.id){
        fetchFollowedEvents()
        fetchSuggestedEvents()
        }
    }, [user])

    const fetchFollowedEvents = () => {
        followed.forEach(band => {
            return followedBandsEvents(band)
        })
    }

    const fetchSuggestedEvents = () => {        
        if(user){
        let bandIds = followed.map(band => band.id)
        let userBands = props.user.bands.map(band => band.id)
        suggestedBandsEvents(bandIds, userBands)
        }
    }

    let followedEvents = []
    let suggestedEvents = []

    if(user.id){
        // add band to each event
        user.followed.forEach(b => b.events.forEach(e => followedEvents.push({...e, band: {city: b.city, id: b.id, name: b.name, url:b.url}})))
        suggestedBands.forEach(b => b.events.forEach(e => suggestedEvents.push({...e, band: {city: b.city, id: b.id, name: b.name, url:b.url}})))
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
        suggestedBands: state.suggestedBands,
        dateEvents: state.dateEvents
    }
}

export default connect(readAccess , { followedBandsEvents, suggestedBandsEvents })(Dashboard)