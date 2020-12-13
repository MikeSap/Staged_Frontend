import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

import React, { useState } from 'react'


const Dashboard = (props) =>  {

    const [date, setDate] = useState(new Date())

    const grabEvents = (date) => {
        debugger
        // fetch and grab events on that date
    }

    return (
        <Container>
        <Row>
            <Col> 
            <Row><Calendar onChange={setDate} value={date} onClickDay={grabEvents}/> </Row>
            <Container><Row> This is where the feed will populate </Row></Container>
            </Col>

            <Col><Container>
            <Row>Search Bar</Row>
            <Row>Feed</Row>
            </Container>
            </Col>

            <Col>
            <Row>Suggested Bands To Follow</Row>
            <Row><Container>Bands To Follow Feed</Container></Row>
            </Col>
        </Row>
        </Container>
    )
}

export default Dashboard