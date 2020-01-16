//react
import React, { useEffect } from 'react';
//redux
import { connect, useDispatch } from 'react-redux'
import constants from '../redux/constants'
//axios
import Axios from 'axios'

// renders a list of users with the property name displayed

const Users = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    Axios.get('http://localhost:5000/api/users')
      .then( res => {
        console.log(res);
        dispatch({ type: constants.GET_USERS, payload: res.data.users })
      })
      .catch( err => {
        console.log(err);
      })
  }, [])

  return (
    <div className='users__cont'>
      {
        props.users.length
          ?
            props.users.map((user, index) => (
            
              <div className='users__card' key={index}><h5>{user.name}</h5></div>
            ))
          :
            null
      }
    </div>
  )
}

const mapStateToProps = ({ userReducer }) => {
  return {
    users: userReducer.users
  }
}

export default connect(mapStateToProps)(Users);