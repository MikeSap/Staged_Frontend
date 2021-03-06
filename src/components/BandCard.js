import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { connect } from "react-redux";
import { popBandShow } from "../actions/Bands";
import { useHistory } from "react-router";
import API from "../API";

const BandCard = (props) => {
  const history = useHistory();
  const location = history.location.pathname;

  const { name, url, bio, city, photo, id } = props;
  let photoUrl = `${API}${photo}`;

  return (
    <>
      <Card className="event-post">
        <Card.Header as="h3">{name}</Card.Header>
        <Card.Body>
          <Container>
            <Row>
              <Col>
                <Card.Img src={photoUrl} alt="Band Photo" />
              </Col>
              <Col>
                <Card.Title>{name}</Card.Title>
                <Card.Text>Location: {city}</Card.Text>
                <Card.Text>Bio: {bio}</Card.Text>
                <Card.Text>
                  <a target="_blank" rel="noreferrer" href={url}>
                    Band Page
                  </a>
                </Card.Text>

                {location.includes(id) ? null : (
                  <Button
                    variant="outline-dark"
                    onClick={() => props.popBandShow({ id })}
                  >
                    Show More
                  </Button>
                )}
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
};

export default connect(null, { popBandShow })(BandCard);
