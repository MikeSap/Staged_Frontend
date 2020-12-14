import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { followedBandsEvents, suggestedBandsEvents, dateEvents } from '../actions/Posts'


import CalendarFeed from '../containers/CalendarFeed'
import Feed from '../containers/Feed'
import MiniFeed from '../containers/MiniFeed'




const Dashboard = (props) =>  {

    const {user, followedEvents, followedBandsEvents, suggestedEvents, suggestedBandsEvents, dateEvents, followedBands} = props


    useEffect(() => {
        fetchFollowedEvents()
        fetchSuggestedEvents()
        return () => {
        }
    }, [user])

    const fetchFollowedEvents = () => {
        followedBands.forEach(band => {
            return followedBandsEvents(band)
        })
    }

    const fetchSuggestedEvents = () => {
        let bandIds = followedBands.map(band => band.id)
        suggestedBandsEvents(bandIds)
    }

    return (
        <Container>
        <Row>
            <Col> 
                <CalendarFeed />
            </Col>

            <Col>
                <Feed events={followedEvents}/>
            </Col>

            <Col>
            <Row>Suggested Bands To Follow</Row>
                <Row>
                    <MiniFeed />
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
        suggestedBands : state.suggestedBands,
        dateEvents: state.dateEvents
    }
}

export default connect(readAccess , { followedBandsEvents, suggestedBandsEvents, dateEvents })(Dashboard)