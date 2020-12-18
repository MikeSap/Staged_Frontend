import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import SuggestedPost from '../components/SuggestedPost'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const MiniFeed = (props) => {

    const { events, followedBands } = props

    const [eventsToShow, setEventsToShow] = useState([]) 

    useEffect(() => {
       if(events){
        setEventsToShow([...events])       
        }
    }, [events])

    useEffect(() => {
    }, [followedBands])

    return (
        <>
        <Row>
            <Container>

                { eventsToShow ? eventsToShow.map( event => <Row>                    
                    <SuggestedPost {...event} key={event.id} />
                    </Row> )
                    : null }

            </Container>
        </Row>
        </>
    )

}
const readAccess = state => {
    return {
        followedBands: state.user.followed
    }
}

export default connect(readAccess)(MiniFeed)