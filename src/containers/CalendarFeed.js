import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import React, { useState, useEffect } from 'react'
import { dateEvents } from '../actions/Posts'
import EventPost from '../components/EventPost'

import { connect } from 'react-redux'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const CalendarFeed = (props) => {

    const { events, 
        // todaysDate 
    } = props

    const [eventsToShow, setEventsToShow] = useState([]) 

    useEffect(() => {
        setEventsToShow([...events])
        return () => {            
        }
    }, [events])

    // useEffect(() => {
    //     fetchDateEvents(todaysDate)
    // }, [todaysDate])

    const [date, setDate] = useState(new Date())

    const fetchDateEvents = (date) => {
        props.dateEvents(date)
        // fetch and grab events on that date
    }

    return (<>
        <Row><Calendar onChange={setDate} value={date} onClickDay={fetchDateEvents}/> </Row>
            <Container>
                  {eventsToShow ? eventsToShow.map( event => <Row>
                      <EventPost {...event} key={event.id} /></Row>)
                    : null}
            </Container>
        </>
    )
}

const readAccess = state => {
    return {
        events: state.dateEvents
    }
}

export default connect(readAccess, { dateEvents })(CalendarFeed)