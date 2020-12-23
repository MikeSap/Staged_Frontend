import { connect } from 'react-redux'

import MiniBandPost from '../components/MiniBandPost'

import Row from 'react-bootstrap/Row'

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
    <div style={{ overflow:'auto', maxHeight: "75vh", maxWidth: "17vw"}}>
    { eventsToShow ? eventsToShow.map( event => <Row style={{width:"30vw"}}>                    
        <MiniBandPost {...event} key={event.id} />
        </Row> )
        : null }
    </div>
  )
}

const readAccess = state => {
  return {
  }
}

export default connect(readAccess)(BandFeed)