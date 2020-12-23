import { followBand } from '../actions/Bands'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const SuggestedPost = (props) => {

    const { user } = props

    let followedBandIds = user.followed ? user.followed.map(b => b.id) : []
    let userBandIds = user.bands ? user.bands.map(b => b.id) : []
    let idList = followedBandIds.concat(userBandIds)

    const handleFollow = () => {
        props.followBand(props.user.id, props.band.id)
    }

    return (        
        <>
        <Card bg="light" style={{ width: '15vw', padding: 5, marginLeft: '3vw', marginRight: 0 }}>
            <Card.Header as="h4" style={{fontFamily: 'stencil'}}>{props.band.name}</Card.Header> 
            
            <Card.Body>
            
                <Card.Title>{props.name}</Card.Title> 
                <Card.Text>{props.date.split("T")[0]}</Card.Text> 
                
                <Card.Text><a target="_blank" rel="noreferrer" href={props.url}>{props.url.split("/")[3]}</a></Card.Text>
                
                { idList.includes(props.band.id) ? null :
                <Button variant="outline-secondary" onClick={handleFollow}>Follow</Button>
                }

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

export default connect(readAccess, { followBand })(SuggestedPost)