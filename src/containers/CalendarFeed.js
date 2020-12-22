import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import React, { useState, useEffect } from 'react'
import { dateEvents } from '../actions/Events'
import SuggestedPost from '../components/SuggestedPost'

import { connect } from 'react-redux'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const CalendarFeed = (props) => {

    const { user, events, dateEvents } = props

    useEffect(() => {
        if (user.id){
        dateEvents(new Date())
        }
    }, [user, dateEvents])

    const [date, setDate] = useState(new Date())

    const fetchDateEvents = (date) => {
        dateEvents(date)
    }

    return (
        <>
        <Calendar onChange={setDate} value={date} onClickDay={fetchDateEvents}/>
            <Container>
                  {events ? events.map( event => <Row>
                    <SuggestedPost {...event} key={event.id} /></Row>)
                    : null}
            </Container>
        </>
    )
}

const readAccess = state => {
    return {
        events: state.dateEvents,
        user: state.user
    }
}

export default connect(readAccess, { dateEvents })(CalendarFeed)