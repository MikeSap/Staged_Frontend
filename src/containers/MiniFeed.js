import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import SuggestedPost from '../components/SuggestedPost'

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
    { eventsToShow ? eventsToShow.map( event => {
     return <SuggestedPost {...event} key={event.id} />
    })
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