import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'

import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { suggestedBandsEvents, followedBandsEvents } from '../actions/Events'

import CalendarFeed from '../containers/CalendarFeed'
import Feed from '../containers/Feed'
import MiniFeed from '../containers/MiniFeed'

const Dashboard = (props) =>  {

  const {user, suggestedBandsEvents, suggestedEvents, followedBandsEvents, followedEvents, feedLoading } = props

  const { id, followed } = user

  const [page, setPage] = useState(1)


  useEffect(() => {
    if (id){
      // when this is triggered by a followed change it never hits the dispatch,
      //  the fetch is successful and has the proper info, but never changes the store.
    suggestedBandsEvents()
    followedBandsEvents(page)
    }
  }, [ id, followedBandsEvents, suggestedBandsEvents, page, followed ])

  return (

    <Container className="dashboard" >
    <Row m={0}>
      <Col> 
        <div className="sidebar">
          <CalendarFeed />
        </div>
      </Col>

      <Col className="dashboard-center">
        <Feed events={followedEvents}/>
        { feedLoading ? <Button variant="outline-success" className="row m-3" type="submit"> 
        <Spinner
        as="span"
        animation="grow"
        size="sm"
        role="status"/>Loading Page {page}</Button> :
        <Button variant="outline-success" onClick={() => setPage(page + 1)}>Load More...</Button> 
        }
        
      </Col>

      <Col>
        <div className="sidebar">
          <Row className='row-header'>Suggested Events</Row>
          <MiniFeed events={suggestedEvents}/>
      </div>
      </Col>
    </Row>
    </Container>
  )
}

const readAccess = state => {
  return {
    user: state.user,
    suggestedEvents: state.suggestedEvents,
    followedEvents: state.followedEvents,
    dateEvents: state.dateEvents,
    feedLoading: state.loading.feed
  }
}

export default connect(readAccess, { suggestedBandsEvents, followedBandsEvents })(Dashboard)