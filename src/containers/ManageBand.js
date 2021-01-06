import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { fetchManagedBandEvents } from "../actions/Events";

import CalendarFeed from "../containers/CalendarFeed";
import Feed from "../containers/Feed";
import EventForm from "../components/EventForm";
import BandForm from "../components/BandForm";
import Spinner from "react-bootstrap/Spinner";

const ManageBand = (props) => {
  const {
    managedBand,
    managedBandEvents,
    fetchManagedBandEvents,
    feedLoading,
  } = props;

  const [page, setPage] = useState(1);

  useEffect(() => {
    if (managedBand) {
      fetchManagedBandEvents(managedBand.id, page);
    }
  }, [managedBand, fetchManagedBandEvents, page]);

  return (
    <Container className="dashboard">
      <Row lg={12}>
        <Col
          lg={{ span: 3, order: 1 }}
          md={{ span: 6, order: 1 }}
          sm={{ span: 12, order: 1 }}
          xs={{ span: 12, order: 1 }}
        >
          <div className="sticky-top sidebar">
            <CalendarFeed />
          </div>
        </Col>

        <Col
          lg={{ span: 5, order: 4 }}
          md={{ span: 12, order: 12 }}
          sm={{ span: 12, order: 12 }}
          xs={{ span: 12, order: 12 }}
        >
          <Row as="h2" className="card-header">
            {managedBand.name}'s Upcoming Events
          </Row>
          <Feed events={managedBandEvents} />
          {feedLoading ? (
            <Button
              className="load-button"
              variant="outline-dark"
              type="submit"
            >
              <Spinner as="span" animation="grow" size="sm" role="status" />
              Loading Page {page}
            </Button>
          ) : (
            <Button
              className="load-button"
              variant="outline-dark"
              onClick={() => setPage(page + 1)}
            >
              Load More...
            </Button>
          )}
        </Col>

        <Col
          lg={{ span: 3, order: 12 }}
          md={{ span: 6, order: 4 }}
          sm={{ span: 12, order: 2 }}
          xs={{ span: 12, order: 2 }}
        >
          <div className="sticky-top mini-feed-side-scroll sidebar">
            <EventForm />
            <BandForm />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

const readAccess = (state) => {
  return {
    managedBand: state.managedBand,
    managedBandEvents: state.managedBandEvents,
    feedLoading: state.loading.feed,
  };
};

export default connect(readAccess, { fetchManagedBandEvents })(ManageBand);
