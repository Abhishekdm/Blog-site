import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import "./Navbar.css";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li className="navbtn">
        <Link className="link_a " to="/profiles">
          People
        </Link>
      </li>
      <li className="navbtn">
        <Link className="link_a " to="/posts">
          Posts
        </Link>
      </li>
      <li className="navbtn">
        <Link className="link_a " to="/dashboard">
          {/* <i className="fas fa-user"></i>{" "} */}
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li>
      <li className="navbtn">
        <a onClick={logout} href="#!" className="link_a ">
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li className="navbtn">
        <Link className="link_a " to="/profiles">
          People
        </Link>
      </li>
      <li className="navbtn">
        <Link className="link_a " to="/login">
          Login
        </Link>
      </li>
      <li className="navbtn">
        <Link className="link_a " to="/register" style={{ color: "#0FACF3" }}>
          Sign up
        </Link>
      </li>
    </ul>
  );
  return (
    <nav className="navbar">
      <h1 className="logo">
        <Link to="/"> Epoch</Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {
    logout
  }
)(Navbar);
