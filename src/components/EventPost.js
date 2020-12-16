import {  popEditedEvent } from '../actions/Posts'
import { connect } from 'react-redux'

import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const EventPost = (props) => {
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

export default connect(null, { popEditedEvent })(EventPost)