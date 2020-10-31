/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react'
import PropTypes from 'prop-types'

const ReplyList = ({ replies }) => (
  <div>
    {replies.map(post => (
      post
    ))}
    <br />
  </div>
)

ReplyList.propTypes = {
  replies: PropTypes.array.isRequired,
};

export default ReplyList
