import {  popEditedEvent, deleteEvent } from '../actions/Events'
import { connect } from 'react-redux'

import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const EventPost = (props) => {

    const userBandIds = props.user.bands.map(b => b.id)

    const {band_id, event_type, id, date, url, name} = props 
    
    const manageBand = () => {
        return <>
            <Button size="sm" onClick={() => props.popEditedEvent({name, band_id, event_type, id, date, url})}>Edit</Button>
            <Button size="sm" onClick={() => props.deleteEvent(id)}>Delete</Button>
        </>
    }

    return (        
        <>
        <Card bg="light" style={{ width: '30vw' }}>
            <Card.Header as="h4">{props.band.name}</Card.Header> 
            <Card.Body>
                <Container>
                    <Row>
                        <Col>
                            <Card.Title>{props.name}</Card.Title> 
                            <Card.Text><a target="_blank" rel="noreferrer" href={props.url}>{props.url.split("/")[3]}</a></Card.Text>
                            { userBandIds.includes(props.band.id) ? manageBand() : null }
                        </Col>
                        <Col>
                            {/* Show comments here */}
                        <Form>
                            <Form.Control></Form.Control>
                            <Button size="sm">Post Comment</Button>
                        </Form>
                        </Col>
                </Row>
                </Container>
            </Card.Body>
        </Card>
        </>      
    )
}

const readAccess = state => {
    return {
        user: state.user
    }
}

export default connect(readAccess, { popEditedEvent, deleteEvent })(EventPost)