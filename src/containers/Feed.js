import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import EventPost from '../components/EventPost'

import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import CardGroup from 'react-bootstrap/CardGroup'

const Feed = (props) => {

    const { followedBands } = props

    const [search, setSearch] = useState("")

    const searchPosts = (e) => {
        setSearch(e.target.value)
    }
    
    useEffect(() => {
    }, [followedBands])

    const eventSort = () => {
      let events =  props.events ? [...props.events] : []
      // events = events.filter(e => e.name.toUpperCase().includes(search.toUpperCase()) || e.date.toUpperCase().includes(search.toUpperCase()) || e.band.name.toUpperCase().includes(search.toUpperCase()))
      events = events.filter(e => new Date(e.date) >= new Date().setHours(0,0,0,0))
      events = events.sort( (e1, e2) => new Date(e1.date) < new Date(e2.date) ? -1 : 1)
      return events
    }
    
    const eventsToShow = eventSort()
    return (
        <>
            <Form style={{width:"28vw"}}>
                <Form.Control onChange={searchPosts} type="text" placeholder="Filter Posts by Date, Band, Or Title" className="mr-sm-2" value={search} />
            </Form>


                <CardGroup >
                { eventsToShow ? eventsToShow.map( event =>  <Row>
                    <EventPost {...event} band={event.band} key={event.id} />
                    </Row> ) 
                : null}
                </CardGroup>
        </>
    )

}

const readAccess = state => {
    return {
        followedBands: state.user.followed
    }
}

export default connect(readAccess)(Feed)