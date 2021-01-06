import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

import { connect } from "react-redux";
import React, { useEffect } from "react";
import { popBandShow } from "../actions/Bands";

import BandFeed from "../containers/BandFeed";
import BandCard from "../components/BandCard";

const BandShow = (props) => {
  const { band, upcomingEvents, pastEvents, popBandShow, loading } = props;

  useEffect(() => {
    if (band) {
      return;
    }
    let lastSlash = window.location.href.lastIndexOf("/");
    let bandId = parseInt(window.location.href.slice(lastSlash + 1), 10);
    popBandShow({ id: bandId });
  }, [band, popBandShow]);

  return (
    <Container className="dashboard">
      <Row lg={12}>
        {loading ? (
          <Spinner animation="grow" />
        ) : (
          <Col
            lg={{ span: 3, order: 1 }}
            md={{ span: 6, order: 1 }}
            sm={{ span: 12, order: 1 }}
            xs={{ span: 12, order: 1 }}
          >
            <Row as="h3">Past Events</Row>
            <Row className="mini-band-feed-side-scroll">
              <BandFeed events={pastEvents} past="true" />
            </Row>
          </Col>
        )}

        {loading ? (
          <Spinner animation="grow" />
        ) : (
          <Col
            lg={{ span: 5, order: 4 }}
            md={{ span: 12, order: 12 }}
            sm={{ span: 12, order: 12 }}
            xs={{ span: 12, order: 12 }}
          >
            <Row>
              <BandCard {...band} />
            </Row>
          </Col>
        )}

        {loading ? (
          <Spinner animation="grow" />
        ) : (
          <Col
            lg={{ span: 3, order: 12 }}
            md={{ span: 6, order: 4 }}
            sm={{ span: 12, order: 2 }}
            xs={{ span: 12, order: 2 }}
          >
            <Row as="h3">Upcoming Events</Row>
            <Row className="mini-band-feed-side-scroll">
              <BandFeed events={upcomingEvents} />
            </Row>
          </Col>
        )}
      </Row>
    </Container>
  );
};

const readAccess = (state) => {
  return {
    band: state.showBand.band,
    upcomingEvents: state.showBand.upcomingEvents,
    pastEvents: state.showBand.pastEvents,
    loading: state.loading.miniFeed,
  };
};

export default connect(readAccess, { popBandShow })(BandShow);
