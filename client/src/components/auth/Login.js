import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = e =>
    //   ... is a spread operator that makes a copy of the main object
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };
  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Fragment>
      <div id="main">
        <div id="flex1">
          <div className="welcome">
            <h1>Welcome to Epoch</h1>
          </div>
        </div>
        <div id="flex2">
          <div className="login">
            <h2>Login</h2>
            <br />
            <br />
            <form action="#" onSubmit={e => onSubmit(e)}>
              <label>Email Address</label>
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  value={email}
                  onChange={e => onChange(e)}
                  required
                />
              </div>

              <label>Password</label>
              <div className="input-group">
                <input
                  type="Password"
                  name="password"
                  value={password}
                  onChange={e => onChange(e)}
                  placeholder="Enter Password"
                  required
                  minLength="6"
                />
              </div>
              <button className="login-button" type="submit" value="Login">
                Login
              </button>
            </form>
            <p className="account">
              New User?{" "}
              <Link to="/register" style={{ color: "#0facf3" }}>
                SignUp
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {
  login
})(Login);
