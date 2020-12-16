import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import SuggestedPost from '../components/SuggestedPost'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

const MiniFeed = (props) => {

    const { events, followedBands } = props

    const [eventsToShow, setEventsToShow] = useState([]) 

    useEffect(() => {
        setEventsToShow([...events])
        return () => {            
        }
    }, [events])

    useEffect(() => {
    }, [followedBands])

    return (
        <>
        <Row>
            <Container>

                { eventsToShow ? eventsToShow.map( event => <Row>                    
                    <SuggestedPost {...event} 
                    // key={event.id} 
                    />
                    </Row> )
                    : null }

            </Container>
        </Row>
        </>
    )

}
const readAccess = state => {
    return {
        followedBands: state.followedBands
    }
}

export default connect(readAccess)(MiniFeed)