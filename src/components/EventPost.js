import {  popEditedEvent, deleteEvent } from '../actions/Events'
import {  postComment, selfPostComment } from '../actions/Comments'
import { connect } from 'react-redux'
import React, { useState } from 'react';

import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import Accordion from 'react-bootstrap/Accordion'

const EventPost = (props) => {

    let userBandIds
    const { event_type, id, date, url, name, comments, user , band, photo} = props 
    const [comment, setComment] = useState("")
    // need to add band photo into event serializer? and the band photo should show if event is a show
    let photoUrl = event_type === "Show" ? `http://localhost:3000${band.photo}` : `http://localhost:3000${photo}`

    const postComment = (e) => {
        e.preventDefault()
        let com = {content: comment, user_id: user.id, event_id: id}
        let userBandEvents = user.bands.map(b => b.events).flat()
        userBandEvents = userBandEvents.map(e => e.id)
        userBandEvents.includes(com.event_id)?
        props.selfPostComment(com) :
        props.postComment(com)
        setComment("")
    }
    
    const manageBand = () => {
        return <>
            <Button size="sm" onClick={() => props.popEditedEvent({name, band, event_type, id, date, url})}>Edit</Button>
            <Button size="sm" onClick={() => props.deleteEvent(id)}>Delete</Button>
        </>
    }

    if (user.id){
        userBandIds = user.bands.map(b => b.id)
    }
    
    return (        
      <>
      <Card bg="light" style={{ width: '30vw' }}>
        <Card.Header as="h4">{band.name}</Card.Header> 
          <Card.Body>
              <Container fluid>
                  <Row>
                      <Col>
                          <Card.Img src={photoUrl} alt="Band Photo" />
                      </Col>
                      <Col>
                      <Card.Title>{name}</Card.Title> 
                          <Card.Text><a target="_blank" rel="noreferrer" href={url}>{url.split("/")[3]}</a></Card.Text>
                          <Card.Text>{date.split("T")[0]}</Card.Text>
                          { userBandIds.includes(band.id) ? manageBand() : null }
                      </Col>
              </Row>
              <Row>
                
                {/* <Accordion defaultActiveKey="0">
                    <Accordion.Toggle as={Card.Text} eventKey="0">Comments</Accordion.Toggle> */}
                    {/* <Accordion.Collapse eventKey="0"> */}
                  <div style={{overflow:'auto', maxHeight: 150 }}>
                  {comments.map(c => <Row style={{topPadding: "5%", marginLeft:"1px"}}><Card style={{marginTop: "1vh", padding: "1%"}}>
                      <div><strong>{c.user.username}</strong></div>
                      {c.content}
                      </Card></Row>)}
                  </div>
                        <Row>
                            <Form onSubmit={postComment}>
                                <Form.Control as="textarea" rows={2} placeholder='Comment' name="comment" onChange={(e) => setComment(e.target.value)} value={comment} maxLength={125} />
                                <Button type="submit" size="sm">Post Comment</Button>
                            </Form>
                        </Row>
                        {/* </Accordion.Collapse> */}
                        {/* </Accordion> */}
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

export default connect(readAccess, { popEditedEvent, deleteEvent, postComment, selfPostComment })(EventPost)