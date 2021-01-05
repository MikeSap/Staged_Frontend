import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'

const MiniBandPost = (props) => {

  return (        
    <>
    <Card className="band-show-events" id="band-event" bg="light">
      
    <Card.Header as="h5">{props.name} <h5 className="card-type">{props.event_type}</h5></Card.Header> 

      <Card.Body>
      
        {props.event_type === "Show" ? 
        <Card.Text>{props.location}</Card.Text> : null } 
        <Card.Text>{props.date.split("T")[0]}</Card.Text> 
        
        <Card.Text><a target="_blank" rel="noreferrer" href={props.url}>{props.url.split("/")[3]}</a></Card.Text>

      </Card.Body>
    </Card>
    </>      
  )
}

const readAccess = state => {
  return {
    user: state.user,
  }
}

export default connect(readAccess)(MiniBandPost)