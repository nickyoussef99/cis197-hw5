/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react'
import PropTypes from 'prop-types'

const PostList = ({ posts }) => (
  <div>
    <br />
    {posts.map(post => (
      post
    ))}
  </div>
)

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostList
