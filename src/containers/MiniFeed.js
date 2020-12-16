import React, { useState, useEffect } from 'react'

import SuggestedPost from '../components/SuggestedPost'

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

export default MiniFeed