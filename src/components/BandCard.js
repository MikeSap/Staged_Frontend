import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { connect } from 'react-redux'
import { popBandShow } from '../actions/Bands'


const BandCard = (props) => {

    const {name, url, bio, city, photo, id } = props
    let photoUrl = `http://localhost:3000${photo}`

    return (        
      <>
      <Card bg="light" style={{ width: '30vw' }}>
        <Card.Header as="h4">{name}</Card.Header> 
          <Card.Body>
              <Container fluid>
                  <Row>
                      <Col>
                          <Card.Img src={photoUrl} alt="Band Photo" />
                      </Col>
                      <Col>
                        <Card.Title>{name}</Card.Title> 
                        <Card.Text>City: {city}</Card.Text>
                        <Card.Text>Bio: {bio}</Card.Text>
                        <Card.Text><a target="_blank" rel="noreferrer" href={url}>Band Page</a></Card.Text>
                        <Button onClick={() => props.popBandShow({id})}>Show More</Button>
                      </Col>
              </Row>
              </Container>
          </Card.Body>
      </Card>
      </>  
      
    )
}

export default connect(null, { popBandShow })(BandCard)