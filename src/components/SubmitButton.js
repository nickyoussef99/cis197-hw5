/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import PropTypes from 'prop-types'

const SubmitButton = ({
  clickAction, name, setName, post, setPost,
}) => (
  <div>
    <button
      type="submit"
      onClick={e => {
        e.preventDefault()
        if (name && post) {
          clickAction(name, setName, post, setPost)
        }
      }}
    >
      Submit
    </button>
  </div>
)

SubmitButton.propTypes = {
  clickAction: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  post: PropTypes.string.isRequired,
  setPost: PropTypes.func.isRequired,
};

export default SubmitButton
