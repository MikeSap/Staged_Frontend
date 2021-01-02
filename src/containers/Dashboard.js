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
    suggestedBandsEvents()
    followedBandsEvents(page)
    }
  }, [ id, followedBandsEvents, suggestedBandsEvents, page, followed ])

  return (

    <Container className="dashboard" fluid>
    <Row lg={12}>
      <Col lg={{span: 3, order: 1}} md={{ span: 6, order: 1}} sm={{ span: 12, order: 1}} xs={{ span: 12, order: 1}}> 
        <div className="sticky-top sidebar">

          <CalendarFeed />
        </div> 
      </Col>

      <Col  lg={{span: 5, order: 4}} md={{ span: 12, order: 12}} sm={{ span: 12, order: 12}} xs={{ span: 12, order: 12}} >
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

      <Col lg={{span: 3, order: 12}} md={{ span: 6, order: 4}} sm={{ span: 12, order: 2}} xs={{ span: 12, order: 2}} >
        <div className="sticky-top sidebar">
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