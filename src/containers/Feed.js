import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import EventPost from '../components/EventPost'

import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import CardGroup from 'react-bootstrap/CardGroup'
import Skeleton from 'react-loading-skeleton';

const Feed = (props) => {

    const { followedBandEvents, managedBandEvents, loading } = props

    const [search, setSearch] = useState("")

    const searchPosts = (e) => {
        setSearch(e.target.value)
    }
    
    useEffect(() => {
    }, [followedBandEvents, managedBandEvents])

    const eventSort = () => {
      let events =  props.events ? [...props.events] : []
      events = events.filter(e => e.name.toUpperCase().includes(search.toUpperCase()) || e.date.toUpperCase().includes(search.toUpperCase()) || e.band.name.toUpperCase().includes(search.toUpperCase()))
      return events
    }

    const eventsToShow = eventSort()
    return (
        <>
            <Form style={{width:"28vw"}} >
                <Form.Control onChange={searchPosts} type="text" placeholder="Filter Posts by Date, Band, Or Title" className="mr-sm-2" value={search} />
            </Form>


                { loading ? <Skeleton /> : <CardGroup >
                { eventsToShow ? eventsToShow.map( event =>  <Row>
                    <EventPost {...event} band={event.band} key={event.id} />
                    </Row> ) 
                : null}
                </CardGroup> }
        </>
    )

}

const readAccess = state => {
    return {
        followedBand: state.user.followed,
        followedBandEvents: state.followedEvents,
        managedBandEvents: state.managedBandEvents,
        loading: state.loading.feed
    }
}

export default connect(readAccess)(Feed)