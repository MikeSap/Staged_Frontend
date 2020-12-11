import './App.css';
import { autoLogin } from './actions/Auth'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Login from './components/Login'
import NavBar from './components/NavBar'
import Dashboard from './components/Dashboard'
import { Switch, Route,  Redirect } from "react-router-dom"


const App = (props) => {
  
  const { autoLogin } = props

  useEffect(() => {
    autoLogin()
  },[autoLogin])

  return (
    <div>
        <Switch>
        
        <Route exact path="/" render={() => {
          return (
            <Redirect to='/dashboard' /> 
          )
        }}/>
        
        <Route exact path="/login" render={() => {
          return (
            <div>
              <NavBar />
              <Login />
            </div>          
          )}}/>
        
        <Route exact path="/signup" render={() => {
          return (
            <div>
              <NavBar />
              <Login />
            </div>          
          )}}/>

        <Route exact path="/dashboard" render={() => {
          return (
            <div>
              <NavBar />
              <Dashboard />
            </div>          
          )}}/>

          </Switch>
    </div>
  );
}

const readAccess = (state) => {
  return {
    user: state.user,
    loading: state.loading,
    errors: state.errors
  }
}

export default connect(readAccess, ({ autoLogin }))(App); 
