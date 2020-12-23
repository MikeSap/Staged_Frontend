import React, { useState, useEffect } from 'react'

import BandCard from '../components/BandCard'
import { allBands } from '../actions/Index'
import { connect } from 'react-redux'

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'


const Bands = (props) => {

const { allBands, bands } = props

const [search, setSearch] = useState("")

const searchPosts = (e) => {
    setSearch(e.target.value)
}

useEffect(() => {
  if(!bands[0]){
  allBands()
  }
}, [allBands, bands])

const bandSort = () => {
  let b =  bands ? [ ...bands] : []
  b = b.filter(e => e.name.toUpperCase().includes(search.toUpperCase()) || e.city.toUpperCase().includes(search.toUpperCase()) )
  return b
}

const bandsToShow = bandSort()
  return (
      
      <Container ><Row>
        <Col><Row></Row></Col>
      <Col xs={5} className="justify-content-center">
      <Row>
          <Form style={{width:"60vw"}}>
              <Form.Control onChange={searchPosts} type="text" placeholder="Filter by Name or City" className="mr-sm-2" value={search} />
          </Form>
      </Row>

      <Row>
              { bandsToShow ? bandsToShow.map( band => <BandCard {...band} key={band.id} />) 
              : null}
      </Row>
      </Col>
      <Col><Row></Row></Col>
      </Row></Container>
  )
}

const readAccess = state => {
  return {
    bands: state.bands
  }
}

export default connect(readAccess, {allBands})(Bands)