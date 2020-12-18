import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { clearBandErrors } from '../actions/Bands'
import { newEvent, editEvent } from '../actions/Events'
import { useHistory } from "react-router";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const BandPost = (props) => {

  const [formData, setFormData] = useState({})

  const { errors, clearBandErrors, editedEvent, managedBand } = props

  const date = editedEvent.id ? editedEvent.date.split("T")[0] : null
  const managedBandEventIds = managedBand.id? managedBand.events.map(e => e.id) : null

  const history = useHistory()
  const location = history.location.pathname

  useEffect(() => {
      if(errors){
      setTimeout( () => clearBandErrors(), 3000)
      }
  }, [errors, clearBandErrors])

  useEffect(() => {
    // set form data on edited event
    if(!managedBandEventIds){
      return
    }
    if (managedBandEventIds.includes(editedEvent.id)){
      setFormData ({
        event_type: editedEvent.event_type,
        name: editedEvent.name,
        url: editedEvent.url,
        date: date,
        id: editedEvent.id
      })
    }
  }, [location, editedEvent, date])
  
  const handleSubmit = (e) => {
      e.preventDefault();
      let event = {...formData, band_id: managedBand.id}
      editedEvent.id ? props.editEvent(event) : props.newEvent(event)
    setFormData({event_type:"music", name:"", url:"", date:""})
    }
  
  const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }

  return(
         
    <Container fluid>                  
        <Form onSubmit={handleSubmit}>
        {props.errors ? <h3>{props.errors}</h3> : null}
        <Form.Row>
            <Form.Group>                
                    {editedEvent.id ?
                        <Form.Label  as={Row}>Edit Post</Form.Label>
                        :
                        <Form.Label as={Row}>Post an Event</Form.Label>
                    } 
                <Form.Control as="select" name="event_type" onChange={handleChange} value={formData.event_type}>
                  <option>Music</option>
                  <option>Show</option>
                  <option>Merch</option>
                </Form.Control>

                <Form.Control placeholder='Event Name' name="name" onChange={handleChange} value={formData.name} maxLength={50} />                

                <Form.Control placeholder='Event URL' type="text" name="url" onChange={handleChange} value={formData.url}/>
                
                <Form.Control type="date" name="date" onChange={handleChange} value={formData.date}/>

                <Button type="submit">Submit</Button>

            </Form.Group>
        </Form.Row>
        </Form>
    </Container>
  )
}
 
const readAccess = (state) => {
  return {
      loading: state.loading,
      errors: state.errors.user,
      editedEvent: state.editedEvent,
      managedBand: state.managedBand
  }
}

export default connect(readAccess, { clearBandErrors, newEvent, editEvent })(BandPost);