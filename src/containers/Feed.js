import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import EventPost from '../components/EventPost'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import CardGroup from 'react-bootstrap/CardGroup'

const Feed = (props) => {

    const { events, followedBands } = props

    const [search, setSearch] = useState("")
    const [eventsToShow, setEventsToShow] = useState( [] )

    const searchPosts = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        if(events){
        setEventsToShow([...events])
        }
    }, [events])

    useEffect(() => {
    }, [followedBands])
    
    useEffect(() => {
        // when search changes use a sort function to change eventsToShow if they include band.name, name, city, 
        return () => {            
        }
    }, [search])

    return (
        <>
        <Row>
            <Form inline>
                <Form.Control onChange={searchPosts} type="text" placeholder="Filter Posts" className="mr-sm-2" value={search} />
            </Form>
        </Row>

        <Row>
            <Container >
                <CardGroup >

                { eventsToShow ? eventsToShow.map( event =>  <Row>
                    <EventPost {...event} key={event.id} />
                    </Row> ) 
                : null}
                </CardGroup>
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

export default connect(readAccess)(Feed)