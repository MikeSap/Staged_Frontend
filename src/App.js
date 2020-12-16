import './App.css';
import { autoLogin } from './actions/Auth'
import { allEvents, allBands } from './actions/Index'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Login from './components/Login'
import NavBar from './components/NavBar'
import BandForm from './components/BandForm'
import Dashboard from './containers/Dashboard'
import ManageBand from './containers/ManageBand'
import Feed from './containers/Feed'
import Bands from './containers/Bands'
import CalendarFeed from './containers/CalendarFeed'
import { Switch, Route, Redirect } from "react-router-dom"
import { useHistory } from "react-router";

const App = (props) => {
  
  const { autoLogin, allEvents, allBands, events, bands } = props
  const history = useHistory()
  const location = history.location.pathname

  useEffect(() => {
    autoLogin()
  },[autoLogin])
  
  useEffect(() => {
    switch (location){
      case "/merch":
        return allEvents("merch")
      case "/music":
        return allEvents("music")
      case "/shows":
        return allEvents("shows")
      case "/bands":
        return allBands()
      default:
        return 
    }
  },[location, allEvents, allBands])


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
              <Bands bands={bands}/>
            </div>          
          )}}/>

        <Route exact path="/calendar" render={() => {
          return (
            <div>
              <NavBar />
              <CalendarFeed />
            </div>          
          )}}/>

        <Route exact path="/merch" render={() => {
          return (
            <div>
              <NavBar />
              <Feed events={events.merch}/>
            </div>          
          )}}/>

        <Route exact path="/music" render={() => {
          return (
            <div>
              <NavBar />
              <Feed events={events.music}/>
            </div>          
          )}}/>

        <Route exact path="/shows" render={() => {
          return (
            <div>
              <NavBar />
              <Feed events={events.shows}/>
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

export default connect(readAccess, ({ autoLogin, allEvents, allBands }))(App); 
