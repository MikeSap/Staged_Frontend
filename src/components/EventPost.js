import {  popEditedEvent } from '../actions/Posts'
import { connect } from 'react-redux'

const EventPost = (props) => {
    return (        
        <>
        {/* build bootstrap card */}
        {props ? <div>
            <h3>{props.band.name}</h3> <p>{props.name}</p> <p>{props.event_type}</p>
            </div>
        : null}
        </>      
    )
}

export default connect(null, { popEditedEvent })(EventPost)