import React, { useState, useEffect } from 'react'

import EventPost from '../components/EventPost'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

const MiniFeed = (props) => {

    const { events } = props

    const [eventsToShow, setEventsToShow] = useState([]) 

    useEffect(() => {
        setEventsToShow([...events])
        return () => {            
        }
    }, [events])

    return (
        <Container>

        <Row>
            <Container>

                { eventsToShow ? eventsToShow.map( event => <Row>                    
                    <EventPost {...event} 
                    // key={event.id} 
                    />
                    </Row> )
                    : null }

            </Container>
        </Row>
        </Container>
    )

}

export default MiniFeed