import React from 'react';
import { connect } from 'react-redux'

import BlogList from '../BlogList/BlogList';
import BlogFilter from '../BlogFilter/BlogFilter';

const mapStateToProps = ({ blogs }) => ({
  blogs
});


class BlogContainer extends React.Component  {
  constructor( ) {
    super( );
    this.state ={
      filter: '',
    };
  }
  
  onSearch(e) {
    const value = e.target.value.toLowerCase();
    this.setState({filter: value});
  }

  render() {
    const { blogs } = this.props;
    const result = blogs.filter(b => {
      return b.author.toLowerCase().includes(this.state.filter);
    });
    return(
      <div>
        <BlogFilter onSearch={this.onSearch.bind(this)} />
        <BlogList blogs={result} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(BlogContainer);
