import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import React, { useState, 
    // useEffect 
} from 'react'

// import { dateEvents } from '../actions/Posts'
// import { connect } from 'react-redux'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const CalendarFeed = (props) => {

    const [date, setDate] = useState(new Date())

    const grabEvents = (date) => {
        debugger
        // fetch and grab events on that date
    }

    // useEffect(() => {
    //     // when suggestedEvents gets saved to store
    //     // run suggestedEventsToShow
    //     return () => {
    //     }
    // }, [dateEvents])

    return (<>
        <Row><Calendar onChange={setDate} value={date} onClickDay={grabEvents}/> </Row>
            <Container><Row> This is where the feed will populate 
                 {/*  dateEventsToShow.map( event => {
                            return <Row><EventPost {...event} key={event.id} ></Row>}*/}
            </Row></Container>
        </>
    )

}

export default CalendarFeed