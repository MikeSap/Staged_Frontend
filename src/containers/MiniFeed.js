import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import SuggestedPost from '../components/SuggestedPost'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const MiniFeed = (props) => {

    const { followedBands } = props


    const eventSort = () => {
      // picks 5 random bands from list of one random event from each unfollowed band
      let events = props.events ? [...props.events] : []
      events = events.sort(() => 0.5 - Math.random())
      events = events.slice(0,5)
      
      return events
    }

    useEffect(() => {
    }, [followedBands])

    const eventsToShow = eventSort()
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