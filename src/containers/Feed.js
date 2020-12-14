import React, { useState, useEffect } from 'react'

import EventPost from '../components/EventPost'
// import { followedBandsEvents } from '../actions/Posts'
// import { connect } from 'react-redux'


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'


const Feed = (props) => {

    const { events } = props

    const [search, setSearch] = useState("")
    const [eventsToShow, setEventsToShow] = useState( [] )

    const searchPosts = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        setEventsToShow([...events])
        return () => {            
        }
    }, [events])
    
    useEffect(() => {
        // when search changes use a sort function to change eventsToShow if they include band.name, name, city, 
        return () => {            
        }
    }, [search])

    return (
        
        <Container>

        <Row>
            <Form inline>
                <Form.Control onChange={searchPosts} type="text" placeholder="Search" className="mr-sm-2" value={search} />
            </Form>
        </Row>

        <Row>
            <Container>

                { eventsToShow ? eventsToShow.map( event =>  <Row>
                    <EventPost {...event} key={event.id} />
                    </Row> ) 
                : null}

            </Container>
        </Row>
        </Container>
    )

}

export default Feed