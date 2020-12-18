import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from "react-router";

import {  dateEvents } from '../actions/Events'
import {  rePopManagedBand } from '../actions/Bands'

import CalendarFeed from '../containers/CalendarFeed'
import Feed from '../containers/Feed'
import EventForm from '../components/EventForm'

const ManageBand = (props) =>  {

    const history = useHistory()
    const location = history.location.pathname    

    // useEffect(() => {
    //     if(!managedBand){
    //         rePopManagedBand(location.split('manage_band/')[location.split('manage_band/').length -1])
    //     }
    // })

    const { managedBand, rePopManagedBand } = props
  
    return (
        <Container style={{ marginLeft:"5vw", marginRight:"5vw"}}>
        <Row style={{ width: '100vw' }}>
            <Col> 
                <CalendarFeed />
            </Col>

            <Col xs={4}>
              <Row>{managedBand.name}'s Posts</Row>
              <Row>
                  <Feed events={managedBand.events}/>
              </Row>
            </Col>

          <Col> 
              <Row>                   
                  <EventForm />
              </Row>
          </Col>
      </Row>
      </Container>
    )
}

const readAccess = state => {
    return {
        dateEvents: state.dateEvents,
        managedBand: state.managedBand
    }
}

export default connect(readAccess , { dateEvents, rePopManagedBand })(ManageBand)