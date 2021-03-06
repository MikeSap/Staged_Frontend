import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import EventPost from "../components/EventPost";

import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import CardGroup from "react-bootstrap/CardGroup";

const Feed = (props) => {
  const { followedBandEvents, managedBandEvents } = props;

  const [search, setSearch] = useState("");

  const searchPosts = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {}, [followedBandEvents, managedBandEvents]);

  const eventSort = () => {
    let events = props.events ? [...props.events] : [];
    events = events.filter(
      (e) =>
        e.name.toUpperCase().includes(search.toUpperCase()) ||
        e.date.toUpperCase().includes(search.toUpperCase()) ||
        e.band.name.toUpperCase().includes(search.toUpperCase())
    );
    return events;
  };

  const eventsToShow = eventSort();
  return (
    <div className="feed">
      <Form className="feed-search">
        <Form.Control
          onChange={searchPosts}
          type="text"
          placeholder="Filter Posts by Date, Band, Or Title"
          className="mr-sm-2"
          value={search}
        />
      </Form>

      <CardGroup>
        {eventsToShow
          ? eventsToShow.map((event) => (
              <Row>
                <EventPost {...event} band={event.band} key={event.id} />
              </Row>
            ))
          : null}
      </CardGroup>
    </div>
  );
};

const readAccess = (state) => {
  return {
    followedBand: state.user.followed,
    followedBandEvents: state.followedEvents,
    managedBandEvents: state.managedBandEvents,
  };
};

export default connect(readAccess)(Feed);
