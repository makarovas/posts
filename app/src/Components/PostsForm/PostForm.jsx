import React, { Component } from "react";

export default class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = { title: "" };
  }
  handleSubmit = event => {
    event.preventDefault();
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
            onChange={event => this.handleChange(event)}
          />
        </div>
        <button className="btn btn-success" type="submit">
          Create
        </button>
      </form>
    );
  }
}
