import Container from 'react-bootstrap/Container'

import { connect } from 'react-redux'

import Login from '../components/Login'

const Home = (props) =>  {

    return (

        <Container className="home">
          <Login /> 
        </Container>
    )
}

const readAccess = state => {
    return {
    }
}

export default connect(readAccess, { })(Home)