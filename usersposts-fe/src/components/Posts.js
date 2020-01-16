//react
import React, { useEffect } from 'react';
//redux
import { connect, useDispatch } from 'react-redux'
import constants from '../redux/constants'
//axios
import Axios from 'axios'


const Posts = props => {
  const dispatch = useDispatch()
  useEffect(() => {
    Axios.get('http://localhost:5000/api/posts')
      .then( res => {
        console.log(res)
        dispatch({ type: constants.GET_POSTS, payload: res.data.posts })
      })
      .catch( err => {
        console.log(err);
      })
  }, [])

  return (
    <div className='posts__cont'>
      {
        props.posts
          ?
            props.posts.map((post, index) => (
              <div key={index} className='posts__card'>
                <p>{post.text}</p>
              </div>
            ))
          :
            null
      }
    </div>
  )
}

const mapStateToProps = ({ postReducer }) => {
  return {
    posts: postReducer.posts
  }
}

export default connect(mapStateToProps)(Posts);