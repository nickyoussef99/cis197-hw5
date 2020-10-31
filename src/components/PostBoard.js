/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react'
import PostForm from './PostForm'
import PostList from './PostList'
import Post from './Post'

const PostBoard = () => {
  const [posts, updatePosts] = useState([])
  const [key, updateKey] = useState(1)

  const formButtonClickAction = (name, setName, post, setPost) => {
    updatePosts([...posts, <Post key={key} name={name} post={post} id={key} />])
    updateKey(key + 1)
    setName('')
    setPost('')
  }
  return (
    <div>
      <PostForm header clickAction={formButtonClickAction} defaultText="" />
      <br />
      <PostList posts={posts} />
    </div>
  )
}

export default PostBoard
