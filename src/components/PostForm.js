/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

import SubmitButton from './SubmitButton'

const Title = styled.h1`
  font-size: 1.5em;
  color: forestgreen;
`;

const Container = styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;
  border: 3px solid green;
`;

const BigInput = styled.input`
  font-size:"50px"
`;

const BigTA = styled.textarea`
  font-size:"50px"
`;

const PostForm = ({ header, clickAction, defaultText }) => {
  const [name, setName] = useState('')
  const [post, setPost] = useState(defaultText)
  return (
    <Container>
      {header
      && <Title>New Post</Title> }
      <form>
        <BigInput
          type="text"
          placeholder="Name..."
          size="30"
          value={name}
          onChange={e => {
            e.preventDefault()
            setName(e.target.value)
          }}
        />
        <br />
        <br />
        <BigTA
          type="text"
          cols="30"
          rows="4"
          placeholder="Write a new message..."
          value={post}
          onChange={e => {
            e.preventDefault()
            setPost(e.target.value)
          }}
        />
        <br />
        <br />
        <SubmitButton
          clickAction={clickAction}
          name={name}
          setName={setName}
          post={post}
          setPost={setPost}
        >
          Submit
        </SubmitButton>
      </form>
    </Container>
  )
}

PostForm.propTypes = {
  clickAction: PropTypes.func.isRequired,
  header: PropTypes.bool.isRequired,
  defaultText: PropTypes.string.isRequired,
};

export default PostForm
