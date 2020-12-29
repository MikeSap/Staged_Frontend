import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { login, signup, clearLoginErrors } from '../actions/Auth'
import { useHistory } from "react-router";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import Spinner from 'react-bootstrap/Spinner'

const Login = (props) => {

  const [formData, setFormData] = useState({email:"", password: ""})
  const history = useHistory()
  const location = history.location.pathname
  const { errors, clearLoginErrors, loading } = props

  useEffect(() => {
      if(errors){
      setTimeout( () => clearLoginErrors(), 3000)
      }
  }, [errors, clearLoginErrors])
      
  const handleSubmit = (e) => {
      e.preventDefault();
      location.includes('signup') ? 
      props.signup(formData)
      :props.login(formData)
      setFormData({
        email: '',
        password: ''
      })
    }

  const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }

  const buildSignupForm = () => { 
      if (location.includes('signup')){
          return <>
      <Form.Control placeholder='password confirmation' type="password" name="password_confirmation" onChange={handleChange} value={formData.password_confirmation}/>
      <Form.Control placeholder='username' type="text" name="username" onChange={handleChange} value={formData.username} />
      <Form.Control placeholder='city' type="text" name="city" onChange={handleChange} value={formData.city} />
          </>
      }
  }

  return(    
    <Container fluid className="d-flex flex-column align-items-center justify-content-center">                  
      <Form onSubmit={handleSubmit}>
        <Form.Row className="row m-5">
          <Form.Group className="row align-items-center justify-content-center">
              
            {location.includes('signup') ?
                <Form.Label  as={Row}>Sign-up for Staged</Form.Label>
                :
                <Form.Label>Log-in to Staged</Form.Label>
            }     
            <Form.Group className="row m-5">
            {props.errors ?  <Alert variant="danger">{props.errors}</Alert> : null}
            </Form.Group>

            <Form.Control placeholder='email' type="email" name="email" onChange={handleChange} value={formData.email}/>

            <Form.Control placeholder='password' type="password" name="password" onChange={handleChange} value={formData.password} />                
            
            { buildSignupForm() }
    
            { loading ? <Button variant="outline-success" className="row m-3" type="submit"> 
            <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"/>Logging In...</Button> :
           <Button variant="outline-success" className="row m-3" type="submit">Log In</Button> }

          </Form.Group>
        </Form.Row>
        <Form.Group className="row align-items-center justify-content-center">
          {location.includes('signup') ? null : 
        <Button variant="outline-secondary" href='/signup'>Sign Up</Button> }
        </Form.Group>
      </Form>
    </Container>
  )
}
 
const readAccess = (state) => {
  return {
      loading: state.loading.user,
      errors: state.errors.user
  }
}

export default connect(readAccess, { login, signup, clearLoginErrors })(Login);