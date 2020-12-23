import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchManagedBandEvents } from '../actions/Events'

import CalendarFeed from '../containers/CalendarFeed'
import Feed from '../containers/Feed'
import EventForm from '../components/EventForm'
import BandForm from '../components/BandForm'

const ManageBand = (props) =>  {

  const { managedBand, managedBandEvents, fetchManagedBandEvents } = props

    useEffect(() => {
      if(managedBand){
        fetchManagedBandEvents(managedBand.id)
      }
    },[managedBand, fetchManagedBandEvents])

  return (
        <Container style={{ marginLeft:"5vw", marginRight:"5vw"}}>
        <Row style={{ width: '100vw' }}>
            <Col> 
                <CalendarFeed />
            </Col>

            <Col xs={4}>
              <Row style={{fontFamily: 'stencil', fontSize:"1.5vw", marginRight: '16vw'}}>{managedBand.name}'s Posts</Row>
              <Row>
                  <Feed events={managedBandEvents}/>
              </Row>
            </Col>

          <Col>
          <div style={{position:'fixed', overflow:'auto', maxHeight: "80vh", width: "25vw"}} > 
              <Row style={{marginLeft: "1.25vw"}}>                   
                  <EventForm />
              </Row>
              <Row style={{marginLeft: "1.25vw"}}>
                  <BandForm />
              </Row>
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