import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../../actions";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = { title: "" };
  }
  handleSubmit = event => {
    event.preventDefault();
    const { title } = this.state;
    const newPost = { title, id: Date.now().toLocaleString() };
    this.something(newPost);
    console.log(newPost);
    // this.setState({ value: "" });
  };

  handleChange = event => {
    event.persist();
    this.setState(prev => ({
      ...prev,
      ...{ [event.target.name]: event.target.value }
    }));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Заголовок</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={this.state.value}
            placeholder="Введите заголовок"
            onChange={this.handleChange}
          />
        </div>
        <button className="btn btn-success" type="submit">
          Create
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    something: () => dispatch(createPost())
  };
};

export default connect(null, mapDispatchToProps)(PostForm);
