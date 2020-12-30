import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchManagedBandEvents } from '../actions/Events'

import CalendarFeed from '../containers/CalendarFeed'
import Feed from '../containers/Feed'
import EventForm from '../components/EventForm'
import BandForm from '../components/BandForm'

const ManageBand = (props) =>  {

  const { managedBand, managedBandEvents, fetchManagedBandEvents } = props

  const [page, setPage] = useState(1)


  useEffect(() => {
    if(managedBand){
      fetchManagedBandEvents(managedBand.id, page)
    }
  },[managedBand, fetchManagedBandEvents, page])

  return (
    <Container className="dashboard">
    <Row>
      <Col>
        <div className="sidebar">
          <CalendarFeed />
        </div>
      </Col>

      <Col className="dashboard-center">
        <Row as="h2" className="card-header">
        {managedBand.name}'s Upcoming Events</Row>
        <Row>
          <Feed events={managedBandEvents}/>
          <Button onClick={() => setPage(page + 1)}>Load More...</Button>
        </Row>
      </Col>

    <Col>
      <div className="sidebar mini-feed-side-scroll" >                
          <EventForm />
          <BandForm />
      </div>
    </Col>
    </Row>
    </Container>
  )
}

const readAccess = state => {
  return {
    managedBand: state.managedBand,
    managedBandEvents: state.managedBandEvents
  }
}

export default connect(readAccess , { fetchManagedBandEvents })(ManageBand)