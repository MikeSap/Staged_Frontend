import { followBand } from '../actions/Bands'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const SuggestedPost = (props) => {

    let followedBandNames = props.followedBands.map(b => b.name)
    let userBandNames = props.user.bands.map(b => b.name)
    let nameList = followedBandNames.concat(userBandNames)

    const handleFollow = () => {
        props.followBand(props.user.id, props.band.id)
    }

    return (        
        <>
        <Card bg="light" style={{ width: '15vw' }}>
            <Card.Header as="h4">{props.band.name}</Card.Header> 
            
            <Card.Body>
            
                <Card.Title>{props.name}</Card.Title> 
                
                <Card.Text><a target="_blank" rel="noreferrer" href={props.url}>{props.url.split("/")[3]}</a></Card.Text>
                
                { nameList.includes(props.band.name) ? null :
                <Button onClick={handleFollow}>Follow</Button>
                }

            </Card.Body>
        </Card>
        </>      
    )
}

const readAccess = state => {
    return {
        user: state.user,
        followedBands: state.followedBands
    }
}

export default connect(readAccess, { followBand })(SuggestedPost)