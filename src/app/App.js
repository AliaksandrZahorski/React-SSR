import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    const { blogs } = this.props;
    return (
      <div>
        <h1>hello world {blogs.length}</h1>
      </div>
    );
  }
}

const mapStateToProps = ({ blogs }) => ({
  blogs
});

export default connect(mapStateToProps)(App);
