import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { connect } from 'react-redux'
import BandFeed from '../containers/BandFeed'
import BandCard from '../components/BandCard'


const BandShow = (props) =>  {

  const { band, upcomingEvents, pastEvents } = props
  debugger
  return (
        <Container style={{ marginLeft:"5vw", marginRight:"5vw"}}>
        <Row style={{ width: '100vw' }}>
          
            <Col> 
            <Row>{band.name}'s Past Events</Row>
            <BandFeed events={pastEvents} past="true"/>
            </Col>

            <Col xs={5}>
              <Row>{band.name}</Row>
              <Row>
                  <BandCard {...band}/>
              </Row>
            </Col>

          <Col> 
              <Row>{band.name}'s Upcoming Events</Row>
              <Row>                   
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