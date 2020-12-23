import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { clearBandErrors } from '../actions/Bands'
import { newEvent, editEvent, clearEdited } from '../actions/Events'
import { useHistory } from "react-router";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


const BandPost = (props) => {

  const [formData, setFormData] = useState({event_type:"music", name:"", url:"", date:""})
  const [photo, setPhoto] = useState(null)

  const { errors, clearBandErrors, editedEvent, managedBand, managedBandEvents } = props

  const date = editedEvent.id ? editedEvent.date.split("T")[0] : null

  const history = useHistory()
  const location = history.location.pathname

  useEffect(() => {
      if(errors){
      setTimeout( () => clearBandErrors(), 3000)
      }
  }, [errors, clearBandErrors])

  useEffect(() => {
    // set form data on edited event
    const managedBandEventIds = managedBandEvents ? managedBandEvents.map(e => e.id) : null

    if(!managedBandEventIds){
      return
    }
    if (managedBandEventIds.includes(editedEvent.id )){
      setFormData ({
        event_type: editedEvent.event_type,
        name: editedEvent.name,
        url: editedEvent.url,
        date: date,
        id: editedEvent.id
      })
    }
  }, [location, editedEvent, date, managedBandEvents])
  
  const handleSubmit = (e) => {
      e.preventDefault();
      let event
      if(editedEvent.id){
        photo === null ?
        event = {...formData, band_id: managedBand.id } :
        event = {...formData, band_id: managedBand.id, photo: photo}
        props.editEvent(event) 
      } else {
        event = {...formData, band_id: managedBand.id, photo: photo}
        props.newEvent(event)
      } 
    setFormData({event_type:"music", name:"", url:"", date:""})
    setPhoto(null)
    }
  
  const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  
  const handlePhoto = e => {
    setPhoto(e.target.files[0])
  }

  const clearEditedForm = () => {
    props.clearEdited()
    setFormData({event_type:"music", name:"", url:"", date:""})
  }

  return(
         
    <Container fluid>                  
        <Form onSubmit={handleSubmit}>
        {props.errors ? <h3>{props.errors}</h3> : null}
        <Form.Row>
            <Form.Group>      

                    {editedEvent.id ?
                        <Form.Label  as={Row}>Edit Event</Form.Label>
                        :
                        <Form.Label as={Row}>Post Event</Form.Label>
                    }
      
                <Form.Control as="select" name="event_type" onChange={handleChange} value={formData.event_type}>
                  <option>Music</option>
                  <option>Show</option>
                  <option>Merch</option>
                </Form.Control>

                <Form.Control placeholder='Event Name' name="name" onChange={handleChange} value={formData.name} maxLength={50} />                

                <Form.Control placeholder='Event URL' type="text" name="url" onChange={handleChange} value={formData.url}/>
                
                <Form.Control type="date" name="date" onChange={handleChange} value={formData.date}/>
                
                {/* add event location, default to band location if music or merch type */}

                <Form.Control type="file" name="photo" onChange={handlePhoto} />

                <Button type="submit">Submit</Button>

                {editedEvent.id? <Button onClick={clearEditedForm}>Clear</Button> : null}

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
      managedBand: state.managedBand,
      managedBandEvents: state.managedBandEvents
  }
}

export default connect(readAccess, { clearBandErrors, newEvent, editEvent, clearEdited })(BandPost);