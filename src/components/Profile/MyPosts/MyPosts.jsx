import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
  return ( 
  <div>
    My posts
    <div>
      <textarea></textarea>
      <button>add post</button>
    </div>
    <div className={s.content}>
        <Post />
      </div>
      </div>
  )

}
 export default MyPosts;