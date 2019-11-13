import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
// import axios from "axios";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";
import "./Register.css";

// @important points
// insted of props.setAlert
// we deconstruct it ans use only setAlert
const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    //   ... is a spread operator that makes a copy of the main object
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("password do not match", "danger");
    } else {
      // console.log("SUCCESS");
      register({ name, email, password });
      //   const newUser = {
      //     name,
      //     email,
      //     password,
      //     password2
      //   };
      //   try {
      //     const config = {
      //       headers: {
      //         "Content-Type": "Application/json"
      //       }
      //     };
      //     const body = JSON.stringify(newUser);
      //     const res = await axios.post("/api/users", body, config);
      //     console.log(res.data);
      //   } catch (err) {
      //     console.error(err.response.data);
      //   }
    }
  };
  // if logged in
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
        <div id="flex2sp">
          <div className="signup">
            <h2>Sign Up</h2>
            <form action="#" onSubmit={e => onSubmit(e)}>
              <label>Name</label>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Enter Your name"
                  name="name"
                  value={name}
                  onChange={e => onChange(e)}
                  required
                />
              </div>
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
              <label>Retype Password</label>
              <div className="input-group">
                <input
                  type="Password"
                  name="password2"
                  value={password2}
                  onChange={e => onChange(e)}
                  placeholder="Enter Password"
                  required
                  minLength="6"
                />
              </div>
              <button className="login-button" type="submit" value="Login">
                Sign Up
              </button>
            </form>
            <p className="account">
              Have an account?{" "}
              <Link to="/login" style={{ color: "#0facf3" }}>
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
