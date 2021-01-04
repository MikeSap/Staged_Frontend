import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router";
import { connect } from 'react-redux'
import { allMusic, allMerch, allShows } from '../actions/Index'

import IndexPost from '../components/IndexPost'

import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'

const Index = (props) => {

  const history = useHistory()
  const location = history.location.pathname

  const { followedBandEvents, managedBandEvents, allMusic, allMerch, allShows, loading } = props

  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)

  const searchPosts = (e) => {
      setSearch(e.target.value)
  }
  
  useEffect(() => {
  }, [followedBandEvents, managedBandEvents])

    useEffect(() => {
    switch (location){
      case "/merch":
        return allMerch(page)
      case "/music":
        return allMusic(page)
      case "/shows":
        return allShows(page)
      default:
        return 
      }
    },[location, allMusic, allMerch, allShows, page])

  const eventSort = () => {
    let events =  props.events ? [...props.events] : []
    events = events.filter(e => e.name.toUpperCase().includes(search.toUpperCase()) || e.date.toUpperCase().includes(search.toUpperCase()) || e.band.name.toUpperCase().includes(search.toUpperCase()))
    return events
  }

  const eventsToShow = eventSort()
  return (
    <Container>
      <Col>
      <Form >
          <Form.Control onChange={searchPosts} type="text" placeholder="Filter Posts by Date, Band, Or Title" className="mr-sm-2" value={search} />
      </Form>

      { loading ? <Spinner animation="grow" /> :  eventsToShow ? eventsToShow.map( event => <Row>
        <IndexPost {...event} band={event.band} key={event.id} />
      </Row>) 
      : null }

      <Button className="load-button" variant="outline-dark" onClick={() => setPage(page + 1)}>Load More...</Button>

      </Col>

    </Container>
  )
}

const readAccess = state => {
  return {
    followedBand: state.user.followed,
    followedBandEvents: state.followedEvents,
    managedBandEvents: state.managedBandEvents,
    loading: state.loading.feed
  }
}

export default connect(readAccess, { allMusic, allMerch, allShows })(Index)