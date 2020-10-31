/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import PostBoard from './PostBoard'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  padding-top: 50px;
  padding-right: 80px;
  padding-left: 80px;
  padding-bottom: 20px;
`;

const App = () => (
  <Container>
    <Wrapper>
      <Header />
    </Wrapper>
    <PostBoard />
  </Container>
)
export default App
