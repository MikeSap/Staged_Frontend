import { connect } from 'react-redux'

import MiniBandPost from '../components/MiniBandPost'

const BandFeed = (props) => {

const { past } = props

const eventSort = () => {
  let events = props.events ? [...props.events] : []

  events = past ? events.sort( (e1, e2) => new Date(e1.date) > new Date(e2.date) ? -1 : 1)
  : events.sort( (e1, e2) => new Date(e1.date) < new Date(e2.date) ? -1 : 1)

  return events
}

const eventsToShow = eventSort()
  return (
    <div className="mini-feed-side-scroll">
    { eventsToShow ? eventsToShow.map( event => {             
        return <MiniBandPost {...event} key={event.id} />
        })
        : null }
    </div>
  )
}

const readAccess = state => {
  return {
    loading: state.loading.MiniFeed
  }
}

export default connect(readAccess)(BandFeed)