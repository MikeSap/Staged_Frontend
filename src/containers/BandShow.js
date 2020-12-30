import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { connect } from 'react-redux'
import BandFeed from '../containers/BandFeed'
import BandCard from '../components/BandCard'


const BandShow = (props) =>  {

  const { band, upcomingEvents, pastEvents } = props

  return (
    <Container className="dashboard">
    <Row>      
      <Col className="sidebar"> 
      <Row as="h3">Past Events</Row>
      <Row className="mini-band-feed-side-scroll">
      <BandFeed events={pastEvents} past="true"/>
      </Row>
      </Col>

      <Col>
        <Row>
            <BandCard {...band}/>
        </Row>
      </Col>

    <Col className="sidebar"> 
        <Row as="h3">Upcoming Events</Row>
        <Row className="mini-band-feed-side-scroll">                   
          <BandFeed events={upcomingEvents}/>
        </Row>
    </Col>
  </Row>
  </Container>
)
}

const readAccess = state => {
    return {
      band: state.showBand.band,
      upcomingEvents: state.showBand.upcomingEvents,
      pastEvents: state.showBand.pastEvents      
    }
}

export default connect(readAccess)(BandShow)