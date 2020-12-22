import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'

const MiniBandPost = (props) => {

    return (        
        <>
        <Card bg="light" style={{ width: '15vw' }}>
          
        <Card.Header>{props.name}</Card.Header> 

            <Card.Body>
            
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