import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/post";
import "./PostForm.css";

const PostForm = ({ addPost }) => {
  // const [text, setText] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    text: "",
    imglink: ""
  });

  const { title, text, imglink } = formData;

  const onChange = e =>
    //   ... is a spread operator that makes a copy of the main object
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    addPost({ title, text, imglink });
    setFormData({ title: "", text: "", imglink: "" });
  };

  return (
    <div className="post-form">
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            className="no-border"
            type="text"
            placeholder="Title...."
            name="title"
            value={title}
            onChange={e => onChange(e)}
            style={{ fontSize: "48px" }}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            id="txtArea"
            name="text"
            rows="15"
            cols="70"
            placeholder="Start typing Here............."
            value={text}
            onChange={e => onChange(e)}
            style={{ resize: "none" }}
            required
          ></textarea>
        </div>
        <div className="form-group tag-button">
          <input
            className="no-border"
            type="text"
            placeholder="image link...."
            style={{ display: "inline" }}
            name="imglink"
            value={imglink}
            onChange={e => onChange(e)}
            required
          />
          <input type="submit" value="Publish!" />
        </div>
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(null, { addPost })(PostForm);
