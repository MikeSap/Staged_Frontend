import { followBand } from "../actions/Bands";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { useHistory } from "react-router";

const SuggestedPost = (props) => {
  const { user } = props;
  const history = useHistory();
  const location = history.location.pathname;

  let followedBandIds = user.followed ? user.followed.map((b) => b.id) : [];
  let userBandIds = user.bands ? user.bands.map((b) => b.id) : [];
  let idList = followedBandIds.concat(userBandIds);

  const handleFollow = () => {
    location.includes("/manage_band") ? console.log("123") : props.setPage(1);
    props.followBand(user.id, props.band.id);
  };

  return (
    <>
      <Card bg="light">
        <Card.Header as="h4">
          {props.band.name}
          <h5 className="card-type">{props.event_type}</h5>
        </Card.Header>

        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          {props.event_type === "Show" ? (
            <Card.Text>Where / {props.location} </Card.Text>
          ) : null}
          <Card.Text>{props.date.split("T")[0]}</Card.Text>

          <Card.Text>
            <a target="_blank" rel="noreferrer" href={props.url}>
              {props.url.split("/")[3]}
            </a>
          </Card.Text>

          {idList.includes(props.band.id) ? null : (
            <Button
              size="sm"
              variant="outline-secondary"
              onClick={handleFollow}
            >
              Follow
            </Button>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

const readAccess = (state) => {
  return {
    user: state.user,
  };
};

export default connect(readAccess, { followBand })(SuggestedPost);
