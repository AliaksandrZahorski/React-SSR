import React from 'react';

const BlogFilter = ({ onSearch }) => (
  <input
    type="text"
    placeholder="Search"
    onChange={onSearch}
  />
);

export default BlogFilter;
