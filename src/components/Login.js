import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { login, signup, clearLoginErrors } from '../actions/Auth'
import { useHistory } from "react-router";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Login = (props) => {

    const [formData, setFormData] = useState({email:"", password: ""})
    const history = useHistory()
    const location = history.location.pathname
    const { errors, clearLoginErrors } = props

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
         
            <Container fluid>                  
               <Form onSubmit={handleSubmit}>
               <Form.Row>
                    <Form.Group>
                        
                            {location.includes('signup') ?
                                <Form.Label  as={Row}>Sign-up for Staged</Form.Label>
                                :
                                <Form.Label>Log-in to Staged</Form.Label>
                            }     
                        
                    {props.errors ? <h3>{props.errors}</h3> : null}

                        <Form.Control placeholder='email' type="email" name="email" onChange={handleChange} value={formData.email}/>

                        <Form.Control placeholder='password' type="password" name="password" onChange={handleChange} value={formData.password} />                
                        
                        { buildSignupForm() }
                
                        <Button type="submit">Submit</Button>

                    </Form.Group>
                </Form.Row>
                </Form>
                
                {location.includes('signup') ? null : 
                    <a href='/signup'>Sign Up</a>
                }
            </Container>
        )
}
 
const readAccess = (state) => {
  return {
      loading: state.loading,
      errors: state.errors.user
  }
}

export default connect(readAccess, { login, signup, clearLoginErrors })(Login);