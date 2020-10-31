/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Vote from './Vote'
import ReplyList from './ReplyList'
import PostForm from './PostForm'

const Container = styled.div`
  display:flex;
  flex-direction: row;
  align-items: space-around;
  border: 3px solid black;
`;

const Wrapper = styled.div`
  display:flex;
  flex-direction: column;
  align-items:flex-start;
  flex-basis: auto;
  flex-grow: 5;
  width: 100%;
  padding-left: 2%;
`;

const Name = styled.h3`
  color: blue;
  font-weight: bold;
`;

const ReplyTo = styled.p`
  color: gray;
  font-weight: lighter;
`;

const Text = styled.h4`
  font-weight: bolder;
  font-size: 18;
`;

const Reply = ({
  name, post, depth, parentPost,
}) => {
  const [formVisible, toggleForm] = useState(false)
  const [replies, updateReplies] = useState([])
  const [key, updateKey] = useState(0)

  const formButtonClickAction = (replyName, setName, replyPost, setPost) => {
    updateReplies([...replies, <Reply
      key={key}
      name={replyName}
      post={replyPost}
      depth={depth + 1}
      parentPost={`Replying to ${name}: "${post}"`}
    />])
    updateKey(key + 1)
    toggleForm(false)
    setName('')
    setPost('')
  }
  return (
    <div>
      <Container>
        <br />
        <Wrapper>
          <Name>{name}</Name>
          <Text>
            {post}
          </Text>
          <ReplyTo>{parentPost}</ReplyTo>
          {depth < 3
          && (
          <button
            type="submit"
            onClick={e => {
              e.preventDefault()
              toggleForm(!formVisible)
            }}
          >
            Reply
          </button>
          )}
        </Wrapper>
        <Vote />
      </Container>
      {formVisible
        && <PostForm header={false} clickAction={formButtonClickAction} defaultText={`@${name}`} />}
      {depth < 3
      && <ReplyList replies={replies} />}
    </div>
  )
}

Reply.propTypes = {
  name: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
  depth: PropTypes.number.isRequired,
  parentPost: PropTypes.string.isRequired,
};

export default Reply
