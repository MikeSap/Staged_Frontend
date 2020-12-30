import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import SuggestedPost from '../components/SuggestedPost'

import Row from 'react-bootstrap/Row'
import Skeleton from 'react-loading-skeleton'

const MiniFeed = (props) => {

  const { followedBands, loading } = props


  const eventSort = () => {
    let events = props.events ? [...props.events] : []
    
    return events
  }

  useEffect(() => {
  }, [followedBands])

  const eventsToShow = eventSort()
  return (
    loading ? <Skeleton/> : <div className="mini-feed-side-scroll" >
    { eventsToShow ? eventsToShow.map( event => <Row>                    
      <SuggestedPost {...event} key={event.id} />
      </Row> )
      : null }
    </div>
  )
}

const readAccess = state => {
  return {
    followedBands: state.user.followed,
    loading: state.loading.miniFeed
  }
}

export default connect(readAccess)(MiniFeed)