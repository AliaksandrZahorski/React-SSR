import React from 'react';
import { connect } from 'react-redux';

import { addRecord } from '../../actions';

const mapDispatchToProps = dispatch => ({
  onAddRecord(record) {
    dispatch(addRecord(record));
  },
});

class AddRecord extends React.Component {
  state = {
    author: '',
    title: '',
    text: '',
  };

  onSubmitForm = e => {
    e.preventDefault();
    this.props.onAddRecord(this.state);
  };

  handleAuthorChange = e => {
    e.preventDefault();
    this.setState({ author: e.target.value });
  };

  handleTitleChange = e => {
    e.preventDefault();
    this.setState({ title: e.target.value });
  };

  handleTextChange = e => {
    e.preventDefault();
    this.setState({ text: e.target.value });
  };

  render() {
    return(
      <div>
        <form onSubmit={this.onSubmitForm} autoComplete="off">
          <label htmlFor="author">
            Author
          </label>
          <input
            name="author"
            id="author"
            value={this.state.author}
            onChange={this.handleAuthorChange}
          />
          <label htmlFor="title">
            Title
          </label>
          <input
            name="title"
            id="title"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
          <label htmlFor="text">
            Text
          </label>
          <input
            name="text"
            id="text"
            value={this.state.text}
            onChange={this.handleTextChange}
          />
          <button type="submit">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(AddRecord);
