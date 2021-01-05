import React, { useState, useEffect } from 'react'

import BandCard from '../components/BandCard'
import { allBands } from '../actions/Index'
import { connect } from 'react-redux'
import SearchBar from '../components/SearchBar'

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
// import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'

const Bands = (props) => {

const { allBands, bands, loading } = props

// const [search, setSearch] = useState("")
const [page, setPage] = useState(1)


// const searchPosts = (e) => {
//     setSearch(e.target.value)
// }

useEffect(() => {
  allBands(page)
}, [allBands, page])

const bandSort = () => {
  let b =  bands ? [ ...bands] : []
  // b = b.filter(e => e.name.toUpperCase().includes(search.toUpperCase()) || e.city.toUpperCase().includes(search.toUpperCase()) )
  return b
}

const bandsToShow = bandSort()
  return (
      
      <Container>
      <Col>

          <SearchBar type="bands"/>
          {/* <Form>
              <Form.Control onChange={searchPosts} type="text" placeholder="Filter by Name or City" className="mr-sm-2" value={search} />
          </Form> */}

              { bandsToShow ? bandsToShow.map( band => <Row>                
              <BandCard {...band} key={band.id} />
              </Row>) 
              : null}

          { loading ? <Button className="load-button" variant="outline-dark" onClick={() => setPage(page + 1)}><Spinner animation="grow" size="sm" />Loading Page {page}...</Button> :  
          <Button className="load-button" variant="outline-dark" onClick={() => setPage(page + 1)}>Load More...</Button> }

      </Col>
      </Container>
  )
}

const readAccess = state => {
  return {
    bands: state.bands,
    loading: state.loading.feed
  }
}

export default connect(readAccess, {allBands})(Bands)