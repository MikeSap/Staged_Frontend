import './App.css';
import { autoLogin } from './actions/Auth'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Login from './components/Login'
import NavBar from './components/NavBar'
import BandForm from './components/BandForm'
import Dashboard from './containers/Dashboard'
import ManageBand from './containers/ManageBand'
import BandShow from './containers/BandShow'
import Index from './containers/Index'
import Bands from './containers/Bands'
import { Switch, Route, Redirect } from "react-router-dom"
import { useHistory } from "react-router";

const App = (props) => {
  
  const { autoLogin, events
    // , bands
  } = props
  const history = useHistory()
  const location = history.location.pathname

  useEffect(() => {
    // need this to hit on showBand clearing
    autoLogin()
  },[autoLogin])

  return (
    <div className="App">
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

        <Route exact path="/bands" render={() => {
          return (
            <div>
              <NavBar />
              <Bands />
            </div>          
          )}}/>

        <Route exact path="/merch" render={() => {
          return (
            <div>
              <NavBar />
              <Index events={events.merch}/>
            </div>          
          )}}/>

        <Route exact path="/music" render={() => {
          return (
            <div>
              <NavBar />
              <Index events={events.music}/>
            </div>          
          )}}/>

        <Route exact path="/shows" render={() => {
          return (
            <div>
              <NavBar />
              <Index events={events.shows}/>
            </div>          
          )}}/>
        
        <Route exact path="/band_registration" render={() => {
          return (
            <div>
              <NavBar />
              <BandForm />
            </div>          
          )}}/>

        <Route exact path="/edit_band/:id" render={() => {
          return (
            <div>
              <NavBar />
              <BandForm />
            </div>          
          )}}/>
        
        <Route exact path="/manage_band/:id" render={() => {
          return (
            <div>
              <NavBar />
              <ManageBand />
            </div>          
          )}}/>

        <Route exact path="/bands/:id" render={() => {
          return (
            <div>
              <NavBar />
              <BandShow />
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
    errors: state.errors,
    events: state.events,
    bands: state.bands
  }
}

export default connect(readAccess, ({ autoLogin }))(App); 
