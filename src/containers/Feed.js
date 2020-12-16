import React, { useState, useEffect } from 'react'

import EventPost from '../components/EventPost'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'


const Feed = (props) => {

    const { events } = props

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

export default Feed