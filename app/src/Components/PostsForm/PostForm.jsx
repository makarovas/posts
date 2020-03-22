import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost, showAlert } from "../../actions";
import Alert from "../Alert/Alert";
class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = { title: "" };
  }
  handleSubmit = event => {
    event.preventDefault();
    const { title } = this.state;
    const newPost = { title, id: Date.now().toLocaleString() };
    if (!title.trim()) {
      return this.props.showAlert("Alarm");
    }
    this.props.createPost(newPost);

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
    console.log(this.props);
    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.alert && <Alert text={this.props.alert} />}
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

// const mapDispatchToProps = dispatch => {
//   return {
//     something: () => dispatch(createPost())
//   };
// };
const mapStateToProps = state => ({ alert: state.app.alert });

const mapDispatchToProps = {
  createPost,
  showAlert
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
