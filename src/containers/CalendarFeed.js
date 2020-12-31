import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { dateEvents } from '../actions/Events'
import SuggestedPost from '../components/SuggestedPost'
import Calendar from 'react-calendar-mobile';

import Skeleton from 'react-loading-skeleton';

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
    <>
      <Calendar 
       onChange={setDate} value={date} onSelectDate={fetchDateEvents}/>
      { loading ? <Skeleton /> : <div className="calendar-side-scroll" >
        {events ? events.map( event => {
        return <SuggestedPost {...event} key={event.id} /> 
        })
        : <p>No events to Show</p> }
      </div> }
    </>
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