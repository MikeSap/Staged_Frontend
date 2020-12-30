import {  popEditedEvent, deleteEvent } from '../actions/Events'
import {  postComment, selfPostComment } from '../actions/Comments'
import { followBand } from '../actions/Bands'
import { connect } from 'react-redux'
import React, { useState } from 'react';
import API from '../API'
import { useHistory } from "react-router";

import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Collapse from 'react-bootstrap/Collapse'

const IndexPost = (props) => {

    let userBandIds = []
    let followedBandIds = []
    const history = useHistory()
    const location = history.location.pathname

    const { event_type, id, date, url, name, comments, user , band, photo, managedBandEvents} = props

    let photoUrl = event_type === "Show" ? `${API}${band.photo}` : `${API}${photo}`
 
    const [comment, setComment] = useState("")
    const [open, setOpen] = useState(false)

    const postComment = (e) => {
      e.preventDefault()
      let com = {content: comment, user_id: user.id, event_id: id}
      let managedEventIds = managedBandEvents ? managedBandEvents.map(e => e.id) : []
      managedEventIds.includes(com.event_id) ?
      props.selfPostComment(com) :
      props.postComment(com)
      setComment("")
    }
    
    const manageBand = () => {
        return <>
          <Button  variant="outline-success" size="sm" onClick={() => props.popEditedEvent({name, band, event_type, id, date, url})}>Edit</Button>
          <Button variant="outline-danger" size="sm" onClick={() => props.deleteEvent(id)}>Delete</Button>
        </>
    }

    if (user.id){
        userBandIds = user.bands.map(b => b.id)
        followedBandIds = user.followed.map(b => b.id)
    }

    const commentSort = () => {
      let c =  comments ? [...comments] : []
      c = c.sort( (c1, c2) => new Date(c1.created_at) > new Date(c2.created_at) ? -1 : 1)
      return c
    }
    
    let sortedComments = commentSort()
    return (        
      <>
      <Card bg="light" className="event-post" >
        <Card.Header as="h3">{band.name} 
        <h5 className="card-type">{event_type}</h5></Card.Header> 
          <Card.Body>
                <Row>
                  <Col>
                    <Card.Img src={photoUrl} alt="Band Photo" />
                  </Col>
                  <Col>
                  <Card.Title>{name}</Card.Title> 
                    <Card.Text><a target="_blank" rel="noreferrer" href={url}>{url.split("/")[3]}</a></Card.Text>
                    <Card.Text>{date.split("T")[0]}</Card.Text>
                    
                    { userBandIds.includes(band.id) && location.includes('manage_band') ? manageBand() : null }
                    { userBandIds.includes(band.id) || followedBandIds.includes(band.id) ? <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="collapse-comments"
                    aria-expanded={open}
                    size="sm"
                    variant="outline-secondary"
                    >
                    Comments
                    </Button> : <Button size="sm" variant="outline-secondary" onClick={() => props.followBand(user.id, band.id)}>Follow</Button> }

                  </Col>
              </Row>

              <Row >
              <Collapse in={open}>
                <div id="collapse-comments">

                  <div className="comment-section">
                  {sortedComments.map(c => <Card className="comment-card">
                      <strong>{c.user.username}</strong>
                      {c.content}
                      </Card>
                      )}

                  </div>
                    <Form onSubmit={postComment}>
                        <Form.Control as="textarea" rows={2} placeholder='Comment' name="comment" onChange={(e) => setComment(e.target.value)} value={comment} maxLength={125} />
                        <Button variant="outline-success" type="submit" size="sm">Post Comment</Button>
                    </Form>  

                  </div>
                  </Collapse>
                 </Row>
          </Card.Body>
      </Card>
      </>      
    )
}

const readAccess = state => {
    return {
        user: state.user,
        managedBandEvents: state.managedBandEvents
    }
}

export default connect(readAccess, { popEditedEvent, deleteEvent, postComment, selfPostComment, followBand })(IndexPost)