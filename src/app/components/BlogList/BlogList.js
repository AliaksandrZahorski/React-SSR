import React from 'react';

import Blog from '../Blog/Blog';

const BlogList = ({ blogs }) => {
  return(
    <div>
      {blogs.map(b => <Blog data={b} key={b.id} />)}
    </div>
  );
}

export default BlogList;
