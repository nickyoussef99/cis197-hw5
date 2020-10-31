/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import styled from 'styled-components'
import upvote from '../images/reddit_upvote.png'
import downvote from '../images/reddit_downvote.png'

const Container = styled.div`
  display:flex;
  flex-direction: column;
  align-items: flex-end;
  justfiy-content: flex-start;
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 5;
  width: 60%;
`;

const Vote = () => {
  const [voteCount, setVoteCount] = useState(0)
  return (
    <Container>
      <img
        height="20%"
        width="40%"
        src={upvote}
        alt="upvote"
        onClick={e => {
          e.preventDefault()
          setVoteCount(voteCount + 1)
        }}
      />
      <h2>{voteCount}</h2>
      <img
        height="20%"
        width="40%"
        src={downvote}
        alt="downvote"
        onClick={e => {
          e.preventDefault()
          setVoteCount(voteCount - 1)
        }}
      />
    </Container>
  )
}

export default Vote
