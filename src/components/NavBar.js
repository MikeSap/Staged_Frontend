import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { logout } from "../actions/Auth";
import { popBandManage } from "../actions/Bands";
import { connect } from "react-redux";
import navLogo from "../assets/navLogo.png";

import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
// import Image from 'react-bootstrap/Image'
// import UserIcon from '../assets/usericonwhite.png'
import SearchBar from "./SearchBar";

const NavBar = (props) => {
  const history = useHistory();

  const { user, popBandManage } = props;

  const signOut = () => {
    props.logout();
  };

  useEffect(() => {}, [user]);

  const manageBand = (band) => {
    popBandManage(band);
    history.push(`/manage_band/${band.id}`);
  };

  const loggedInNav = () => {
    return (
      <>
        <Nav className="ml-auto">
          <Nav.Link href="/bands">Bands</Nav.Link>
          <Nav.Link href="/merch">Merch</Nav.Link>
          <Nav.Link href="/music">Music</Nav.Link>
          <Nav.Link href="/shows">Shows</Nav.Link>
          <NavDropdown title="Manage Bands" id="band-management">
            {user.bands
              ? user.bands.map((band) => (
                  <NavDropdown.Item onClick={() => manageBand(band)}>
                    {band.name}
                  </NavDropdown.Item>
                ))
              : null}
            <NavDropdown.Divider />
            <NavDropdown.Item
              onClick={() => history.push(`/band_registration`)}
            >
              Register a Band
            </NavDropdown.Item>
          </NavDropdown>

          {/* <Image className="mr-auto" src= {UserIcon} roundedCircle/>          */}
        </Nav>
        <div className="nav-search">
          <SearchBar type="bands" />
        </div>
        <Button
          className="ml-auto"
          size="sm"
          variant="dark"
          onClick={() => signOut()}
          primary
        >
          Sign Out
        </Button>
      </>
    );
  };

  return (
    <Navbar collapseOnSelect expand="lg" sticky="top">
      <Navbar.Brand href="/">
        <img src={navLogo} alt="Staged Logo" className="ml-auto" />
      </Navbar.Brand>
      <Navbar.Brand href="/" className="ml-auto">
        Staged
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {!user.id ? null : loggedInNav()}
      </Navbar.Collapse>
    </Navbar>
  );
};

const readAccess = (state) => {
  return {
    user: state.user,
  };
};

export default connect(readAccess, { logout, popBandManage })(NavBar);
