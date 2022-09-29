import axios from 'axios'
import React, { useState} from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { loggin } from '../../features/userSlice/userSlice'


import '../Login/Login.css'
const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
      })
      const history = useHistory()
      const dispatch = useDispatch()
      //Handle form state
      const handleChange = e => {
        const newUserInfo = { ...user }
        newUserInfo[e.target.name] = e.target.value
        setUser(newUserInfo)
      }
      //Handle Form Submit
      const handleSubmit = e => {
        e.preventDefault()
    
        axios
          .post('https://immense-badlands-43010.herokuapp.com/api/login', {
            ...user
          })
          .then(response => {
            console.log('success', response.data)
            dispatch(
              loggin({
                user: response.data,
              })
            )
    
            if (response.data.email) {
              console.log(response.data.email)
              history.push('home')
            }
        
          })
        //   .catch(error => {
        // 	console.log("noman")
        //     console.log(error.response)
        //   })
      }
  return (
    <div>
      <div className='signin-form'>
        <form onSubmit={handleSubmit}>
          <h2>Sign In </h2>
          <div className='form-group'>
            <input
              type='email'
              class='form-control input-lg'
              name='email'
              placeholder='Email Address'
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control input-lg'
              name='password'
              placeholder='Password'
              onChange={handleChange}
              required='required'
            />
          </div>
          <div className='form-group'>
            <button
              type='submit'
              className='btn btn-success btn-lg btn-block signin-btn'
            >
              Sign In
            </button>
          </div>
          <div className='text-center small'>
            Already have an account? <a href='/signUp'>Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
