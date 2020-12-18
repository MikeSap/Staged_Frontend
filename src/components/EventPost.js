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

const EventPost = (props) => {

    let userBandIds

    const { event_type, id, date, url, name, comments, user , band} = props 
    const [comment, setComment] = useState("")

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
              <Container>
                  <Row>
                      <Col>
                          <Card.Title>{name}</Card.Title> 
                          <Card.Text><a target="_blank" rel="noreferrer" href={url}>{url.split("/")[3]}</a></Card.Text>
                          { userBandIds.includes(band.id) ? manageBand() : null }
                      </Col>
                      <Col>
                          <Row style={{overflow:'auto', maxHeight: 150 }}>
                              {comments.map(c => <Card style={{marginTop: "1vh", padding: "1%"}}>
                                  <Card.Subtitle><strong>{c.user.username}</strong></Card.Subtitle>
                                  {c.content}
                                  </Card>)}
                          </Row>
                          <Row>
                              <Form onSubmit={postComment}>
                                  <Form.Control as="textarea" rows={2} placeholder='Comment' name="comment" onChange={(e) => setComment(e.target.value)} value={comment} maxLength={125} />
                                  <Button type="submit" size="sm">Post Comment</Button>
                              </Form>
                          </Row>
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

export default connect(readAccess, { popEditedEvent, deleteEvent, postComment, selfPostComment })(EventPost)