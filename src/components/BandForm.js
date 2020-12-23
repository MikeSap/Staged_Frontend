import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { editBand, clearBandErrors, newBand } from '../actions/Bands'
import { useHistory } from "react-router";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Login = (props) => {

  const history = useHistory()
  const location = history.location.pathname

  const [formData, setFormData] = useState({})
  const [photo, setPhoto] = useState(null)

  const { errors, clearBandErrors, managedBand } = props

  useEffect(() => {
      if(location.includes(managedBand.id)){
        setFormData({...managedBand})
      }
  }, [managedBand, location])

  useEffect(() => {
      if(errors){
      setTimeout( () => clearBandErrors(), 3000)
      }
  }, [errors, clearBandErrors])
  
  const handleSubmit = (e) => {
      e.preventDefault()
      let band = {...formData, user_ids: [props.user.id], photo: photo}     
      // differ submition from registration to edit     
      location.includes(managedBand.id) ? 
      props.editBand(band) :
      props.newBand(band)
      setFormData({ name: "", bio: "", city: "", url: "" })
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

  return(
    
      <Container fluid>                  
          <Form onSubmit={handleSubmit}>
          <Form.Row>
              <Form.Group>
                  
                      {location.includes(managedBand.id) ?
                          <Form.Label  as={Row}>Edit Band</Form.Label>
                          :
                          <Form.Label as={Row}>Register Your Band</Form.Label>
                      }   
                  
              {props.errors ? <h3>{props.errors}</h3> : null}

                  <Form.Control placeholder='Band Name' type="text" name="name" onChange={handleChange} value={formData.name}/>

                  <Form.Control as="textarea" rows={6} placeholder='Band Bio' name="bio" onChange={handleChange} value={formData.bio} maxLength={250} />                

                  <Form.Control placeholder='City' type="text" name="city" onChange={handleChange} value={formData.city}/>
                  
                  <Form.Control placeholder='Website URL' type="url" name="url" onChange={handleChange} value={formData.url}/>
                  
                  {/* ADD USERS POPULATE FROM USER DATA ON API bootstrap react lookahead*/}
                  {/* <Form.Control placeholder='Band Memebers' type="text" name="members" onChange={handleChange} value={formData.members}/> */}
                      
                  <Form.Control type="file" name="photo" onChange={handlePhoto} />
                  
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
      user: state.user,
      managedBand: state.managedBand
  }
}

export default connect(readAccess, { clearBandErrors, newBand, editBand })(Login);