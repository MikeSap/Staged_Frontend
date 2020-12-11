import React, { useState } from 'react';
import { connect } from 'react-redux'
import { login, signup } from '../actions/Auth'
import { useHistory } from "react-router";

const Login = (props) => {

    const [formData, setFormData] = useState({email:"", password: "", password_confirmation: ""})
    const history = useHistory()
    const location = history.location.pathname
    
    const handleSubmit = (e) => {
        e.preventDefault();
        location.includes('signup') ? 
        props.signup(formData)
        :props.login(formData)
        setFormData({
          email: '',
          password: '',
          password_confirmation: ''
        })
      }
    
    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      }

        return(
         

            // {props.loading ? <Loader active /> : null}

            //   {location.includes('signup') ?
            //   <Header as='h2' color='black' textAlign='center'>
            //   Sign-up to FlatNote
            //   </Header>
            //   :
            //   <Header as='h2' color='black' textAlign='center'>
            //   Log-in to FlatNote
            //   </Header>
            //   }

                <form onSubmit={handleSubmit}>

                  {/* HOW DO I MAKE THIS MESSAGE TIMEOUT */}
                  {/* {props.loginInfo.errors ? alert(props.loginInfo.user) : null} */}

                    <input placeholder='email' type="text" name="email" onChange={handleChange} value={formData.email}/>

                    <input placeholder='password' type="password" name="password" onChange={handleChange} value={formData.password} />                

                    {location.includes('signup') ? 
     
                    <input placeholder='password confirmation' type="password" name="password_confirmation" onChange={handleChange} value={formData.password_confirmation} />                
   
                    : null }
                    <button type="submit">Submit</button>

                </form>
                
                // {location.includes('signup') ? null : 
                // <div>
                // New to Staged? <a href='/signup'>Sign Up</a>
                // </div>
                // }
        )
}
 
const readAccess = (state) => {
  return {
  }
}

export default connect(readAccess, { login, signup })(Login);