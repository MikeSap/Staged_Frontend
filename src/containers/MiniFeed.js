import React, { useState } from 'react'

import EventPost from '../components/EventPost'
import { connect } from 'react-redux'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const MiniFeed = (props) => {


    return (
        <Container>

        <Row>
            <Container>

                {/* followedEventsToShow.map( event => {
                    return <Row><EventPost {...event} key={event.id} /></Row>
                } */}

            </Container>
        </Row>
        </Container>
    )

}

export default MiniFeed