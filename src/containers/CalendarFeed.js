import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { dateEvents } from '../actions/Events'
import SuggestedPost from '../components/SuggestedPost'
import Calendar from 'react-calendar'

import Skeleton from 'react-loading-skeleton';
import Row from 'react-bootstrap/Row'
import 'react-calendar/dist/Calendar.css'

const CalendarFeed = (props) => {

    const { user, events, dateEvents, loading } = props

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
        <div className="sidebar" >
        <Calendar className="staged-calendar" onChange={setDate} value={date} onClickDay={fetchDateEvents}/>
        { loading ? <Skeleton /> : <div className="calendar-side-scroll">
                     {events ? events.map( event => <Row>
                    <SuggestedPost {...event} key={event.id} /></Row>)
                    : <p>No events to Show</p> }
        </div> }
        </div>
    )
}

const readAccess = state => {
    return {
        events: state.dateEvents,
        user: state.user,
        loading: state.loading.calendar
    }
}

export default connect(readAccess, { dateEvents })(CalendarFeed)