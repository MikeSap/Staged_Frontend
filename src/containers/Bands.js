import React, { useState, useEffect } from 'react'

import BandCard from '../components/BandCard'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'


const Bands = (props) => {

    const { bands } = props

    const [search, setSearch] = useState("")
    const [bandsToShow, setBandsToShow] = useState( [] )

    const searchPosts = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        setBandsToShow([...bands])
        return () => {            
        }
    }, [bands])
    
    useEffect(() => {
        // when search changes use a sort function to change bandsToShow if they include band.name, name, city, 
        return () => {            
        }
    }, [search])

    return (
        
        <Container>

        <Row>
            <Form inline>
                <Form.Control onChange={searchPosts} type="text" placeholder="Search" className="mr-sm-2" value={search} />
            </Form>
        </Row>

        <Row>
            <Container>

                { bandsToShow ? bandsToShow.map( band =>  <Row>
                    <BandCard {...band} key={band.id} />
                    </Row> ) 
                : null}

            </Container>
        </Row>
        </Container>
    )
}

export default Bands